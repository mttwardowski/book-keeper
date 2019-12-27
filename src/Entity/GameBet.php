<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\GameBetRepository")
 */
class GameBet
{

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime")
     */
    private $dateCreated;

    /**
     * @ORM\Column(type="float")
     */
    private $amount;

    /**
     * @ORM\Column(type="integer")
     */
    private $pick;

    /**
     * @var string
     *
     * @ORM\Column(type="string", nullable=true)
     */
    private $pickValue;

    /* --- ManyToOne SQL Relationships --- */

    /**
     * @var User
     *
     * @ORM\ManyToOne(targetEntity="User")
     */
    private $user;

    public function __construct() {
        $this->dateCreated = new \DateTime();
    }

    public function createNew(User $user, $params = array()) {
        $this->user         = $user;
        $this->amount       = isset($params['amount']) ? $params['amount'] : 0.00;
        $this->pick         =  isset($params['pick']) ? $params['pick'] : 1;
        $this->pickValue    =  isset($params['pickValue']) ? $params['pickValue'] : "No Team";
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateCreated(): ?\DateTimeInterface
    {
        return $this->dateCreated;
    }

    public function setDateCreated(\DateTimeInterface $dateCreated): self
    {
        $this->dateCreated = $dateCreated;

        return $this;
    }

    public function getAmount(): ?float
    {
        return $this->amount;
    }

    public function setAmount(float $amount): self
    {
        $this->amount = $amount;

        return $this;
    }

    public function getPick(): ?int
    {
        return $this->pick;
    }

    public function setPick(int $pick): self
    {
        $this->pick = $pick;

        return $this;
    }

    /**
     * @return User
     */
    public function getUser(): User
    {
        return $this->user;
    }

    /**
     * @param User $user
     */
    public function setUser(User $user): void
    {
        $this->user = $user;
    }

    /**
     * @return string
     */
    public function getPickValue(): string
    {
        return $this->pickValue;
    }

    /**
     * @param string $pickValue
     */
    public function setPickValue(string $pickValue): void
    {
        $this->pickValue = $pickValue;
    }
}
