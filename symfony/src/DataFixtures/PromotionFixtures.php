<?php

namespace App\DataFixtures;

use App\Entity\Promotion;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class PromotionFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $promotions = [
            [
                "Code" => "CIG10",
                "Category" => "cigarettes",
                "Value" => 10,
            ],
            [
                "Code" => "MAG10",
                "Category" => "journaux",
                "Value" => 10,
            ],
            [
                "Code" => "GATO10",
                "Category" => "gateaux",
                "Value" => 10,
            ],
            [
                "Code" => "ALL10",
                "Category" => "divers",
                "Value" => 10,
            ],
            [
                "Code" => "GLOUGLOU10",
                "Category" => "boissons",
                "Value" => 10,
            ],
        ];

        foreach ($promotions as $promotionData) {
            $promotion = new Promotion();
            $promotion->setCode($promotionData["Code"]);
            $promotion->setCategory($promotionData["Category"]);
            $promotion->setValue($promotionData["Value"]);
            $promotion->setCreatedAt(new \DateTime());

            $manager->persist($promotion);

            $this->setReference('promotion_' . $promotionData["Code"], $promotion);
        }

        $manager->flush();
    }
}
