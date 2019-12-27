<?php


namespace App\Controller;


use App\Entity\GameThread;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class GameController extends AbstractController
{


    public function newGameThreadAction(Request $request) {
        if ($request->isXmlHttpRequest()) {


            $params = $request->request->all();
            $user = $this->getUser();
            $response = array(
                'success' => false,
                'message' => 'Error Occurred Making New Thread.'
            );

            //If Game Exists
            if ($game = $this->getDoctrine()->getRepository('App:Game')->find(intval($params['gameID']))) {

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

}