<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\ProductRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Tests\Fixtures\Metadata\Get;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;


#[ORM\Entity(repositoryClass: ProductRepository::class)]

#[ApiResource(
    operations: [
        new GetCollection(
            normalizationContext: ['groups' => ['product_read']]
        ),
        new Get(
            normalizationContext: ['groups' => ['product_read']]
        )
    ],
    paginationEnabled: false

)]
class Product
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: "integer")]
    #[Groups(['product_read'])]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    #[Groups(['product_read'])]
    private ?string $Name = null;

    #[ORM\Column(length: 255)]
    #[Groups(['product_read'])]
    private ?string $Description = null;

    #[ORM\Column(type: "integer")]
    #[Groups(['product_read'])]
    private ?int $Stock = null;

    #[ORM\Column(length: 50)]
    #[Groups(['product_read'])]
    private ?string $ProductType = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    #[Groups(['product_read'])]
    private ?\DateTimeInterface $CreatedAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    #[Groups(['product_read'])]
    private ?\DateTimeInterface $UpdatedAt = null;

    #[ORM\Column(type: "float")]
    #[Groups(['product_read'])]
    private ?float $Price = null;

    #[ORM\Column(type: "boolean")]
    #[Groups(['product_read'])]
    private ?bool $Available = null;

    #[ORM\ManyToOne(targetEntity: Categories::class)]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['product_read'])]
    #[MaxDepth(1)]
    private ?Categories $category = null;

    #[ORM\ManyToMany(targetEntity: Order::class, mappedBy: 'product')]
    private Collection $orders;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['product_read'])]
    private ?string $picture = null;

    public function getPictureUrl(): ?string
{
    return $this->picture ? '/public/uploads/images/' . $this->picture : null;
}

    public function __construct()
    {
        $this->orders = new ArrayCollection();
    }

    public function __toString(): string
    {
        return $this->Name ?? '';
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->Name;
    }

    public function setName(string $Name): self
    {
        $this->Name = $Name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->Description;
    }

    public function setDescription(string $Description): self
    {
        $this->Description = $Description;

        return $this;
    }

    public function getStock(): ?int
    {
        return $this->Stock;
    }

    public function setStock(int $Stock): self
    {
        $this->Stock = $Stock;

        return $this;
    }

    public function getProductType(): ?string
    {
        return $this->ProductType;
    }

    public function setProductType(string $ProductType): self
    {
        $this->ProductType = $ProductType;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->CreatedAt;
    }

    public function setCreatedAt(\DateTimeInterface $CreatedAt): self
    {
        $this->CreatedAt = $CreatedAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->UpdatedAt;
    }

    public function setUpdatedAt(\DateTimeInterface $UpdatedAt): self
    {
        $this->UpdatedAt = $UpdatedAt;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->Price;
    }

    public function setPrice(float $Price): self
    {
        $this->Price = $Price;

        return $this;
    }

    public function isAvailable(): ?bool
    {
        return $this->Available;
    }

    public function setAvailable(bool $Available): self
    {
        $this->Available = $Available;

        return $this;
    }

    public function getCategory(): ?Categories
    {
        return $this->category;
    }

    public function setCategory(?Categories $category): self
    {
        $this->category = $category;

        return $this;
    }

    /**
     * @return Collection<int, Order>
     */
    public function getOrders(): Collection
    {
        return $this->orders;
    }

    public function addOrder(Order $order): self
    {
        if (!$this->orders->contains($order)) {
            $this->orders->add($order);
            $order->addProduct($this);
        }

        return $this;
    }

    public function removeOrder(Order $order): self
    {
        if ($this->orders->removeElement($order)) {
            $order->removeProduct($this);
        }

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(?string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }
}