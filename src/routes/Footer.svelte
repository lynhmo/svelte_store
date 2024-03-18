<script>
	import bigLogo from '../lib/assets/images/logo.png';
	import shoppeLogo from '../lib/assets/images/shopee.png';
	import tikiLogo from '../lib/assets/images/tiki.png';
	import LogosFacebook from '~icons/logos/facebook';
	import SkillIconsInstagram from '~icons/skill-icons/instagram';
	import DeviconTwitter from '~icons/devicon/twitter';
	import LogosYoutubeIcon from '~icons/logos/youtube-icon';
	import LogosGithubIcon from '~icons/logos/github-icon';

	let onlineShopLogo_css = 'w-[50px] object-cover';
	let onlineShop_css =
		'flex cursor-pointer items-center bg-[#316020] m-2 px-4 py-2.5 rounded-[5px]';
	let aboutLink_css = 'block no-underline text-[white] text-sm px-0 py-1.5';
	let footerContactTile_css = 'text-[25px] font-semibold text-[white] mb-5';

	let socialIcon_css = 'm-[5px] h-[38px] w-[38px] rounded-[50%] bg-[#316020] p-2.5 text-center';
</script>

<div class="bg-mediumGreen m-auto h-[400px] max-w-full text-white">
	<!-- container footer -->
	<div class="m-auto flex h-full flex-wrap px-[7%] py-20">
		<!-- footer logo / online shop -->
		<div class="w-[33.3333%]">
			<a href="/">
				<img class="w-[300px] object-cover" src={bigLogo} alt="logo" />
			</a>
			<div class="mb-5 pl-[7px] text-[15px]">
				Mua các mô hình, lego, trang trí tại của hàng Bot Store.
			</div>
			<div class="flex">
				<a href="/">
					<div class={onlineShop_css}>
						<!-- logo shopee -->
						<div class="mr-[5px] mt-[5px]">
							<img class={onlineShopLogo_css} src={shoppeLogo} alt="shopee logo" />
						</div>
						<!-- chữ bên cạnh logo -->
						<div>
							<span class="text-sm font-extralight">Shopping on</span>
							<p class="text-[19px] font-bold">Shopee</p>
						</div>
					</div>
				</a>
				<a href="/">
					<div class={onlineShop_css}>
						<!-- logo tiki -->
						<div class="mr-[5px] mt-[5px]">
							<img class={onlineShopLogo_css} src={tikiLogo} alt="tiki logo" />
						</div>
						<!-- chữ bên cạnh logo -->
						<div>
							<span class="text-sm font-extralight">Shopping on</span>
							<p class="text-[19px] font-bold">Tiki</p>
						</div>
					</div>
				</a>
			</div>
		</div>
		<!-- về chúng tôi -->
		<div class="w-[16.6667%]">
			<!-- title -->
			<div class={footerContactTile_css}>Về chúng tôi</div>
			<!-- about us link -->
			<div>
				<a class={aboutLink_css} href="/">Careers</a>
				<a class={aboutLink_css} href="/">Của hàng của chúng tôi</a>
				<a class={aboutLink_css} href="/">Chính sách giao hàng</a>
				<a class={aboutLink_css} href="/">Điều khoản dịch vụ</a>
				<a class={aboutLink_css} href="/">Chính sách quyền riêng tư</a>
			</div>
		</div>
		<!-- dịch vụ chăm sóc khách hàng -->
		<div class="w-[25%]">
			<!-- title -->
			<div class={footerContactTile_css}>Hỗ trợ khách hàng</div>
			<!-- customer care link -->
			<div class="flex flex-col">
				<a class={aboutLink_css} href="/">Trung tâm hỗ trợ</a>
				<a class={aboutLink_css} href="/">Cách để mua hàng</a>
				<a class={aboutLink_css} href="/">Truy cứu đơn hàng</a>
				<a class={aboutLink_css} href="/">Hợp tác</a>
				<a class={aboutLink_css} href="/">Hoàn trả và hoàn tiền</a>
			</div>
		</div>
		<!-- liên hệ -->
		<div class="w-[25%]">
			<!-- title -->
			<div class={footerContactTile_css}>Liên hệ chúng tôi</div>
			<!-- địa chỉ -->
			<p class="px-0 py-[7px] text-sm text-[white]">69 Thái Hà, Trung Liệt, Đống Đa, Hà Nội</p>
			<p class="px-0 py-[7px] text-sm text-[white]">Email: botstore.vn@gmail.com</p>
			<p class="px-0 py-[7px] text-sm text-[white]">Số điện thoại: +84 969420123</p>
			<div class="my-0 ml-[-5px] mr-[-5px] flex text-[15px]">
				<a class={aboutLink_css} href="/">
					<LogosFacebook class={socialIcon_css} />
				</a>
				<a class={aboutLink_css} href="/">
					<SkillIconsInstagram class={socialIcon_css} />
				</a>
				<a class={aboutLink_css} href="/">
					<DeviconTwitter class={socialIcon_css} />
				</a>
				<a class={aboutLink_css} href="/">
					<LogosYoutubeIcon class={socialIcon_css} />
				</a>
				<a class={aboutLink_css} href="/">
					<LogosGithubIcon class={socialIcon_css} />
				</a>
			</div>
		</div>
	</div>
</div>
