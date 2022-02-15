import React, { useEffect, useState } from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import { recipesService } from "../../services/recipesService";
import RecipeCard from "../blocks/RecipeCard";
import Skeleton from "react-loading-skeleton";
import { phoneScreen } from "../../utils/misc";

function Home() {
    const [key, setKey] = useState("");
    const [isLoader, setIsLoader] = useState(true);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
    }, []);

    // handle Field Change start
    const onFieldChange = ({ target: { value } }) => setKey(value);

    // get Recipes from Api start
    const getRecipes = async () => {
        setIsLoader(true);

        const { success, data } = await recipesService.getRecipes(key);
        if (!success) return;
        setRecipes(data);
        setIsLoader(false);
    };
    // get Recipes from Api end

    return (
        <div className="home">
            <Container>
                {/* search input start  */}
                <InputGroup className="home__search">
                    <FormControl placeholder="Search..." onChange={onFieldChange} />
                    <InputGroup.Text onClick={() => getRecipes()}>
                        <img src="/images/searchIcon.svg" alt="search" />
                    </InputGroup.Text>
                </InputGroup>
                {/* search input end  */}

                {isLoader ? (
                    //  skeleton loader start
                    <Row>
                        {[...Array(8)].map((_, index) => {
                            return (
                                <Col md={3} key={index}>
                                    <Skeleton height={250} className="mb-3" />
                                </Col>
                            );
                        })}
                    </Row>
                ) : (
                    //   skeleton loader end
                    //  Recipes cards start
                    <Row>
                        {recipes.length < 1 ? (
                            <div className="home__no-result">No Result To Show</div>
                        ) : (
                            recipes.map((item) => {
                                return (
                                    <Col xs={phoneScreen ? 12 : 6} sm={6} md={4} lg={3} key={item.id}>
                                        <RecipeCard data={item} />
                                    </Col>
                                );
                            })
                        )}
                    </Row>
                    //  Recipes cards end
                )}
            </Container>
        </div>
    );
}

export default Home;
