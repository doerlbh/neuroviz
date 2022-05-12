<article class="name-card">
	<div
		class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	>
		<h2 class="text-xl font-semibold">
			<slot name="name">
				<span class="missing">Unknown name</span>
			</slot>
		</h2>

		<div class="address text-base md:text-lg">
			<slot name="address">
				<span class="missing">Unknown address</span>
			</slot>
		</div>

		<div class="email text-base md:text-lg">
			<slot name="email">
				<span class="missing">Unknown email</span>
			</slot>
		</div>

		<div class="website text-base md:text-lg">
			<slot name="website">
				<span class="missing">Unknown website</span>
			</slot>
		</div>
	</div>
</article>

<style>
	.name-card {
		/* width: 300px; */
		/* border: 1px solid #aaa; */
		/* border-radius: 2px; */
		/* box-shadow: 2px 2px 8px rgba(0,0,0,0.1); */
		/* padding: 1em; */
	}

	h2 {
		padding: 0 0 0.2em 0;
		margin: 0 0 1em 0;
		border-bottom: 2px solid #ff3e00;
	}

	.address,
	.email,
	.website {
		padding: 0 0 0 1.5em;
		background: 0 0 no-repeat;
		background-size: 20px 20px;
		margin: 0 0 0.5em 0;
		line-height: 1.2;
	}

	.address {
		background-image: url(/map-marker.svg);
	}
	.email {
		background-image: url(/email.svg);
	}
	.missing {
		color: #999;
	}
</style>
