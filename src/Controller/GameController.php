<?php


namespace App\Controller;


use App\Entity\GameThread;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class GameController extends AbstractController
{

    public function findGames(Request $request) {

        $sports = $this->getDoctrine()->getRepository('App:Sport')->getAllActiveSports();

        $sport = $this->getDoctrine()->getRepository('App:Sport')->find(1);
        $games = $this->getDoctrine()->getRepository('App:Game')->getUpcomingGamesBySport($sport);

        return $this->render('pages/bet/find_games.html.twig', array(
            'sports'    => $sports,
            'games'     => $games
        ));
    }

    public function gamePage(Request $request) {

        $gameID = $request->query->get('gameID');
        $eventID = $request->query->get('eventID');

        $game = $this->getDoctrine()->getRepository('App:Game')->findByEventID($eventID);

        $gameBets = $this->getDoctrine()->getRepository('App:GameBet')->getAllGameBets($game);
        $gameThreads = $this->getDoctrine()->getRepository('App:GameThread')->getThreadsByGame($game);

        return $this->render('pages/game_page.html.twig', array(
            'game'      => $game,
            'bets'      => $gameBets,
            'threads'   => $gameThreads,
        ));
    }

    public function newGameThreadAction(Request $request) {
        if ($request->isXmlHttpRequest()) {


            $params = $request->request->all();
            $user = $this->getUser();
            $response = array(
                'success' => false,
                'message' => 'Error Occurred Making New Thread.'
            );

            //If Game Exists
            if ($game = $this->getDoctrine()->getRepository('App:Game')->findByEventID(intval($params['gameID']))) {

                // Create New Game Thread
                $gameThread = new GameThread();
                $gameThread->createNew($game, $user, $params);

                //Persist
                $dbManager = $this->getDoctrine()->getManager();
                $dbManager->persist($gameThread);
                $dbManager->flush();
                $dbManager->clear();

                // Update Response JSON
                $response = array(
                    'success'   => true,
                    'message'   => "Game Thread Created"
                );
            }

            return new JsonResponse($response);
        }
    }

    public function getGamesBySportsHTML(Request $request) {
        if ($request->isXmlHttpRequest()) {

            $user = $this->getUser();
            $params = $request->request->all();

            $sport = $this->getDoctrine()->getRepository('App:Sport')->find(intval($params['sportID']));
            $games = $this->getDoctrine()->getRepository('App:Game')->getUpcomingGamesBySport($sport);

            $html = $this->renderView('components/game_card.html.twig', array(
                'games' => $games,
            ));

            return new JsonResponse(array(
                'success'   => true,
                'html'      => $html
            ));
        }
    }

}