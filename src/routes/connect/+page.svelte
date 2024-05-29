<main>
	<h1>Connect</h1>

	<form action="submit">
		<fieldset class="contact">
            <legend>Contact Form</legend>
			<label>
				<span>Name</span>
				<input required type="text" />
			</label>

			<label>
				<span>Email</span>
				<input required type="email" />
			</label>

			<label>
				<span>Phone (optional)</span>
				<input type="tel" />
			</label>

			<fieldset class="commPreference">
				<legend>Communication Preference</legend>

				<label>
					<span>Phone</span>
					<input type="radio" name="commPreference" value="phone" />
				</label>

				<label>
					<span>Email</span>
					<input type="radio" name="commPreference" value="email" />
				</label>
			</fieldset>
		</fieldset>
	</form>
	<button>Submit</button>
</main>

<style lang='scss'>
form {
    background-color: #18161c;
    padding: 1rem;
    border-radius: 10px;

    label span {
        padding-right: 10px;
        border-right: 4px solid #6c63ff;
        margin: 0.7rem 0;
        width: max-content;
    }

    .contact { 
        label {
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        
        input {
            background-color: #1f1d25;
            border-color: transparent;
            margin-left: 1rem;
            height: 15px;
        }
    }

    .commPreference {
        padding-left: 0;

        label {
            flex-direction: row;
        }

        legend {
            padding-top: 1rem;
        }
    }

    legend {
        text-align: center;
        padding-left: 0;
    }
}

fieldset {
    display: flex;
    flex-direction: column;
    border: none;
}
</style>
