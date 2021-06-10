<?php

namespace App\DataFixtures;

use App\Entity\DoneTodo;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class DoneTodosFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        foreach ($this->getUserLists() as [$userId, $title, $description, $created]) {
            $todoList = new DoneTodo();
            $todoList->setUserId($userId);
            $todoList->setTitle($title);
            $todoList->setDescription($description);
            $todoList->setCreatedAt($created);

            $manager->persist($todoList);
        }

        $manager->flush();
    }

    private function getUserLists(): array
    {
        return [

            ['1', 'My Todo', 'This is description', new \DateTime()],
            ['2', 'My Todo', 'This is description', new \DateTime()],

        ];
    }
}
