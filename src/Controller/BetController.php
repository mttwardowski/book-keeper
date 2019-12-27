<?php


namespace App\Controller;


use App\Entity\GameBet;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class BetController extends AbstractController
{


    public function makeBetAction(Request $request) {

        if ($request->isXmlHttpRequest()) {

            $params = $request->request->all();

            $user = $this->getUser();

            $newBet = new GameBet();
            $newBet->createNew($user, $params);


            //Get DB Manager
            $dbManager = $this->getDoctrine()->getManager();
            $dbManager->persist($newBet);
            $dbManager->flush();
            $dbManager->clear();

            return new JsonResponse(array(
                'success'   => true,
                'message'   => "Bet Made."
            ));
        }

    }

}