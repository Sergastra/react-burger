const BurgerConstructor = ({ ingredients }) => {
    return (
        <div>
            
            {ingredients.map((item) => {
                return (
                    <div key={item._id}>
                        <p>{item.price}</p>
                        <p>{item.name}</p>
                        <p>{item.bun}</p>

                    </div>
                )})
            }
        </div>
    );
}

export default BurgerConstructor;
