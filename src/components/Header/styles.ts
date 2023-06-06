import styled from "styled-components";

export const HeaderContent = styled.header`
    height: 5rem;
    padding: 1.25rem;
    background-color: ${props => props.theme['color-1']};

    display: flex;
    align-items: center;
    justify-content: space-between;

    /* h1 {
        max-width: fit-content;
        padding: 0 0.5rem;

        cursor: pointer;
        transition: 0.2s;

        padding: 0 1rem;
        border-radius: 5px;

        border-bottom: 3px solid transparent;

        a {
            text-decoration: none;
            color: ${props => props.theme['primary-neutral']};

            :hover {
                color: ${props => props.theme['primary-dark']};
            }
        }

    } */

    span {
        font-size: 1.5rem;
        color: ${props => props.theme['color-5']};
    }
    

    nav {
        max-width: fit-content;
        padding: 0 0.5rem;

        font-size: 1.25rem;

        display: flex;
        align-items: center;
        justify-content: center;

        gap: 0.5rem;

        cursor: pointer;
        transition: 0.2s;
        
        border-bottom: 3px solid transparent;

        :hover {
            border-bottom: 3px solid ${props => props.theme['primary-light']};
        }
    }

    ul {
        display: none;
        position: absolute;

        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 7.8125rem;
        margin-top: 9.25rem;
        padding: 0.5rem;

        gap: 0.5rem;
        
        background-color: ${props => props.theme['color-2']};

        list-style-type: none;
        

        a {
            display: flex;

            justify-content: space-between;

            text-decoration: none;
            font-size: 1.25rem;

            color: ${props => props.theme['color-9']};

            width: 6rem;
        }

        strong {
            display: flex;

            justify-content: space-between;

            text-decoration: none;
            font-size: 1.25rem;

            color: ${props => props.theme['color-9']};

            width: 6rem;
        }
    }

    nav:hover ul {
        display: flex;
    }
`

export const Button = styled.button`
  font-size: 17px;
  background: transparent;
  border: none;
  padding: 1em 1.5em;
  color: #f8f8f8;
  text-transform: uppercase;
  position: relative;
  transition: .5s ease;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    height: 2px;
    width: 0;
    background-color: #f8f8f8;
    transition: .5s ease;
  }

  &:hover {
    color: #181818;
    transition-delay: .5s;
  }

  &:hover:before {
    width: 100%;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0;
    width: 100%;
    background-color: #f8f8f8;
    transition: .4s ease;
    z-index: -1;
  }

  &:hover:after {
    height: 100%;
    transition-delay: 0.4s;
  }
`;