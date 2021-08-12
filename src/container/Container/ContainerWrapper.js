import styled from "styled-components";

const padding = "20px";
const ContainerWrapper = styled.div`
    display: flex;

    .sidebar{
        width: 300px;
        padding: ${padding};
        background-color: rgba(136,0,255,1);
        height: 100vh;
        position: sticky;
        top: 0px;

        ul.menu {
            li {
                a {
                    padding: 10px 20px;
                    border-radius: 10px;
                    background-color: white;
                    margin-bottom:  10px;
                    display: block;
                    transition: 0.3s;
                    font-weight: bold;

                
                    &:hover {
                        background-color: rgba(177,191,255,1);
                        /* color: white; */
                        transition: 0.2s;
                        transform: scale(1.1);
                    }

                    &.active {
                        background-color: rgba(132,92,255,1);
                        color: white;
                        transition: 0.3s;
                        transform: scale(1.1);
                    }
                }
            }
        }
    }

    .rightside {
        flex: 1;

        header {
            position: sticky;
            top: 0px;
            z-index: 100;

            .logo {
                height: 40px;
                margin-right: 30px;
            }
        }

        .content {
            padding: ${padding};
            }
    }
`;

export default ContainerWrapper;