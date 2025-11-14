import * as S from "./style";
import Logo from "../../assets/image/Logo.svg"

const Home = () => {
    return(
        <S.Background>
            <S.DivComponent>
                <S.ImageComponent src={Logo} width={"350vh"} />
                <a href="/inscricao">Acesse ao link de registro</a>
            </S.DivComponent>
        </S.Background>
    );
};

export default Home;