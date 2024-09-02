import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col, Container } from "react-bootstrap";
import {BsHeart } from "react-icons/bs";
import './card.css';

class Cards extends Component {
  outsetStyle = {
    width: "17rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", 
    borderRadius: "10px", 
    transition: "box-shadow 0.4s ease-in-out", 
  };

  constructor(props) {
    super(props);
    this.state = {
      // cartItems: [],
      wishlistItems: [],
      toys: [
        {
          id: 1,
          image: "./toy1.webp",
          price: "$1000",
          name: "Trucks Car",
          details: "Trucks Car Kids Toys Toddler Vehicle Cool Toy",
          buttonlabel: "Add to cart",
          rating: "⭐⭐⭐⭐",
        },
        {
          id: 2,
          image: "./toy2.webp",
          price: "$500",
          name: "Toysery Workbench toddler tool set ",
          details: "Toy Set Learning toolbox for kids with Sound Effects ",
          buttonlabel: "Add to cart",
          rating: "⭐⭐⭐⭐⭐",
        },
        {
          id: 3,
          image: "./toy3.0.jpg",
          price: "$150",
          name: "Wire Maze Roller Coaster",
          details:
            "Wonderful and beautiful Educational Toys For Baby Kids Roller Coaster Educational Toys",
          buttonlabel: "Add to cart",
          rating: "⭐⭐⭐⭐",
        },
        {
          id: 4,
          image: "./toy4.webp",
          price: "$2000",
          name: "23PCS Kids Kitchen Toy Set",
          details: "Mini Pretend Play Toy Cooking Toy for Children",
          buttonlabel: "Add to cart",
          rating: "⭐⭐⭐⭐⭐",
        },
        {
          id: 5,
          image: "./toy5.jpg",
          price: "$1000",
          name: "Musical Dancing Penguin Toy",
          details: "Musical Dancing Penguin Toy for Boys & Girls Kids ",
          buttonlabel: "Add to cart",
          rating: "⭐⭐⭐⭐⭐",
        },
        {
          id: 6,
          image: "./toy6.jpg",
          price: "$500",
          name: "Trucks car toy for boys & and girls",
          details:
            "Wonderful and colorful Trucks car toy for boys and girls 1 to 3year old kids",
          buttonlabel: "Add to cart",
          rating: "⭐⭐⭐",
        },
        {
          id: 7,
          image: "./toy7.jpg",
          price: "$150",
          name: "christmas toy for toddlers",
          details:
            "wonderful and colorful christmas toy for toddlers for boys and girls 3 to 4 year old kids",
          buttonlabel: "Add to cart",
          rating: "⭐⭐⭐",
        },
        {
          id: 8,
          image: "./toy8.0.jpg",
          price: "$2000",
          name: "Supermarket Cash Register Children's Toys",
          details:
            "Educational Simulation Checkout Cashier Boys And Girls Play House",
          buttonlabel: "Add to cart",
          rating: "⭐⭐⭐⭐⭐",
        },
      ],
      toys1: [
        {
          id: 9,
          image: "./toy9.jpg",
          price: "$1000",
          name: "Educational Game Board for Kids",
          details:
            "Chocozone Wooden Learning Educational Game Board for Kids 1 to 2 years old, ",
          buttonlabel: "Add to cart",
          rating: "⭐⭐",
        },
        {
          id: 10,
          image: "./toy10.jpg",
          price: "$500",
          name: "SUPER TOY 112 Talking Baby Flash Cards",
          details:
            "Cards Educational Toys for 2 to 4 Years Old, Learning Resource ",
          buttonlabel: "Add to cart",
          rating: "⭐⭐⭐⭐⭐",
        },
        {
          id: 11,
          image: "./toy11.jpg",
          price: "$150",
          name: "Wembley Magnetic Tiles for Kids Toys",
          details: "Magnetic Blocks for Kids Toys for 2-5 Years",
          buttonlabel: "Add to cart",
          rating: "⭐⭐⭐⭐⭐",
        },
        {
          id: 12,
          image: "./toy12.jpg",
          price: "$2000",
          name: "Storio 3 Slide Projector Flashlight Torch with 24 Patterns",
          details:
            " Fruits Slides - Educational Toy for Kids, Enhances Learning...",
          buttonlabel: "Add to cart",
          rating: "⭐⭐⭐⭐",
        },
        {
          id: 13,
          image: "./toy13.jpg",
          price: "$1000",
          name: " Magnetic Slate Toy ",
          details:
            "Magnetic Slate Toy is Very Useful, Helps Children in Learning How to Write",
          buttonlabel: "Add to cart",
          rating: "⭐⭐⭐⭐",
        },
        {
          id: 14,
          image: "./toy14.jpg",
          price: "$500",
          name: "HIRNAYA Car Race Tracks",
          details:
            "HIRNAYA Car Race Tracks for Boys Car Adventure Toys for 3+ Year Old Boys&Girls",
          buttonlabel: "Add to cart",
          rating: "⭐⭐⭐",
        },
        {
          id: 15,
          image: "./toy15.jpg",
          price: "$150",
          name: " Pop It Fidget Sensory Toys",
          details:
            "Stress Relief Silicone Pressure Relieving, Squeeze Novelty Gifts for Kids Children Adults",
          buttonlabel: "Add to cart",
          rating: "⭐⭐⭐⭐⭐",
        },
        {
          id: 16,
          image: "./toy16.jpg",
          price: "$2000",
          name: "sunny ride on & car",
          details: "luvlap sunny ride on & car for kids with music",
          buttonlabel: "Add to cart",
          rating: "⭐⭐⭐⭐⭐",
        },
      ],
    };
  }
  AddToCartHandler = (id) => {
    this.setState((prevstate) => ({
      toys: prevstate.toys.map((toy) =>
        toy.id === id ? { ...toy, buttonlabel: "Added to cart" } : toy
      ),
    }));
  };
  handleAddToCart = (id) => {
    this.setState((prevstate) => ({
      toys1: prevstate.toys1.map((toy) =>
        toy.id === id ? { ...toy, buttonlabel: "Added to cart" } : toy
      ),
    }));
  };

