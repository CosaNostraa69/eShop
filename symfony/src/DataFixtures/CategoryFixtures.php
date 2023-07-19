<?php

namespace App\DataFixtures;

use App\Entity\Categories;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\AbstractFixture;

class CategoryFixtures extends AbstractFixture
{
    public function load(ObjectManager $manager)
    {
        $categories = [
            [
                "Name" => "Cigarettes"
            ],
            [
                "Name" => "Journaux et magazines"
            ],
            [
                "Name" => "Gâteaux et bonbons"
            ],
            [
                "Name" => "Objets divers liés au tabac"
            ],
            [
                "Name" => "Boissons"
            ]
        ];
        foreach ($categories as $categoryData) {
            $category = new Categories();
            $category->setName($categoryData["Name"]);
        
            $manager->persist($category);
        
            // Use the name of the category as the reference identifier
            $this->setReference('category_' . $categoryData["Name"], $category);
        }
        
        $manager->flush();
        
    }
}