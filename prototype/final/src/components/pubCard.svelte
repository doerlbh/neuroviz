<script>
	export let pubdata;
</script>

<a class="pubcards hover:shadow-md" href=" ">
	<p id="pubterm" class="text-base md:text-lg">
		<span class="font-semibold">[{pubdata.type}-{pubdata.displayid}]</span>
		{@html pubdata.authors}{@html pubdata.year}, "{pubdata.title},"
		<em>{pubdata.venue}</em>
		{@html pubdata.arxiv}{@html pubdata.code}
		{@html pubdata.demo}{@html pubdata.video}{@html pubdata.pdf}
		{@html pubdata.slides}{@html pubdata.poster}{@html pubdata.link}
		{@html pubdata.cite}
	</p>
</a>
