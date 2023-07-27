<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\OrderRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\Post;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: OrderRepository::class)]
#[ORM\HasLifecycleCallbacks]
#[ORM\Table(name: '`order`')]
#[ApiResource(
operations:[
    new Post(
        denormalizationContext: [ 'groups' => ['order_write']]
    )
]

)]
class Order
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['order_write'])]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]   
    #[Groups(['order_write'])]

    private ?int $price = null;

   

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    #[Groups(['order_write'])]

    private ?\DateTimeInterface $created_at = null;

    #[ORM\ManyToMany(targetEntity: Product::class, inversedBy: 'orders')]
    #[Groups(['order_write'])]

    private Collection $product;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: true)] 
    #[Groups(['order_write'])]
    // Set nullable to true for "promotion"
    private ?Promotion $promotion = null;

    #[ORM\ManyToOne(targetEntity:Users::class,cascade:['persist'])]
    #[ORM\JoinColumn(nullable: true)]
    #[Groups(['order_write'])]
    private ?Users $user = null;

    #[ORM\Column(nullable: true)]
    private ?bool $usedCode = null;

    #[ORM\PrePersist]
    public function setCreatedAtValue(): void
    {
        $this->created_at = new \DateTimeImmutable();
    }
    public function __toString(): string
    {
        return $this->created_at ?? '';
    }

    public function __construct()
    {
        $this->product = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(int $price): static
    {
        $this->price = $price;

        return $this;
    }


    
    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeInterface $created_at): static
    {
        $this->created_at = $created_at;

        return $this;
    }

    /**
     * @return Collection<int, Product>
     */
    public function getProduct(): Collection
    {
        return $this->product;
    }

    public function addProduct(Product $product): static
    {
        if (!$this->product->contains($product)) {
            $this->product->add($product);
        }

        return $this;
    }

    public function removeProduct(Product $product): static
    {
        $this->product->removeElement($product);

        return $this;
    }

    public function getPromotion(): ?Promotion
    {
        return $this->promotion;
    }

    public function setPromotion(?Promotion $promotion): static
    {
        $this->promotion = $promotion;

        return $this;
    }

    public function getUser(): ?Users
    {
        return $this->user;
    }

    public function setUser(?Users $user): static
    {
        $this->user = $user;

        return $this;
    }

    public function isUsedCode(): ?bool
    {
        return $this->usedCode;
    }

    public function setUsedCode(bool $usedCode): static
    {
        $this->usedCode = $usedCode;

        return $this;
    }
}
