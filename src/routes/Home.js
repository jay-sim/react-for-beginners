import { Link } from "react-router-dom";

function Home() {

    return (
        <div>
            <div>
                <h1>Welcome Home!</h1>
            </div>
            <div>
                <Link to={`/todo`}>
                    <button>To-Do 리스트</button>
                </Link>
                <Link to={`/coin`}>
                    <button>코인계산기</button>
                </Link>
                <Link to={`/movies`}>
                    <button>오늘의 추천영화</button>
                </Link>
            </div>
        </div>

    );
}

export default Home;