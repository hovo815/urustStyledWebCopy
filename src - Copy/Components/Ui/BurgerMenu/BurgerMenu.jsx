import React, {useState} from 'react';
import Flex from "../Flex/Flex";
import BurgerMenuSvg from "../../../Assets/Img/Icons/BurgerMenu.svg"
import Button from "../Button/Button";
import OpenBurgerMenu from "./OpenBurgerMenu/OpenBurgerMenu";
import Images from "../Images/Images";

const BurgerMenu = () => {
    const [open, setOpen] = useState(false)

    return (
        <Flex  align="center" justify="flex-end">
            {!open ?
                <Button width="50px" onClick={() => setOpen(true)}>
                    <Images height="40px" alt="burger menu" src={BurgerMenuSvg}/>
                </Button>
                :
                <OpenBurgerMenu setOpen={setOpen}/>
            }

        </Flex>
    );
};


export default BurgerMenu;