<main>
	<h1>Let's Chat</h1>

    <div class="flex-container">
        <div class="flex-inner">
            <img src="/images/meeting.svg" alt="">
            <form action="submit">
                <fieldset class="contact">
                    <legend>Free Initial Consult</legend>

                    <div class="flex">
                        <div class="flex-1">
                            <label>
                                <span>Name</span>
                                <input class="textInput" required type="text" placeholder="Tony S." />
                            </label>

                            <label>
                                <span>Email</span>
                                <input class="textInput" required type="email" placeholder="tony@starkindustries.net" />
                            </label>

                            <label>
                                <span>Phone (optional)</span>
                                <input class="textInput" type="tel" placeholder="867-5309" />
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
                    </div>

                    <button class="btn primary">Submit</button>
                </fieldset>
            </form>
        </div>
    </div>
</main>

<style lang="scss">
@import '../../styles/variables.scss';

.flex-container {
    display: flex;
    margin: 4rem 0;
    width: 100%;

    .flex-inner {
        display: flex;
        margin: 0 auto;
    }

    img {
        max-width: 300px;
        margin-right: 6rem;
    }
}

form {
    padding: 1rem;
    border-radius: 10px;
    width: 990px;

    input {
        background-color: #f7eeee;
        border-color: transparent;
        color: black;
        max-width: 320px;
    }

    textarea {
        background-color: #f7eeee;
        border-color: transparent;
        color: white;
        resize: none;
        font-family: inherit;
        padding: 5px 10px;
    }

    legend {
        padding-left: 0;
    }

    .flex {
        display: flex;

        &-1 {
            width: 40%;
        }

        &-2 {
            width: 50%;
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
}

button {
    width: 90%;
    height: 40px;
    margin-top: 2rem;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}

@media (max-width: $breakpoint-s) {
    .flex-inner  {
        flex-direction: column;
    }
    
    h1 {
        text-align: center;
        margin-top: 3rem;
    }

    form {
        width: 80%;
        margin-left: 0.8rem;
    }

    img {
        max-width: 40% !important;
        margin: 0 auto !important;
        margin-top: -2rem !important;
        margin-bottom: 2rem !important;
    }

    .flex {
        flex-direction: column;

        &-1, &-2 {
            width: 100% !important;
        }
    }

    legend {
    }

    label {
        width: 100%;
    }

    button {
        width: 100%;
    }
}
</style>
