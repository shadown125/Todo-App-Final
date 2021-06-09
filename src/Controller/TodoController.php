<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

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
    public function register(): Response
    {
        return $this->render('todo/register/index.html.twig');
    }
}
