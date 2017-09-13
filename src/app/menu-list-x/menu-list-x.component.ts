import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-list-x',
  templateUrl: './menu-list-x.component.html',
  styleUrls: ['./menu-list-x.component.css']
})
export class MenuListXComponent implements OnInit {
  private topSellers: Array<any> = [{
    name: 'Colorful iGame GTX1080Ti Vulcan AD',
    price: 29350,
    img:'https://th-live-02.slatic.net/p/2/colorful-igame-gtx1080ti-vulcan-ad-1498707718-34396672-4881cf1f5fa1b4228fbbeee91cdf8fea-webp-zoom.jpg'
  },{
    name: 'HP 24es IPS LED Display (Silver)',
    price: 4990,
    img:'https://th-live-02.slatic.net/p/2/hp-24es-ips-led-display-silver-1468307675-4644527-7cdccf6555808b92ae1b7a1d9a8b1944-webp-zoom.jpg'
  },{
    name: 'AOC (I2781FH) LED Monitor 27" IPS (Black)',
    price: 6900,
    img:'https://th-live-02.slatic.net/p/2/aoc-i2781fh-led-monitor-27-ips-black-1448273884-6898233-1-webp-zoom.jpg'
  },{
    name: 'Canon PIXMA IP2770 InkJet Printer ติดตั้ง TANK',
    price: 2379,
    img:'https://th-live-02.slatic.net/p/2/canon-pixma-ip2770-inkjet-printer-tank-1471420230-5018877-70394e17a8d8e5f7d8c0bc1b79829dd8-webp-zoom.jpg'
  },{
    name: 'ACER Aspire VX5-591G-71W6',
    price: 35990,
    img:'https://th-live-03.slatic.net/p/2/acer-aspire-vx5-591g-71w6-i7-7700hq8gb1tbssd128gbgtx-10504gb156-black-1487134905-80785811-140d4c49cdec996d9f8bb4805b2e72d9-webp-zoom.jpg'
  }];

  constructor() { }

  ngOnInit() {
  }

}
