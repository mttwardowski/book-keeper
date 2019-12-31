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
     * @ORM\Column(type="string", length=2056)
     */
    private $teams;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255)
     */
    private $eventID;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=2056)
     */
    private $gameData;

    /* --- ManyToOne SQL Relationships --- */

    /**
     * @var Sport
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Sport")
     */
    private $sport;

    /* --- OneToMany SQL Relationships --- */

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\GameThread", mappedBy="game")
     */
    private $gameThreads;

    public function __construct()
    {
        $this->dateCreated = new \DateTime();
        $this->gameThreads = new ArrayCollection();
    }

    public function createNew($params = array()) {
        $this->title = isset($params['title']) ? $params['title'] : "No Title";
        $this->teams = isset($params['teams']) ? json_encode($params['teams']) : "[]";
        $this->eventID  = isset($params['eventID']) ? $params['eventID'] : "0";
        $this->gameData = isset($params['gameData']) ? json_encode($params['gameData']) : "[]";
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

    /**
     * @return string
     */
    public function getEventID(): string
    {
        return $this->eventID;
    }

    /**
     * @param string $eventID
     */
    public function setEventID(string $eventID): void
    {
        $this->eventID = $eventID;
    }

    /**
     * @return string
     */
    public function getGameData(): string
    {
        return $this->gameData;
    }

    /**
     * @param string $gameData
     */
    public function setGameData(string $gameData): void
    {
        $this->gameData = $gameData;
    }

    /**
     * @return Sport
     */
    public function getSport(): Sport
    {
        return $this->sport;
    }

    /**
     * @param Sport $sport
     */
    public function setSport(Sport $sport): void
    {
        $this->sport = $sport;
    }
}
