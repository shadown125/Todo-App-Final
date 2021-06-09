<?php

namespace App\Controller;

use App\Entity\TodoUser;
use App\Form\TodoUserType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

#[Route('/app')]

class TodoController extends AbstractController
{
    #[Route('/todo', name: 'todo')]
    public function index(): Response
    {
        return $this->render('todo/index.html.twig');
    }

    #[Route('/login', name: 'todo_login')]
    public function login(AuthenticationUtils $helper): Response
    {
        return $this->render('todo/login/index.html.twig', [
            'error' => $helper->getLastAuthenticationError()
        ]);
    }

    #[Route('/todo-logout', name: 'todo_logout')]
    public function logout(): void
    {
        throw new \Exception('This should never be reached!');
    }

    #[Route('/register', name: 'todo_register')]
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        $user = new TodoUser();
        $form = $this->createForm(TodoUserType::class, $user);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();

            $user->setName($request->request->get('todo_user')['name']);
            $user->setLastName($request->request->get('todo_user')['last_name']);
            $user->setEmail($request->request->get('todo_user')['email']);
            $password = $passwordEncoder->encodePassword($user, $request->request->get('todo_user')['password']['first']);
            $user->setPassword($password);
            $user->setRoles(['ROLE_USER_TODO']);
            $user->setCreatedAt(new \DateTime());
            $user->setLevel(1);
            $user->setExp(0);
            $user->setLevelUp(50);
            $user->setProfileImage('img-3.jpg');

            $entityManager->persist($user);
            $entityManager->flush();

            $this->loginUserAutomatically($user, $password);

            return $this->redirectToRoute('todo');
        }
        return $this->render('todo/register/index.html.twig', [
            'form' => $form->createView()
        ]);
    }

    private function loginUserAutomatically($user, $password)
    {
        $token = new UsernamePasswordToken(
            $user,
            $password,
            'todo',
            $user->getRoles()
        );
        $this->get('security.token_storage')->setToken($token);
        $this->get('session')->set('_security_main', serialize($token));
    }
}
