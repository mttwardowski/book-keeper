<?php


namespace App\Controller;


use App\Entity\Game;
use Monolog\Logger;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;

class DataController extends AbstractController
{

    public function updateGames(LoggerInterface $logger, Request $request) {
        if ($request->isXmlHttpRequest()) {

            $user = $this->getUser();
            $params = $request->request->all();
            $games  = $params['games'];
            $logger->info(json_encode($params));

            // Get Doctrine Manager
            $dbManager = $this->getDoctrine()->getManager();

            // Get Sport
            $sport = $this->getDoctrine()->getRepository('App:Sport')->find(1);

            $gameCount = 0;
            foreach($games as $game) {
                $logger->info(json_encode($game));
                $gameCount++;
                $data = array(
                    'title' => "Test ".$gameCount,
                    'teams' => "[" . $game['teams'][0]['name'] . "," . $game['teams'][1]['name'] ."]",
                    'eventID' => $game['event_id'],
                    'gameData' => json_encode($game['line_periods'][1]['period_full_game'])
                );


                // Create Game
                $game = new Game();
                $game->setSport($sport);
                $game->createNew($data);

                $dbManager->persist($game);
                $dbManager->flush();

            }

            $dbManager->clear();

            return new JsonResponse(array(
                'success' => true,
                'games_updated' => $gameCount
            ));
        }
    }

    public function getSportsListAction(Request $request) {


        $dataArray = array(
            'success'   => false,
            'Message'   => "General Error"
        );

        try {
            $client = HttpClient::create(['http_version' => '2.0']);
            $response = $client->request('GET', 'https://therundown-therundown-v1.p.rapidapi.com/sports', [
                'headers' => [
                    'x-rapidapi-host' => 'therundown-therundown-v1.p.rapidapi.com',
                    'x-rapidapi-key' => '231f91c2f7msh01febf018c19e3ap11db12jsn84cad05a5b26',
                ]
            ]);
            $data = $response->getContent();

            $dataArray = array(
                'success'   => true,
                'Message'   => "Success",
                'data'      => $data
            );


        } catch (ClientExceptionInterface $e) {
            $dataArray = array(
                'success'   => false,
                'Message'   => "ClientExceptionInterface Error",
                'data'      => $e->getMessage(),
            );
        } catch (RedirectionExceptionInterface $e) {
            $dataArray = array(
                'success'   => false,
                'Message'   => "RedirectionExceptionInterface Error",
                'data'      => $e->getMessage(),
            );
        } catch (ServerExceptionInterface $e) {
            $dataArray = array(
                'success'   => false,
                'Message'   => "ServerExceptionInterface Error",
                'data'      => $e->getMessage(),
            );
        } catch (TransportExceptionInterface $e) {
            $dataArray = array(
                'success'   => false,
                'Message'   => "TransportExceptionInterface Error",
                'data'      => $e->getMessage(),
            );
        }

//        $logger->info("HELLO THIS IS A TEST MESSAGE!");


        return new JsonResponse($dataArray);


    }

}