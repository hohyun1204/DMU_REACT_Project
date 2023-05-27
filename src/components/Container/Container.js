import 'components/Container/Container.css';

function Container({children}){
    return(
        <div class="container">
            {children}
        </div>
    );
}

export default Container;