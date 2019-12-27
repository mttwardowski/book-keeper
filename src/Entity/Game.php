<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\GameRepository")
 */
class Game
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
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $teams;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\GameThread", mappedBy="game")
     */
    private $gameThreads;

    public function __construct()
    {
        $this->gameThreads = new ArrayCollection();
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

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getTeams(): ?string
    {
        return $this->teams;
    }

    public function setTeams(string $teams): self
    {
        $this->teams = $teams;

        return $this;
    }

    /**
     * @return Collection|GameThread[]
     */
    public function getGameThreads(): Collection
    {
        return $this->gameThreads;
    }

    public function addGameThread(GameThread $gameThread): self
    {
        if (!$this->gameThreads->contains($gameThread)) {
            $this->gameThreads[] = $gameThread;
            $gameThread->setGame($this);
        }

        return $this;
    }

    public function removeGameThread(GameThread $gameThread): self
    {
        if ($this->gameThreads->contains($gameThread)) {
            $this->gameThreads->removeElement($gameThread);
            // set the owning side to null (unless already changed)
            if ($gameThread->getGame() === $this) {
                $gameThread->setGame(null);
            }
        }

        return $this;
    }
}
