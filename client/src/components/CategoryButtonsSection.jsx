import React from "react";
import CategoryButton from "./CategoryButton";
import "./CategoryButtonsSection.css"; 

function CategoryButtonsSection({ onCategoryClick }) {
    return (
        <div className="category-buttons-container">
            <CategoryButton
                label="Jouets"
                onClick={() => onCategoryClick("Jouets")}
            />
            <CategoryButton
                label="Vêtements bébé"
                onClick={() => onCategoryClick("Vêtements bébé")}
            />
            <CategoryButton
                label="Matériel bébé"
                onClick={() => onCategoryClick("Matériel bébé")}
            />
            <CategoryButton
                label="Grossesse & allaitement"
                onClick={() => onCategoryClick("Grossesse & allaitement")}
            />
            {/* Ajoutez d'autres boutons ici */}
        </div>
    );
}

export default CategoryButtonsSection;
