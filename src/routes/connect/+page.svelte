<script>
import { sendData } from './sendData'; 

function handleSubmit(event) {
    const formData = new FormData(event.target);

    const changes = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        note: formData.get('commentField'),
    }

    sendData(changes);
}

</script>

<main>
	<h1>Let's Connect</h1>

    <div class="flex-container">
        <div class="flex-inner">
            <div class="social-plug">
                <p>Follow Me</p>
                <ul>
                    <li>
                        <a href="https://github.com/drewdoesdevelopment" target="_blank" rel="noreferrer" aria-label="Drew Develops GitHub profile">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/drewdevelops" target="_blank" rel="noreferrer" aria-label="Drew Develops Linkedin profile">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path
                                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/drew_develops" target="_blank" rel="noreferrer" aria-label="Drew Develops Instagram profile">
                            <svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F"/>
                            <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
            <form on:submit|preventDefault={handleSubmit}>
                <fieldset class="contact">
                    <legend>Contact Form</legend>

                    <div class="flex">
                        <div class="flex-1">
                            <label>
                                <span>Name</span>
                                <input name="name" class="textInput" required type="text" placeholder="Tony S." />
                            </label>

                            <label>
                                <span>Email</span>
                                <input name="email" class="textInput" required type="email" placeholder="tony@starkindustries.net" />
                            </label>

                            <label>
                                <span>Phone (optional)</span>
                                <input name="phone" class="textInput" type="tel" placeholder="867-5309" />
                            </label>
                        </div>

                        <div class="flex-2">
                            <label>
                                <span>Comments/Request</span>
                                <textarea
                                    name="commentField"
                                    id="comments"
                                    cols="30"
                                    rows="8"
                                    placeholder="Drop me a line..."
                                />
                            </label>
                        </div>

                    <button class="btn secondary">Submit</button>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
</main>

<style lang="scss">
@import '../../styles/variables.scss';

.flex-container {
    display: flex;
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 6rem;

    .flex-inner {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }

    img {
        max-width: 35%;
        margin-right: 4rem;
    }
}

.social-plug {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 3rem;

    p {
        border-bottom: 2px solid black;
        padding-bottom: 1rem;
        width: 180px;
        font-size: 1.1rem;
        font-weight: bold;
    }

    ul {
        display: flex;
        list-style: none;
        padding-left: 0;
        margin-top: 0.4rem !important;
    }

    svg {
        width: 24px;
        height: 24px;
        margin: 0 0.5rem 0 0.5rem;
    }
}

form {
    width: 100%;

    input {
        background-color: #f7f7f7;
        border-color: transparent;
        color: black;
        font-size: 0.8rem;
    }

    textarea {
        background-color: #f7f7f7;
        border-color: transparent;
        color: black;
        resize: none;
        font-size: 0.8rem;
        font-family: inherit;
        padding: 5px 10px;
    }

    legend {
        padding-left: 0;
        width: 90%;
    }

    button {
        border-radius: 4px;
        margin-top: 2rem;
        width: 95%;
        font-size: 0.9rem;
    }

    .flex {
        display: flex;
        flex-direction: column;

        &-1 {
            display: flex;
            width: 40%;
            margin-right: 1rem;
            margin-top: 1rem;

            input {
                margin-right: 1rem;
            }
        }

        &-2 {
            margin-top: 1rem;
            width: 95%;
        }
    }

    label span {
        margin: 0.2rem 0;
    }

    .contact {
        label {
            display: flex;
            flex-direction: column;
            font-size: 0.8rem;
        }
    }

    .textInput {
        padding: 10px;
    }
}

fieldset {
    display: flex;
    flex-direction: column;
    border: none;
    align-items: center;
}

@media  (max-width: $breakpoint-xs) {
    form {

        input {
            width: 100%;
        }

        textarea {
            width: 100%;
        }

        button {
            margin-left: 1rem;
        }
    }
}

@media (max-width: $breakpoint-m) {
    .flex-inner  {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    
    legend {
        margin-left: auto;
    }

    h1 {
        text-align: center;
        margin-top: 3rem;
    }

    form {
        width: 100%;
    }

    img {
        max-width: 40% !important;
        margin: 0 auto !important;
        margin-top: -2rem !important;
        margin-bottom: 2rem !important;
    }

    .flex {
        flex-direction: column;
        width: 80%;
        justify-content: center;

        &-1, &-2 {
            width: 100% !important;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    label {
        width: 100%;
        margin-bottom: 0.6rem;
    }

    button {
        width: 80%;
        align-self: center;
    }

    main {
        margin: 0;
    }
}
</style>
