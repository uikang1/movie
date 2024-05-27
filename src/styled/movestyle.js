import styled from 'styled-components';


export const Container = styled.div`
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    z-index: 1000;

    &.on {
        display: block;
    }
    button {
        position: absolute;
        top: 10px;
        right: 10px;
        border: none;
        background-color: transparent;
        color: #dc3545;
        font-size: 1.5em;
        cursor: pointer;
    }

    img {
        max-width: 100%;
        height: auto;
        border-radius: 5px;
        margin-bottom: 20px;
    }
`;

export const ContainerBox = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;

    &.on {
        display: block;
    }
`;

export const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    width: 50%;
    margin: 0 auto;

    input {
        flex-grow: 1;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        margin-right: 10px;
    }

    button {
        padding: 10px 20px;
        border-radius: 5px;
        border: none;
        background-color: #007bff;
        color: white;
        cursor: pointer;
    }
`;

export const SearchHistory = styled.div`
    width: 50%;
    margin: 0 auto;
    margin-bottom: 20px;
    background-color: #f8f9fa;
    padding: 10px;
    border-radius: 5px;

    button {
        padding: 5px 10px;
        border-radius: 5px;
        border: none;
        background-color: #dc3545;
        color: white;
        cursor: pointer;
        margin-bottom: 10px;
    }

    ul {
        list-style: none;
        padding: 0;

        li {
            display: flex;
            justify-content: space-between;
            padding: 5px 10px;
            background-color: #f8f9fa;
            border: 1px solid #dee2e6;
            border-radius: 5px;
            margin-bottom: 10px;

            button {
                border: none;
                background-color: transparent;
                color: #dc3545;
                cursor: pointer;
            }
        }
    }
`;

export const MovieListContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
`;

export const MovieListItem = styled.li`
    width: 500px;
    padding: 20px;
    margin: auto;
    box-sizing: border-box;
    cursor: pointer;

    img {
        max-width: 100%;
        height: auto;
        border-radius: 5px;
    }

    h3 {
        margin: 10px 0;
        font-size: 30px;
    }

    p {
        margin: 5px 0;
        font-size: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: break-all;
    }
`;

export const MovieSorterBox = styled.div`
    display: inline-block;
    margin-left: 10px;
`;

export const MovieSorterSelect = styled.select`
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #f8f9fa;
    color: #333;
    font-size: 16px;
    cursor: pointer;

    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;
