<div class="animate-cradle">
	<slot />
</div>

<style>
	@keyframes cradle {
		0% {
			transform: rotate(-5deg);
		}
		50% {
			transform: rotate(5deg);
		}
		100% {
			transform: rotate(-5deg);
		}
	}
	.animate-cradle {
		animation: cradle 1.5s ease-in-out infinite;
	}
</style>
