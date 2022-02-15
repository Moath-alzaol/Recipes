import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { recipesService } from "../../services/recipesService";
import Breadcrumb from "../blocks/Breadcrumb";

function RecipeDetails() {
    const [recipeDetails, setRecipeDetails] = useState({});
    const [isLoader, setIsLoader] = useState(true);

    const params = useParams();

    useEffect(() => {
        getRecipeDetails();
    }, []);

    // get Recipe Details start
    const getRecipeDetails = async () => {
        const { success, data } = await recipesService.getRecipeDetails(params.id);

        if (!success) return;

        setRecipeDetails(data);
        setIsLoader(false);
    };

    return (
        <div className="recipe-details">
            <Container>
                {/* bread Crumb start */}
                <Breadcrumb />
                {/* bread crumb end */}

                <Row className="mb-5">
                    {/* Recipe image start  */}
                    <Col xl={6}>
                        {isLoader ? (
                            <Skeleton height={300} className="mb-3" />
                        ) : (
                            <img src={recipeDetails?.image} alt="recipe" className="recipe-details__main-image mb-3" />
                        )}
                    </Col>
                    {/* Recipe image end  */}

                    {/* Recipe summary start  */}
                    <Col xl={6}>
                        {isLoader ? (
                            <Skeleton height={300} className="mb-3" />
                        ) : (
                            <>
                                <h2>{recipeDetails?.title}</h2>
                                <p dangerouslySetInnerHTML={{ __html: recipeDetails?.summary }} />
                            </>
                        )}
                    </Col>
                    {/* Recipe summary end  */}
                </Row>
                {/* instructions start */}
                {isLoader ? (
                    <Skeleton height={300} className="mb-3" />
                ) : (
                    recipeDetails?.instructions && (
                        <div className="recipe-details__instructions">
                            <h3>instructions</h3>
                            <p dangerouslySetInnerHTML={{ __html: recipeDetails?.instructions }} />
                        </div>
                    )
                )}
                {/* instructions end */}

                {/* Ingredients start */}

                {isLoader ? (
                    <Skeleton height={300} className="mb-3" />
                ) : (
                    recipeDetails?.extendedIngredients && (
                        <div className="recipe-details__Ingredients">
                            <h3>Ingredients</h3>
                            <ul>
                                {recipeDetails?.extendedIngredients?.map(({ original }) => {
                                    return <li>{original}</li>;
                                })}
                            </ul>
                        </div>
                    )
                )}

                {/* Ingredients end */}
            </Container>
        </div>
    );
}

export default RecipeDetails;
