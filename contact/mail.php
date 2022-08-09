<?php


            $to = "abhinav.k@xcitech.in";
            
            $subject = "Got Request From Website";
            $input = $_POST;
         
            
            $message = "<b>Hello, Admin.</b><br> Got Request from website for you... ";
            $message .= "<h1>This are the Details.</h1>";
            
            ptint_r($input);
            
            foreach($input as $key => $value){
                $message .= "<br><strong>{$key}:</strong>  {$value}";
            }
            
            
            
            $message .= "<br><br><strong>Thank You</strong>";
            $header = "From:admin@aldebaranmedia.com \r\n";
            $header .= "MIME-Version: 1.0\r\n";
            $header .= "Content-type: text/html\r\n";
            
            $retval = mail($to,$subject,$message,$header);
     
            
            if( $retval == true ) {
                echo json_encode(['success'=>true, "message"=>"Message sent successfully..."]);
            }else {
                 echo json_encode(['success'=>false, "message"=>"Message could not be sent..."]);
            }
            exit();


?>