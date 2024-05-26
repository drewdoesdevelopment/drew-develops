<main>
	<h1>Connect</h1>

	<form action="submit">
		<fieldset>
            <legend>Contact Form</legend>
			<label>
				Name
				<input required type="text" />
			</label>

			<label>
				Email
				<input required type="email" />
			</label>

			<label>
				Phone (optional)
				<input type="tel" />
			</label>

			<fieldset>
				<legend>Communication Preference</legend>

				<label>
					Phone
					<input type="radio" name="commPreference" value="phone" />
				</label>

				<label>
					Email
					<input type="radio" name="commPreference" value="email" />
				</label>
			</fieldset>
		</fieldset>
	</form>
	<button>Submit</button>
</main>
