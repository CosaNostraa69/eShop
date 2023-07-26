<?php

namespace App\DataFixtures;

use App\Entity\Product;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends AbstractFixtures implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $products = [
            [
                "Name" => "Marlboro Red",
                "Description" => "Pack of 20 Marlboro Red cigarettes",
                "Stock" => 100,
                "ProductType" => "Tobacco",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 10.00,
                "Available" => true,
                "Category" => "cigarettes",
                "Picture" => "malboro.webp"
            ],
            [
                "Name" => "Camel Blue",
                "Description" => "Pack of 20 Camel Blue cigarettes",
                "Stock" => 80,
                "ProductType" => "Tobacco",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 9.50,
                "Available" => true,
                "Category" => "cigarettes",
                "Picture" => "camelb.webp"
            ],
            [
                "Name" => "Lucky Strike Original",
                "Description" => "Pack of 20 Lucky Strike Original cigarettes",
                "Stock" => 70,
                "ProductType" => "Tobacco",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 9.00,
                "Available" => true,
                "Category" => "cigarettes",
                "Picture" => "luckystrike.webp"
            ],
            [
                "Name" => "Gauloises Blondes",
                "Description" => "Pack of 20 Gauloises Blondes cigarettes",
                "Stock" => 90,
                "ProductType" => "Tobacco",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 8.50,
                "Available" => true,
                "Category" => "cigarettes",
                "Picture" => "gauloises.webp"
            ],
            [
                "Name" => "Dunhill International",
                "Description" => "Pack of 20 Dunhill International cigarettes",
                "Stock" => 60,
                "ProductType" => "Tobacco",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 11.00,
                "Available" => true,
                "Category" => "cigarettes",
                "Picture" => "dunhill.webp"
            ],
            [
                "Name" => "Chesterfield Blue",
                "Description" => "Pack of 20 Chesterfield Blue cigarettes",
                "Stock" => 75,
                "ProductType" => "Tobacco",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 8.50,
                "Available" => true,
                "Category" => "cigarettes",
                "Picture" => "chester.webp"
            ],
            [
                "Name" => "Davidoff Classic",
                "Description" => "Pack of 20 Davidoff Classic cigarettes",
                "Stock" => 65,
                "ProductType" => "Tobacco",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 10.50,
                "Available" => true,
                "Category" => "cigarettes",
                "Picture" => "davidoff.webp"
            ],
            [
                "Name" => "Winston Red",
                "Description" => "Pack of 20 Winston Red cigarettes",
                "Stock" => 85,
                "ProductType" => "Tobacco",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 9.00,
                "Available" => true,
                "Category" => "cigarettes",
                "Picture" => "winston.webp"
            ],
            [
                "Name" => "Pall Mall Red",
                "Description" => "Pack of 20 Pall Mall Red cigarettes",
                "Stock" => 80,
                "ProductType" => "Tobacco",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 8.00,
                "Available" => true,
                "Category" => "cigarettes",
                "Picture" => "pallmall.webp"
            ],
            [
                "Name" => "Kent Blue",
                "Description" => "Pack of 20 Kent Blue cigarettes",
                "Stock" => 95,
                "ProductType" => "Tobacco",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 9.50,
                "Available" => true,
                "Category" => "cigarettes",
                "Picture" => "kent.webp"
            ],
        
            [
                "Name" => "Le Figaro",
                "Description" => "Daily edition of Le Figaro newspaper",
                "Stock" => 45,
                "ProductType" => "Press",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 2.70,
                "Available" => true,
                "Category" => "journaux",
                "Picture" => "figaro.webp"
            ],
            [
                "Name" => "Liberation",
                "Description" => "Daily edition of Liberation newspaper",
                "Stock" => 30,
                "ProductType" => "Press",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 2.20,
                "Available" => true,
                "Category" => "journaux",
                "Picture" => "liberation.webp"
            ],
            [
                "Name" => "Le Parisien",
                "Description" => "Daily edition of Le Parisien newspaper",
                "Stock" => 50,
                "ProductType" => "Press",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 2.30,
                "Available" => true,
                "Category" => "journaux",
                "Picture" => "parisien.webp"
            ],
            [
                "Name" => "L'Equipe",
                "Description" => "Daily edition of L'Equipe newspaper",
                "Stock" => 55,
                "ProductType" => "Press",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 2.00,
                "Available" => true,
                "Category" => "journaux",
                "Picture" => "equipe.webp"
            ],
            [
                "Name" => "Les Echos",
                "Description" => "Daily edition of Les Echos newspaper",
                "Stock" => 40,
                "ProductType" => "Press",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 3.00,
                "Available" => true,
                "Category" => "journaux",
                "Picture" => "echos.webp"
            ],
            [
                "Name" => "Le Canard Enchainé",
                "Description" => "Weekly edition of Le Canard Enchainé newspaper",
                "Stock" => 60,
                "ProductType" => "Press",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 1.50,
                "Available" => true,
                "Category" => "journaux",
                "Picture" => "canard.webp"
            ],
            [
                "Name" => "France Football",
                "Description" => "Weekly edition of France Football magazine",
                "Stock" => 65,
                "ProductType" => "Press",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 2.00,
                "Available" => true,
                "Category" => "journaux",
                "Picture" => "francefoot.webp"
            ],

            [
                "Name" => "L'Obs",
                "Description" => "Weekly edition of L'Obs magazine",
                "Stock" => 70,
                "ProductType" => "Press",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 3.50,
                "Available" => true,
                "Category" => "journaux",
                "Picture" => "obs.webp"
            ],
            [
                "Name" => "Paris Match",
                "Description" => "Weekly edition of Paris Match magazine",
                "Stock" => 75,
                "ProductType" => "Press",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 4.00,
                "Available" => true,
                "Category" => "journaux",
                "Picture" => "parismatch.webp"
            ],

             [
        "Name" => "Haribo Candy",
        "Description" => "200g bag of Haribo candies",
        "Stock" => 150,
        "ProductType" => "Confectionery",
        "CreatedAt" => "2023-07-01T00:00:00Z",
        "UpdatedAt" => "2023-07-16T00:00:00Z",
        "Price" => 1.50,
        "Available" => true,
        "Category" => "gateaux",
        "Picture" => "haribo.webp"
    ],
    [
        "Name" => "Skittles Candy",
        "Description" => "200g bag of Skittles candies",
        "Stock" => 120,
        "ProductType" => "Confectionery",
        "CreatedAt" => "2023-07-16",
        "UpdatedAt" => "2023-07-16",
        "Price" => 1.70,
        "Available" => true,
        "Category" => "gateaux",
        "Picture" => "skittles.webp"
    ],
    [
        "Name" => "Choco Nuts Cake",
        "Description" => "500g chocolate and nuts cake",
        "Stock" => 100,
        "ProductType" => "Confectionery",
        "CreatedAt" => "2023-07-16",
        "UpdatedAt" => "2023-07-16",
        "Price" => 4.00,
        "Available" => true,
        "Category" => "gateaux",
        "Picture" => "nuts.webp"
    ],
    [
        "Name" => "Jelly Beans Candy",
        "Description" => "200g bag of Jelly Beans candies",
        "Stock" => 150,
        "ProductType" => "Confectionery",
        "CreatedAt" => "2023-07-16",
        "UpdatedAt" => "2023-07-16",
        "Price" => 2.00,
        "Available" => true,
        "Category" => "gateaux",
        "Picture" => "jelly.webp"
    ],
    [
        "Name" => "Red Velvet Cake",
        "Description" => "500g Red Velvet cake",
        "Stock" => 80,
        "ProductType" => "Confectionery",
        "CreatedAt" => "2023-07-16",
        "UpdatedAt" => "2023-07-16",
        "Price" => 6.00,
        "Available" => true,
        "Category" => "gateaux",
        "Picture" => "redvelvet.webp"
    ],
    [
        "Name" => "M&M's Candy",
        "Description" => "200g bag of M&M's candies",
        "Stock" => 130,
        "ProductType" => "Confectionery",
        "CreatedAt" => "2023-07-16",
        "UpdatedAt" => "2023-07-16",
        "Price" => 1.50,
        "Available" => true,
        "Category" => "gateaux",
        "Picture" => "mms.webp"
    ],
    [
        "Name" => "Tiramisu Cake",
        "Description" => "500g Tiramisu cake",
        "Stock" => 90,
        "ProductType" => "Confectionery",
        "CreatedAt" => "2023-07-16",
        "UpdatedAt" => "2023-07-16",
        "Price" => 5.50,
        "Available" => true,
        "Category" => "gateaux",
        "Picture" => "tiramisu.webp"
    ],
    [
        "Name" => "Starburst Candy",
        "Description" => "200g bag of Starburst candies",
        "Stock" => 140,
        "ProductType" => "Confectionery",
        "CreatedAt" => "2023-07-16",
        "UpdatedAt" => "2023-07-16",
        "Price" => 1.20,
        "Available" => true,
        "Category" => "gateaux",
        "Picture" => "starbursts.webp"
    ],
    [
        "Name" => "Cheesecake",
        "Description" => "500g Cheesecake",
        "Stock" => 95,
        "ProductType" => "Confectionery",
        "CreatedAt" => "2023-07-16",
        "UpdatedAt" => "2023-07-16",
        "Price" => 7.00,
        "Available" => true,
        "Category" => "gateaux",
        "Picture" => "cheesecake.webp"
    ],
    [
        "Name" => "Sour Patch Kids Candy",
        "Description" => "200g bag of Sour Patch Kids candies",
        "Stock" => 150,
        "ProductType" => "Confectionery",
        "CreatedAt" => "2023-07-16",
        "UpdatedAt" => "2023-07-16",
        "Price" => 1.80,
        "Available" => true,
        "Category" => "gateaux",
        "Picture" => "sour.webp"
    ],
    [
        "Name" => "Peterson Pipe",
        "Description" => "Wooden pipe from the Peterson brand",
        "Stock" => 50,
        "ProductType" => "Accessories",
        "CreatedAt" => "2023-07-16",
        "UpdatedAt" => "2023-07-16",
        "Price" => 70.00,
        "Available" => true,
        "Category" => "divers",
        "Picture" => "pipe.webp"
    ],
    [
        "Name" => "Glass Ashtray",
        "Description" => "High-quality glass ashtray",
        "Stock" => 100,
        "ProductType" => "Accessories",
        "CreatedAt" => "2023-07-16",
        "UpdatedAt" => "2023-07-16",
        "Price" => 15.00,
        "Available" => true,
        "Category" => "divers",
        "Picture" => "cendrier.webp"
    ],
    [
        "Name" => "Leather Cigarette Case",
        "Description" => "Genuine leather cigarette case",
        "Stock" => 75,
        "ProductType" => "Accessories",
        "CreatedAt" => "2023-07-16",
        "UpdatedAt" => "2023-07-16",
        "Price" => 25.00,
        "Available" => true,
        "Category" => "divers",
        "Picture" => "etui.webp"
    ],
    [
        "Name" => "Bic Lighter",
        "Description" => "Classic Bic lighter",
        "Stock" => 200,
        "ProductType" => "Accessories",
        "CreatedAt" => "2023-07-16",
        "UpdatedAt" => "2023-07-16",
        "Price" => 1.50,
        "Available" => true,
        "Category" => "divers",
        "Picture" => "bic.webp"
    ],
    [
        "Name" => "Dragon Zippo Lighter",
        "Description" => "Zippo lighter engraved with a dragon",
        "Stock" => 60,
        "ProductType" => "Accessories",
        "CreatedAt" => "2023-07-16",
        "UpdatedAt" => "2023-07-16",
        "Price" => 40.00,
        "Available" => true,
        "Category" => "divers",
        "Picture" => "zippo.webp"
    ],
    [
        "Name" => "Matchbox",
        "Description" => "Standard-size matchbox",
        "Stock" => 300,
        "ProductType" => "Accessories",
        "CreatedAt" => "2023-07-16",
        "UpdatedAt" => "2023-07-16",
        "Price" => 0.50,
        "Available" => true,
        "Category" => "divers",
        "Picture" => "allumettes.webp"
    ],
    [
        "Name" => "Metal Grinder",
        "Description" => "Metal grinder for tobacco",
        "Stock" => 70,
        "ProductType" => "Accessories",
        "CreatedAt" => "2023-07-16",
        "UpdatedAt" => "2023-07-16",
        "Price" => 15.00,
        "Available" => true,
        "Category" => "divers",
        "Picture" => "grinder.webp"
    ],
    [
        "Name" => "Tobacco Pouch",
        "Description" => "Genuine leather tobacco pouch",
        "Stock" => 85,
        "ProductType" => "Accessories",
        "CreatedAt" => "2023-07-16",
        "UpdatedAt" => "2023-07-16",
        "Price" => 20.00,
        "Available" => true,
        "Category" => "divers",
        "Picture" => "tabac.webp"
    ],
    [
        "Name" => "Skull Zippo Lighter",
        "Description" => "Zippo lighter engraved with a skull",
        "Stock" => 65,
        "ProductType" => "Accessories",
        "CreatedAt" => "2023-07-16",
        "UpdatedAt" => "2023-07-16",
        "Price" => 45.00,
        "Available" => true,
        "Category" => "divers",
        "Picture" => "skull.webp"
    ],

    [
        "Name" => "Pepsi 500ml",
        "Description" => "500ml bottle of Pepsi",
        "Stock" => 150,
        "ProductType" => "Sodas",
        "CreatedAt" => "2023-07-16",
        "UpdatedAt" => "2023-07-16",
        "Price" => 1.00,
        "Available" => true,
        "Category" => "boissons",
        "Picture" => "pepsi.webp"
    ],
    [
        "Name" => "Sprite 500ml",
        "Description" => "500ml bottle of Sprite",
        "Stock" => 175,
        "ProductType" => "Sodas",
        "CreatedAt" => "2023-07-16",
        "UpdatedAt" => "2023-07-16",
        "Price" => 1.00,
        "Available" => true,
        "Category" => "boissons",
        "Picture" => "sprite.webp"
    ],
    [
        "Name" => "Fanta Orange 500ml",
        "Description" => "500ml bottle of Fanta Orange",
        "Stock" => 160,
        "ProductType" => "Sodas",
        "CreatedAt" => "2023-07-16",
        "UpdatedAt" => "2023-07-16",
        "Price" => 1.00,
        "Available" => true,
        "Category" => "boissons",
        "Picture" => "fanta.webp"
    ],
    [
        "Name" => "Dr Pepper 500ml",
        "Description" => "500ml bottle of Dr Pepper",
        "Stock" => 140,
        "ProductType" => "Sodas",
        "CreatedAt" => "2023-07-16",
        "UpdatedAt" => "2023-07-16",
        "Price" => 1.20,
        "Available" => true,
        "Category" => "boissons",
        "Picture" => "drpepper.webp"
    ],
    [
        "Name" => "Evian 500ml",
        "Description" => "500ml bottle of Evian mineral water",
        "Stock" => 250,
        "ProductType" => "Water",
        "CreatedAt" => "2023-07-16",
        "UpdatedAt" => "2023-07-16",
        "Price" => 0.80,
        "Available" => true,
        "Category" => "boissons",
        "Picture" => "evian.webp"
    ],
    [
        "Name" => "Volvic 500ml",
        "Description" => "500ml bottle of Volvic mineral water",
        "Stock" => 220,
        "ProductType" => "Water",
        "CreatedAt" => "2023-07-16",
        "UpdatedAt" => "2023-07-16",
        "Price" => 0.80,
        "Available" => true,
        "Category" => "boissons",
        "Picture" => "volvic.webp"
    ],
    [
        "Name" => "Perrier 330ml",
        "Description" => "330ml bottle of Perrier sparkling water",
        "Stock" => 200,
        "ProductType" => "Water",
        "CreatedAt" => "2023-07-16",
        "UpdatedAt" => "2023-07-16",
        "Price" => 0.90,
        "Available" => true,
        "Category" => "boissons",
        "Picture" => "perrier.webp"
    ],
    [
        "Name" => "Red Bull 250ml",
        "Description" => "250ml can of Red Bull",
        "Stock" => 100,
        "ProductType" => "Energy Drinks",
        "CreatedAt" => "2023-07-16",
        "UpdatedAt" => "2023-07-16",
        "Price" => 2.50,
        "Available" => true,
        "Category" => "boissons",
        "Picture" => "redbull.webp"
    ],
    [
        "Name" => "Monster Energy 500ml",
        "Description" => "500ml can of Monster Energy",
        "Stock" => 120,
        "ProductType" => "Energy Drinks",
        "CreatedAt" => "2023-07-16",
        "UpdatedAt" => "2023-07-16",
        "Price" => 2.70,
        "Available" => true,
        "Category" => "boissons",
        "Picture" => "monster.webp"
    ]
];
        foreach ($products as $productData) {
            $product = new Product();
            $product->setName($productData["Name"])
                ->setDescription($productData["Description"])
                ->setStock($productData["Stock"])
                ->setProductType($productData["ProductType"])
                ->setPicture($productData["Picture"])
                ->setCreatedAt(new \DateTime($productData["CreatedAt"]))
                ->setUpdatedAt(new \DateTime($productData["UpdatedAt"]))
                ->setPrice($productData["Price"])
                ->setAvailable($productData["Available"])
                ->setCategory($this->getReference('category_' . $productData['Category']));

            $manager->persist($product);
        }

        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            CategoryFixtures::class,
        ];
    }
}