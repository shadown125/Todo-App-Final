<?php

namespace App\Controller;

use App\Entity\DoneTodo;
use App\Entity\TodoList;
use App\Entity\TodoUser;
use App\Form\TodoListType;
use App\Form\TodoUserImageType;
use App\Form\TodoUserNameType;
use App\Form\TodoUserPasswordType;
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
    public function index(Request $request, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        $userId = $this->get('security.token_storage')->getToken()->getUser()->getId();

        $todos = $this->getDoctrine()->getRepository(TodoList::class)->findBy(['user_id' => $userId]);
        $doneTodos = $this->getDoctrine()->getRepository(DoneTodo::class)->findBy(['user_id' => $userId]);

        $todo = new TodoList();
        $user = $this->getUser();
        $formTodo = $this->createForm(TodoListType::class, $todo);
        $userNameForm = $this->createForm(TodoUserNameType::class, $user);
        $userPasswordForm = $this->createForm(TodoUserPasswordType::class, $user);
        $formImage = $this->createForm(TodoUserImageType::class, $user);

        $this->updateName($user, $userNameForm, $request);
        $this->updatePassword($user, $userPasswordForm, $request, $passwordEncoder);
        $this->uploadImage($formImage, $user, $request);

        $formTodo->handleRequest($request);
        if($formTodo->isSubmitted() && $formTodo->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();

            $todo->setUserId($userId);
            $todo->setTitle($request->request->get('todo_list')['title']);
            $todo->setDescription($request->request->get('todo_list')['description']);
            $todo->setCreated(new \DateTime());

            $entityManager->persist($todo);
            $entityManager->flush();
            return $this->redirectToRoute('todo');
        }

        return $this->render('todo/index.html.twig', [
            'todos' => $todos,
            'form' => $formTodo->createView(),
            'userNameForm' => $userNameForm->createView(),
            'userPasswordForm' => $userPasswordForm->createView(),
            'userImage' => $formImage->createView(),
            'doneTodos' => $doneTodos
        ]);
    }

    #[Route('/done-todos', name: 'done_todos')]
    public function doneTodos(Request $request, UserPasswordEncoderInterface $passwordEncoder)
    {
        $userId = $this->get('security.token_storage')->getToken()->getUser()->getId();

        $DoneTodos = $this->getDoctrine()->getRepository(DoneTodo::class)->findBy(['user_id' => $userId]);

        $todo = new TodoList();
        $user = $this->getUser();
        $formTodo = $this->createForm(TodoListType::class, $todo);
        $userNameForm = $this->createForm(TodoUserNameType::class, $user);
        $userPasswordForm = $this->createForm(TodoUserPasswordType::class, $user);
        $formImage = $this->createForm(TodoUserImageType::class, $user);

        $this->updateName($user, $userNameForm, $request);
        $this->updatePassword($user, $userPasswordForm, $request, $passwordEncoder);
        $this->uploadImage($formImage, $user, $request);

        return $this->render('todo/doneTodos.html.twig', [
            'todos' => $DoneTodos,
            'form' => $formTodo->createView(),
            'userNameForm' => $userNameForm->createView(),
            'userPasswordForm' => $userPasswordForm->createView(),
            'userImage' => $formImage->createView(),
            'doneTodos' => $DoneTodos
        ]);
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

    #[Route('/delete-done-todo/{todo}', name: 'delete_done_todo')]
    public function deleteDoneTodo(DoneTodo $todo)
    {
        $em = $this->getDoctrine()->getManager();
        $em->remove($todo);
        $em->flush();

        return $this->redirectToRoute('done_todos');
    }

    #[Route('/delete-todo/{todo}', name: 'delete_todo')]
    public function deleteTodo(TodoList $todo)
    {
        $em = $this->getDoctrine()->getManager();
        $em->remove($todo);
        $em->flush();

        return $this->redirectToRoute('todo');
    }

    #[Route('/complete-todo/{todo}', name: 'complete_todo')]
    public function completeTodo(TodoList $todo)
    {
        $em = $this->getDoctrine()->getManager();

        $doneTodo = new DoneTodo();

        $doneTodo->setTitle($todo->getTitle());
        $doneTodo->setUserId($todo->getUserId());
        $doneTodo->setDescription($todo->getDescription());
        $doneTodo->setCreatedAt($todo->getCreated());

        $em->persist($doneTodo);

        $em->remove($todo);
        $em->flush();

        return $this->redirectToRoute('todo');
    }

    #[Route('/delete-account', name: 'delete_account')]
    public function deleteAccount()
    {
        $user = $this->getUser();
        $em = $this->getDoctrine()->getManager();
        $em->remove($user);
        $em->flush();

        session_destroy();

        return $this->redirectToRoute('todo_login');
    }

    private function updateName($user, $userNameForm, $request)
    {
        $userNameForm->handleRequest($request);
        if($userNameForm->isSubmitted() && $userNameForm->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();

            $user->setName($request->request->get('todo_user_name')['name']);
            $user->setLastName($request->request->get('todo_user_name')['last_name']);

            $entityManager->persist($user);
            $entityManager->flush();
            return $this->redirectToRoute('todo');
        }
        return $this->redirectToRoute('todo');
    }

    private function updatePassword($user, $userPasswordForm, $request, $passwordEncoder)
    {
        $userPasswordForm->handleRequest($request);
        if($userPasswordForm->isSubmitted() && $userPasswordForm->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();

            $password = $passwordEncoder->encodePassword($user, $request->request->get('todo_user_password')['password']['first']);
            $user->setPassword($password);

            $entityManager->persist($user);
            $entityManager->flush();
            return $this->redirectToRoute('todo');
        }
        return $this->redirectToRoute('todo');
    }

    private function uploadImage($formImage, $user, $request)
    {
        $formImage->handleRequest($request);
        if($formImage->isSubmitted() && $formImage->isValid()) {
            $em = $this->getDoctrine()->getManager();

            $file = $formImage->get('profile_image')->getData();
            if($file->guessExtension() === 'jpg' || $file->guessExtension() === 'jpeg' || $file->guessExtension() === 'png') {
                $fileName = sha1(random_bytes(14)) . '.' . $file->guessExtension();
                $file->move(
                    $this->getParameter('image_directory'),
                    $fileName
                );
                $user->setProfileImage($fileName);
                $em->persist($user);
                $em->flush();

                return $this->redirectToRoute('todo');
            }
        }
        return $this->redirectToRoute('todo');
    }
}
