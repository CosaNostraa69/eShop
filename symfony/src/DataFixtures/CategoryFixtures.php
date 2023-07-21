<?php

namespace App\DataFixtures;

use App\Entity\Categories;
use Doctrine\Persistence\ObjectManager;

class CategoryFixtures extends AbstractFixtures
{
    public function load(ObjectManager $manager)
    {
        $categories = [
            [
                "Name" => "Cigarettes",
                "Label" => "cigarettes"
            ],
            [
                "Name" => "Journaux et magazines",
                "Label" => "journaux"
            ],
            [
                "Name" => "Gâteaux et bonbons",
                "Label" => "gateaux"
            ],
            [
                "Name" => "Objets divers liés au tabac",
                "Label" => "divers"
            ],
            [
                "Name" => "Boissons",
                "Label" => "boissons"
            ]
        ];

        foreach ($categories as $categoryData) {
            $category = new Categories();
            $category->setName($categoryData["Name"]);

            $manager->persist($category);

            $this->setReference('category_' . $categoryData["Label"], $category);
        }

        $manager->flush();

    }
}