  render() {
    return (
      <div>
        <Container>
          <Row className="my-3 ">
            {this.state.toys.map((toy) => (
              <Col sm={6} md={3} key={toy.id} className="mb-3">
                <Card className="card-hover" style={this.outsetStyle}>
                  <Card.Img variant="top" src={toy.image} />
                  <Card.Body>
                    <Card.Title className="text-center">{toy.name}</Card.Title>
                    <Card.Text>
                      {toy.details}
                      <br />
                      Rating: {toy.rating} <br />
                      Price: {toy.price}
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                      <Button
                        variant="outline-primary"
                        onClick={() => this.AddToCartHandler(toy.id)}
                      >
                        {toy.buttonlabel}
                      </Button>
                      <Button variant="outline-primary">
                        <BsHeart />
                      </Button>
                      {/* <Button variant="outline-danger">Wishlist</Button> */}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        <Container>
          <Row className="my-3 ">
            {this.state.toys1.map((toy) => (
              <Col sm={6} md={3} key={toy.id} className="mb-3">
                <Card className="card-hover" style={this.outsetStyle}>
                  <Card.Img variant="top" src={toy.image} />
                  <Card.Body>
                    <Card.Title className="text-center">{toy.name}</Card.Title>
                    <Card.Text>
                      {toy.details}
                      <br />
                      Rating: {toy.rating} <br />
                      Price: {toy.price}
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                      <Button
                        variant="outline-primary"
                        onClick={() => this.handleAddToCart(toy.id)}
                      >
                        {toy.buttonlabel}
                      </Button>
                      <Button variant="outline-primary">
                        <BsHeart />
                      </Button>
                      {/* <Button variant="outline-danger">Wishlist</Button> */}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Cards;
