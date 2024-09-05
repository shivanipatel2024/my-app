import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ShowDetailsComponent } from '../show-details/show-details.component';
import { ShowDialogComponent } from '../show-dialog/show-dialog.component';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [CommonModule, ShowDetailsComponent, ShowDialogComponent],
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.css',
  providers: [HttpClient],
})
export class ShowListComponent {
  constructor() {}
  showList = [
    {
      id: 1,
      title: 'Stranger Things',
      description:
        'Mysteries unravel in a small Midwestern town in the 1980s, involving supernatural forces, secret experiments and one strange girl',
      imageUrl:
        'https://s.yimg.com/fz/api/res/1.2/S8ynwcXdyBCNXs5aBlNZfA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7Zm9ybWF0PXdlYnA7aD0zODA7cHhvZmY9NTA7cHlvZmY9MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/bd3ee1c4-ac34-3b0b-9daf-35eaad7d8d60/t_1024x1024.cf.webp',
      bgImageUrl:
        'https://s.yimg.com/fz/api/res/1.2/AXTZnEGhFGs4oBuM2oMiVQ--~C/YXBwaWQ9c3JjaGRkO2ZpPXN0cmltO2g9NTA2O3c9MTEwMA--/https://s.yimg.com/zb/imgv1/35d5dcd8-45ef-3f16-b77b-34e5917e8c03/t_1024x1024.cf.webp',
      year: 2016,
      rating: 8.7,
      category: 'Horror',
      trailerUrl: 'Videos/StrangerThings.mp4',
      cast: 'Winona Ryder,Millie Bobby Brown,Finn Wolfhard,Noah Schnapp',
    },
    {
      id: 2,
      title: 'Spider-Man: Across the Spider-Verse',
      description:
        "After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. However, when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders. He must soon redefine what it means to be a hero so he can save the people he loves most.",
      imageUrl:
        'https://s.yimg.com/fz/api/res/1.2/DRy51gv0ctXEPzXlZqLcGg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7Zm9ybWF0PXdlYnA7aD0zODA7cHhvZmY9NTA7cHlvZmY9MDtxPTk1O3c9MjQw/https://s.yimg.com/zb/imgv1/9c5810f3-95ab-31ab-bbbb-1f8fdbdfaf7d/t_1024x1024.cf.webp',
      bgImageUrl:
        'https://s.yimg.com/fz/api/res/1.2/hPsUOlUb6GiYv2HMrk4Urw--~C/YXBwaWQ9c3JjaGRkO2ZpPXN0cmltO2g9NTA2O3c9MTEwMA--/https://s.yimg.com/zb/imgv1/445f60c5-26ef-39c6-a344-1d9c0b1ead31/t_1024x1024.cf.webp',
      year: 2023,
      rating: 8.8,
      category: 'Action',
      trailerUrl: 'Videos/SPIDER_MAN_ INTO _THE _SPIDER_VERSE.mp4',
      cast: 'Shameik Moore,Hailee Steinfeld,Jake Johnson,Brian Tyree Henry',
    },
    {
      id: 3,
      title: 'Extraction 2',
      description:
        "Back from the brink of death, commando Tyler Rake embarks on a dangerous mission to save a ruthless gangster's imprisoned family.",
      imageUrl:
        'https://s.yimg.com/fz/api/res/1.2/dvVci_XdhWF0LK5yXMcu9w--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7Zm9ybWF0PXdlYnA7aD0zODA7cHhvZmY9NTA7cHlvZmY9MDtxPTk1O3c9MjQw/https://s.yimg.com/zb/imgv1/bb5c4240-b32c-331a-ad06-175fe2f64feb/t_1024x1024.cf.webp',
      bgImageUrl:
        'https://s.yimg.com/fz/api/res/1.2/7N4ENzvMi9TvCJrziSxQlg--~C/YXBwaWQ9c3JjaGRkO2ZpPXN0cmltO2g9NTA2O3c9MTEwMA--/https://s.yimg.com/zb/imgv1/7c8e88c2-9d33-3e47-b3fd-3473250af099/t_1024x1024.cf.webp',
      year: 2023,
      rating: 7,
      category: 'Action',
      trailerUrl: 'Videos/EXTRACTION2.mp4',
      cast: 'Chris Hemsworth,Golshifteh Farahani,Adam Bessa,Tornike Gogrichiani,Tornike Bziava',
    },
    {
      id: 4,
      title: '1899',
      description:
        'Immigrants on a steamship traveling from London to New York get caught up in a mysterious riddle after finding a second vessel adrift on the open sea',
      imageUrl:
        'https://s.yimg.com/fz/api/res/1.2/DlalOnXfbnZ1lCjUDcqjaQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7Zm9ybWF0PXdlYnA7aD0zODA7cHhvZmY9NTA7cHlvZmY9MDtxPTk1O3c9MjQw/https://s.yimg.com/zb/imgv1/262f26ac-7921-31b5-9377-93254979a301/t_1024x1024.cf.webp',
      bgImageUrl:
        'https://s.yimg.com/fz/api/res/1.2/hKepQqgpjUUAYfmBDtRKlw--~C/YXBwaWQ9c3JjaGRkO2ZpPXN0cmltO2g9NTA2O3c9MTEwMA--/https://s.yimg.com/zb/imgv1/9e254ee5-6e2a-3736-98ef-4208301ad31f/t_1024x1024.cf.webp',
      year: 2022,
      rating: 7.3,
      category: 'Horror',
      trailerUrl: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      cast: 'Emily Beecham,Aneurin Barnard,Andreas Pietschmann,Miguel Bernardeau,Isabella Wei',
    },
    {
      id: 5,
      title: 'Evil',
      description:
        "Skeptical psychologist Kristen Bouchard joins David Acosta, who is training to be a Catholic priest, and a blue collar contractor as they investigate the church's backlog of unexplained mysteries, including supposed miracles, demonic possessions and other extraordinary occurrences. Their job is to assess if there's a logical explanation or if something truly supernatural is at work...",
      imageUrl:
        'https://s.yimg.com/fz/api/res/1.2/2L1PEBetilgfW70lRxaviQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7Zm9ybWF0PXdlYnA7aD0zODA7cHhvZmY9NTA7cHlvZmY9MDtxPTk1O3c9MjQw/https://s.yimg.com/zb/imgv1/25fefc2b-3888-3e07-a2a4-a6d39d78e55e/t_1024x1024.cf.webp',
      bgImageUrl:
        'https://s.yimg.com/fz/api/res/1.2/klNodBtxFbCf7ZVDcM2MXw--~C/YXBwaWQ9c3JjaGRkO2ZpPXN0cmltO2g9NTA2O3c9MTEwMA--/https://s.yimg.com/zb/imgv1/2f02764f-666f-3e86-93a9-18176bcaac02/t_1024x1024.cf.webp',
      year: 2019,
      rating: 7.8,
      category: 'Horror',
      trailerUrl: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      cast: 'Katja Herbers,Mike Colter,Aasif Mandvi,Kurt Fuller,Marti Matulis',
    },
    {
      id: 6,
      title: 'Damsel',
      description:
        'A young woman agrees to marry a handsome prince -- only to discover it was all a trap. She is thrown into a cave with a fire-breathing dragon and must rely solely on her wits and will to survive.',
      imageUrl:
        'https://s.yimg.com/fz/api/res/1.2/dAXKg6MOBYL2FsvyerpXKA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7Zm9ybWF0PXdlYnA7aD0zODA7cHhvZmY9NTA7cHlvZmY9MDtxPTk1O3c9MjQw/https://s.yimg.com/zb/imgv1/1101ace3-4872-3c26-acf7-8b6f9e439e27/t_1024x1024.cf.webp',
      bgImageUrl:
        'https://s.yimg.com/fz/api/res/1.2/YqEOVppjwJIl8b3VBmK9aA--~C/YXBwaWQ9c3JjaGRkO2ZpPXN0cmltO2g9NTA2O3c9MTEwMA--/https://s.yimg.com/zb/imgv1/b279a2c9-cb85-3b7f-b5b7-7fc853d9a51a/t_1024x1024.cf.webp',
      year: 2024,
      rating: 6.1,
      category: 'Action',
      trailerUrl: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      cast: 'Millie Bobby Brown,Ray Winstone,Nick Robinson,Shohreh Aghdashloo',
    },
    {
      id: 7,
      title: 'Wednesday',
      description:
        'While attending Nevermore Academy, Wednesday Addams attempts to master her emerging psychic ability, thwart a killing spree and solve the mystery that embroiled her parents 25 years ago.',
      imageUrl:
        'https://s.yimg.com/fz/api/res/1.2/wNVgXuNJQS0.Mjn3UUkSPg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7Zm9ybWF0PXdlYnA7aD0zODA7cHhvZmY9NTA7cHlvZmY9MDtxPTk1O3c9MjQw/https://s.yimg.com/zb/imgv1/96dbbb67-7328-33d0-a1bc-eec4cf06651d/t_1024x1024.cf.webp',
      bgImageUrl:
        'https://s.yimg.com/fz/api/res/1.2/7pNYgmaxyb_ZLpCg4WCCVQ--~C/YXBwaWQ9c3JjaGRkO2ZpPXN0cmltO2g9NTA2O3c9MTEwMA--/https://s.yimg.com/zb/imgv1/48f42c53-bcc9-3916-88b8-c65232e6750e/t_1024x1024.cf.webp',
      year: 2022,
      rating: 8.1,
      category: 'Mystery',
      trailerUrl: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      cast: 'Jenna Ortega,Gwendoline Christie,Riki Lindhome,Jamie McShane,Hunter Doohan',
    },
    {
      id: 8,
      title: 'Peppa Pig',
      description:
        'Peppa Pig follows the adventures of the titular, anthropomorphic animal along with her family and friends. Each of her friends is a different kind of animal -- with a last name matching the type of animal each is. Although they are humanlike in many ways, the characters still display characteristics of their species -- such as the Rabbit family being fixated with carrots.',
      imageUrl:
        'https://s.yimg.com/fz/api/res/1.2/3859kpXIzW0hwotghWA2Tg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7Zm9ybWF0PXdlYnA7aD0zODA7cHhvZmY9NTA7cHlvZmY9MDtxPTk1O3c9MjQw/https://s.yimg.com/zb/imgv1/911102b3-71bf-39ec-985b-9223c4426794/t_1024x1024.cf.webp',
      bgImageUrl:
        'https://s.yimg.com/fz/api/res/1.2/rzMft1jaeYFkQaH_WPc.hQ--~C/YXBwaWQ9c3JjaGRkO2ZpPXN0cmltO2g9NTA2O3c9MTEwMA--/https://s.yimg.com/zb/imgv1/2d24a179-2ecf-3f45-8d47-ed7cdf2d4a10/t_1024x1024.cf.webp',
      year: 2005,
      rating: 6.3,
      category: 'Children',
      trailerUrl: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      cast: 'Lily Snowden-Fine (2004),Cecily Bloom (2006–2007),Harley Bird (2007–2020),Amelie Bea Smith (2020–present)',
    },
    {
      id: 9,
      title: 'Griselda',
      description:
        'The savvy and ambitious Colombian businesswomen Griselda Blanco creates one of the most profitable cartels in history.',
      imageUrl:
        'https://s.yimg.com/fz/api/res/1.2/UXu0j2El7dW5YIaxWzaWmA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7Zm9ybWF0PXdlYnA7aD0zODA7cHhvZmY9NTA7cHlvZmY9MDtxPTk1O3c9MjQw/https://s.yimg.com/zb/imgv1/c59f89bb-0d12-3a79-b19b-33bd5aa56b4a/t_1024x1024.cf.webp',
      bgImageUrl:
        'https://s.yimg.com/fz/api/res/1.2/xlWRLQrTiSxx.OVoeY2Qzg--~C/YXBwaWQ9c3JjaGRkO2ZpPXN0cmltO2g9NTA2O3c9MTEwMA--/https://s.yimg.com/zb/imgv1/ae11ae25-aa7c-3a2e-b2c4-2c61b321c7a1/t_1024x1024.cf.webp',
      year: 2024,
      rating: 7.2,
      category: 'Biography',
      trailerUrl: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      cast: 'Sofia Vergara',
    },
    {
      id: 10,
      title: 'All American',
      description:
        "Spencer James is a rising high school football player and A student at South Crenshaw High, but when coach Billy Baker recruits him to join his team in Beverly Hills, Spencer's mother, Grace, and his best friend, Coop, convince him it's an opportunity he has to seize. Forced to move in with Billy and his family to protect his transfer permit to Beverly, Billy's son Jordan, who is also the starting quarterback, is less than thrilled to be sharing..",
      imageUrl:
        'https://s.yimg.com/fz/api/res/1.2/cCFLiFCL.pnKgYWtbJD8kA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7Zm9ybWF0PXdlYnA7aD0zODA7cHhvZmY9NTA7cHlvZmY9MDtxPTk1O3c9MjQw/https://s.yimg.com/zb/imgv1/213921d5-284f-3ae8-a9a8-7f674b293efb/t_1024x1024.cf.webp',
      bgImageUrl:
        'https://s.yimg.com/fz/api/res/1.2/uwmEi3Nx79pSOu294pHRtw--~C/YXBwaWQ9c3JjaGRkO2ZpPXN0cmltO2g9NTA2O3c9MTEwMA--/https://s.yimg.com/zb/imgv1/5857e8f8-02fb-304f-8052-50d2afbd68c2/t_1024x1024.cf.webp',
      year: 2018,
      rating: 7.7,
      category: 'Football',
      trailerUrl: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      cast: 'Daniel Ezra,Bre-Z,Greta Onieogou,Samantha Logan,Michael Evans Behling,Cody Christian',
    },

    {
      id: 11,
      title: 'Wednesday',
      description:
        'While attending Nevermore Academy, Wednesday Addams attempts to master her emerging psychic ability, thwart a killing spree and solve the mystery that embroiled her parents 25 years ago.',
      imageUrl:
        'https://s.yimg.com/fz/api/res/1.2/wNVgXuNJQS0.Mjn3UUkSPg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7Zm9ybWF0PXdlYnA7aD0zODA7cHhvZmY9NTA7cHlvZmY9MDtxPTk1O3c9MjQw/https://s.yimg.com/zb/imgv1/96dbbb67-7328-33d0-a1bc-eec4cf06651d/t_1024x1024.cf.webp',
      bgImageUrl:
        'https://s.yimg.com/fz/api/res/1.2/7pNYgmaxyb_ZLpCg4WCCVQ--~C/YXBwaWQ9c3JjaGRkO2ZpPXN0cmltO2g9NTA2O3c9MTEwMA--/https://s.yimg.com/zb/imgv1/48f42c53-bcc9-3916-88b8-c65232e6750e/t_1024x1024.cf.webp',
      year: 2022,
      rating: 8.1,
      category: 'Mystery',
      trailerUrl: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      cast: 'Jenna Ortega,Gwendoline Christie,Riki Lindhome,Jamie McShane,Hunter Doohan',
    },
    {
      id: 12,
      title: 'Peppa Pig',
      description:
        'Peppa Pig follows the adventures of the titular, anthropomorphic animal along with her family and friends. Each of her friends is a different kind of animal -- with a last name matching the type of animal each is. Although they are humanlike in many ways, the characters still display characteristics of their species -- such as the Rabbit family being fixated with carrots.',
      imageUrl:
        'https://s.yimg.com/fz/api/res/1.2/3859kpXIzW0hwotghWA2Tg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7Zm9ybWF0PXdlYnA7aD0zODA7cHhvZmY9NTA7cHlvZmY9MDtxPTk1O3c9MjQw/https://s.yimg.com/zb/imgv1/911102b3-71bf-39ec-985b-9223c4426794/t_1024x1024.cf.webp',
      bgImageUrl:
        'https://s.yimg.com/fz/api/res/1.2/rzMft1jaeYFkQaH_WPc.hQ--~C/YXBwaWQ9c3JjaGRkO2ZpPXN0cmltO2g9NTA2O3c9MTEwMA--/https://s.yimg.com/zb/imgv1/2d24a179-2ecf-3f45-8d47-ed7cdf2d4a10/t_1024x1024.cf.webp',
      year: 2005,
      rating: 6.3,
      category: 'Children',
      trailerUrl: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      cast: 'Lily Snowden-Fine (2004),Cecily Bloom (2006–2007),Harley Bird (2007–2020),Amelie Bea Smith (2020–present)',
    },
    {
      id: 13,
      title: 'Griselda',
      description:
        'The savvy and ambitious Colombian businesswomen Griselda Blanco creates one of the most profitable cartels in history.',
      imageUrl:
        'https://s.yimg.com/fz/api/res/1.2/UXu0j2El7dW5YIaxWzaWmA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7Zm9ybWF0PXdlYnA7aD0zODA7cHhvZmY9NTA7cHlvZmY9MDtxPTk1O3c9MjQw/https://s.yimg.com/zb/imgv1/c59f89bb-0d12-3a79-b19b-33bd5aa56b4a/t_1024x1024.cf.webp',
      bgImageUrl:
        'https://s.yimg.com/fz/api/res/1.2/xlWRLQrTiSxx.OVoeY2Qzg--~C/YXBwaWQ9c3JjaGRkO2ZpPXN0cmltO2g9NTA2O3c9MTEwMA--/https://s.yimg.com/zb/imgv1/ae11ae25-aa7c-3a2e-b2c4-2c61b321c7a1/t_1024x1024.cf.webp',
      year: 2024,
      rating: 7.2,
      category: 'Biography',
      trailerUrl: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      cast: 'Sofia Vergara',
    },
    {
      id: 14,
      title: 'All American',
      description:
        "Spencer James is a rising high school football player and A student at South Crenshaw High, but when coach Billy Baker recruits him to join his team in Beverly Hills, Spencer's mother, Grace, and his best friend, Coop, convince him it's an opportunity he has to seize. Forced to move in with Billy and his family to protect his transfer permit to Beverly, Billy's son Jordan, who is also the starting quarterback, is less than thrilled to be sharing..",
      imageUrl:
        'https://s.yimg.com/fz/api/res/1.2/cCFLiFCL.pnKgYWtbJD8kA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7Zm9ybWF0PXdlYnA7aD0zODA7cHhvZmY9NTA7cHlvZmY9MDtxPTk1O3c9MjQw/https://s.yimg.com/zb/imgv1/213921d5-284f-3ae8-a9a8-7f674b293efb/t_1024x1024.cf.webp',
      bgImageUrl:
        'https://s.yimg.com/fz/api/res/1.2/uwmEi3Nx79pSOu294pHRtw--~C/YXBwaWQ9c3JjaGRkO2ZpPXN0cmltO2g9NTA2O3c9MTEwMA--/https://s.yimg.com/zb/imgv1/5857e8f8-02fb-304f-8052-50d2afbd68c2/t_1024x1024.cf.webp',
      year: 2018,
      rating: 7.7,
      category: 'Football',
      trailerUrl: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      cast: 'Daniel Ezra,Bre-Z,Greta Onieogou,Samantha Logan,Michael Evans Behling,Cody Christian',
    },
  ];
  selectedShow: any;
  selectShow(show: any) {
    this.selectedShow = show;
  }

  ngOnInit(): void {
    this.selectedShow = this.showList[0]; // initialize with the first show
  }

  showModal: any;
  openModal(show: any) {
    this.showModal = show;
    setTimeout(() => {
      $('#showModal').modal('show');
    }, 3000);
  }

  closeModal() {
    $('#showModal').modal('hide');
  }

  @ViewChild('showListRef') showListRef!: ElementRef;
  isDown = false;
  startX: number = 0;
  scrollLeft: number = 0;

  handleMouseDown = (e: MouseEvent) => {
    this.isDown = true;
    this.startX = e.pageX - this.showListRef.nativeElement.offsetLeft;
    this.scrollLeft = this.showListRef.nativeElement.scrollLeft;
  };

  handleMouseUpOrLeave = () => {
    this.isDown = false;
  };

  handleMouseMove = (e: MouseEvent) => {
    if (!this.isDown) return;
    e.preventDefault();
    const x = e.pageX - this.showListRef.nativeElement.offsetLeft;
    const walk = x - this.startX; // Calculate how far the mouse has moved
    this.showListRef.nativeElement.scrollLeft = this.scrollLeft - walk;
  };
}
