import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const DetailsCard = ( { CardTitle , cardDescription , test} ) => {
  return (
    <div>
      <Card className="">
        <Card.Img
          variant="top"
          src="https://www.pixelstalk.net/wp-content/uploads/2016/06/Desktop-Wallpaper-HD-Free-Download.jpg"
        />
        <Card.Body>
          <Card.Title>  {CardTitle}   </Card.Title>
          <Card.Text>
             {cardDescription}  
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>

          <h3>{test}</h3>
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default DetailsCard;
