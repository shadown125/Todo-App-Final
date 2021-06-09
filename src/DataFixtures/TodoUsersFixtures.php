<?php

namespace App\DataFixtures;

use App\Entity\TodoUser;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class TodoUsersFixtures extends Fixture
{
    public function __construct(UserPasswordEncoderInterface $password_encoder)
    {
        $this->password_encoder = $password_encoder;
    }

    public function load(ObjectManager $manager)
    {
        foreach ($this->getUserData() as [$name, $last_name, $email, $password, $roles, $created, $profession, $level, $exp, $levelUp, $profileImage]) {
            $user = new TodoUser();
            $user->setName($name);
            $user->setLastName($last_name);
            $user->setEmail($email);
            $user->setPassword($this->password_encoder->encodePassword($user, $password));
            $user->setRoles($roles);
            $user->setCreatedAt($created);
            $user->setProfession($profession);
            $user->setLevel($level);
            $user->setExp($exp);
            $user->setLevelUp($levelUp);
            $user->setProfileImage($profileImage);

            $manager->persist($user);
        }

        $manager->flush();
    }

    private function getUserData(): array
    {
        return [

            ['Dawid', 'Ol', 'do@gmail.com', '123456', ['ROLE_USER_TODO'], new \DateTime(), 'Fullstack', 1, 0, 50, 'img-3.jpg'],
            ['test', '1', 'test@gmail.com', '1234567', ['ROLE_USER_TODO'], new \DateTime(), 'Developer', 1, 0, 60, 'img-3.jpg'],

        ];
    }
}
