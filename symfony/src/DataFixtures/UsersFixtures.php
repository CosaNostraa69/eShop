<?php

namespace App\DataFixtures;

use App\Entity\Users;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class UsersFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $users = [
            [
                "FirstName" => "Orhan",
                "LastName" => "Peterson",
                "Email" => "o.rhan@test.com",
            ],
            [
                "FirstName" => "Mahdi",
                "LastName" => "Doe",
                "Email" => "mahdi.doe@test.com",
            ],
        ];

        foreach ($users as $userData) {
            $user = new Users();
            $user->setFirstName($userData["FirstName"]);
            $user->setLastName($userData["LastName"]);
            $user->setEmail($userData["Email"]);
            $user->setCreatedAt(new \DateTime());

            $manager->persist($user);

            $this->setReference('user_' . $userData["Email"], $user);
        }

        $manager->flush();
    }
}
