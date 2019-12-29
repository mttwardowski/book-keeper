<?php


namespace App\Controller;


use Monolog\Logger;
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