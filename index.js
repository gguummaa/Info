// 번역 데이터
const translations = {
  en: {
    langName: "English (US)",
    mainText: "Capture every moment<br>that happens in your server!",
    mainText2: "Logs all server events, including message deletions, edits, joins, and leaves.",
    btnInvite: "Invite",
    btnFeatures: "See features",
    serverCount: "InfoLogs is currently being used on approximately 500 servers.",
    feature1Title: "Fine-tune settings with a single command",
    feature1Desc: "When you have to set up multiple commands one by one, it can be overwhelming to know where to start. This logging bot lets you configure log channels easily with just a single command. You can create multiple log channels tailored to your server, and it supports 3 languages — Korean, English, and Japanese — so everyone can use it comfortably. There may be times when you don't want logs to appear in certain channels or categories, right? In that case, you can exclude specific channels and categories to log only what you want, neatly and efficiently. It records all kinds of server events, including message deletions and edits, role assignments, bans, and timeouts. Reduce complicated settings, and manage only the logs that are essential for your server easily and conveniently.",
    feature2Title: "Detailed log recording",
    feature2Desc: "There must have been times when you checked a message deletion log and felt frustrated because you couldn't tell when it was deleted. InfoLogs reduces that inconvenience by recording the message's creation time as well, so you can see at a glance exactly when it was deleted. Message edit logs don't just end with 'edited.' It records a link to the message so you can immediately see what was edited. InfoLogs doesn't stop at message deletions and edits. It logs all essential server events, including bans, kicks, timeouts, invite link creations, and nickname changes, leaving no event unrecorded.",
    feature3Title: "Customizable Join & Leave Messages",
    feature3Desc: "Seeing the same join and leave messages over and over can get a bit boring. With this bot, you can set up your join and leave channels quickly using just a single command. You can create multiple channels tailored to your server, and it supports three languages—Korean, English, and Japanese—so anyone can use it comfortably. You can also make your messages stand out by using container-style layouts for better visibility. Plus, you can add images to your join and leave messages. Customize your server’s welcome and farewell messages in a variety of ways with just one command!",
    supportserver: "Support Server",
    discordserver: "Discord Server",
    footerDev: "Developer",
    footerTeam: "Team",
    footerPolicy: "Policies & Terms",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Service"
  },
  ko: {
    langName: "한국어",
    mainText: "서버에서 일어나는<br>모든 순간을 기록해보세요!",
    mainText2: "메시지 삭제, 수정, 입·퇴장 등 서버에서 발생하는 모든 로그를 기록합니다.",
    btnInvite: "초대하기",
    btnFeatures: "기능 보기",
    serverCount: "현재 약 500개의 서버에서 InfoLogs를 사용하고 있어요",
    feature1Title: "하나의 명령어로 세세한 세팅",
    feature1Desc: "여러 개의 명령어를 하나하나 설정하다 보면 무엇부터 해야 할지 막막해질 때가 있죠. 이 로그 봇은 단 하나의 명령어로 로그 채널 설정을 간편하게 끝낼 수 있도록 도와줘요. 서버에 맞게 여러 개의 로그 채널을 생성할 수 있고, 한국어 · 영어 · 일본어까지 총 3개 언어를 지원해 누구나 편하게 사용할 수 있어요. 또 특정 채널이나 카테고리에서는 로그가 남지 않았으면 좋겠을 때도 있잖아요? 그럴 땐 로그에서 제외할 채널과 카테고리를 지정해 원하는 곳만 깔끔하게 기록할 수 있어요. 메시지 삭제·수정, 역할 지급, 밴, 타임아웃 등 서버에서 발생하는 다양한 이벤트들을 빠짐없이 기록해 드려요. 복잡한 설정은 줄이고, 서버 관리에 꼭 필요한 로그만 쉽고 편하게 관리해 보세요.",
    feature2Title: "세세한 로그 기록",
    feature2Desc: "메시지 삭제 로그를 확인하다 보면 이 메시지가 언제 삭제된 건지 알 수 없어 답답했던 순간이 한 번쯤은 있었을 거예요. InfoLogs는 그런 불편함을 줄이기 위해 메시지의 작성 시간을 함께 기록하여 언제 메시지가 삭제되었는지 한눈에 확인할 수 있도록 도와줘요. 그리고 메시지 수정 로그 역시 단순히 '수정됨'으로 끝나지 않아요. 어떤 메시지가 수정되었는지 바로 확인할 수 있도록 해당 메시지의 링크까지 함께 기록해요. 또한 InfoLogs는 메시지 삭제와 수정에만 그치지 않아요. 밴, 킥, 타임아웃, 초대 링크 생성, 별명 변경 등 서버 관리에 필요한 다양한 이벤트들을 빠짐없이 로그로 남겨 드려요.",
    feature3Title: "커스텀이 가능한 입퇴장 명령어",
    feature3Desc: "서버 입퇴장을 보다보면 지루한 감이 없지 않아 있죠. 이 봇은 단 하나의 명령어로 입퇴장 채널 설정을 간편하게 끝낼 수 있도록 도와줘요. 서버에 맞게 여러 개의 입퇴장 채널을 생성할 수 있고, 한국어 · 영어 · 일본어까지 총 3개의 언어를 지원해 누구나 편하게 사용할 수 있어요. 또 입퇴장 명령어를 컨테이너 박스를 이용해 더욱 잘 보이게 설정도 가능해요. 게다가 입퇴장 명령어에 원하는 사진도 넣을 수 있답니다! 단 하나의 명령어롤 다양하게 입퇴장 안내문을 꾸며보세요!",
    supportserver: "서포트 서버",
    discordserver: "디스코드 서버",
    footerDev: "개발자",
    footerTeam: "팀원",
    footerPolicy: "정책 및 약관",
    footerPrivacy: "개인정보 보호 정책",
    footerTerms: "서비스 약관"
  },
  ja: {
    langName: "日本語",
    mainText: "サーバーで起こる<br>すべての瞬間を記録しましょう！",
    mainText2: "メッセージの削除・編集、入退室など、サーバーで発生するすべてのログを記録します。",
    btnInvite: "招待",
    btnFeatures: "機能を見る",
    serverCount: "InfoLogsは現在、約500のサーバーで使用されています。",
    feature1Title: "1つのコマンドで詳細設定",
    feature1Desc: "複数のコマンドを一つずつ設定していると、何から始めれば良いのか迷うことがありますよね。このログボットは、たった一つのコマンドでログチャンネルの設定を簡単に完了できるようにサポートします。サーバーに合わせて複数のログチャンネルを作成でき、韓国語・英語・日本語の3言語に対応しているので、誰でも快適に使用できます。特定のチャンネルやカテゴリーでログを残したくない場合もありますよね？その場合は、除外したいチャンネルやカテゴリーを指定して、必要な場所だけをきれいに記録できます。メッセージ削除・編集、役職付与、バン、タイムアウトなど、サーバーで発生するさまざまなイベントを漏れなく記録します。複雑な設定は減らし、サーバー管理に必要なログだけを簡単かつ便利に管理しましょう。",
    feature2Title: "詳細なログ記録",
    feature2Desc: "メッセージ削除ログを確認していると、そのメッセージがいつ削除されたのか分からずもどかしい思いをしたことがあるかもしれません。InfoLogsはその不便さを解消するために、メッセージの作成時間も記録し、いつ削除されたのか一目で確認できるようにします。メッセージ編集ログも単に「編集済み」で終わりません。どのメッセージが編集されたのかすぐに確認できるよう、メッセージのリンクまで記録します。さらにInfoLogsは、メッセージの削除や編集にとどまりません。バン、キック、タイムアウト、招待リンク作成、ニックネーム変更など、サーバー管理に必要なさまざまなイベントを漏れなくログに残します。",
    feature3Title: "カスタマイズ可能な入退場メッセージ",
    feature3Desc: "サーバーの入退場メッセージを見続けていると、少し退屈に感じることもありますよね。このボットなら、たった1つのコマンドで入退場チャンネルの設定を簡単に完了できます。サーバーに合わせて複数のチャンネルを作成でき、韓国語・英語・日本語の3言語に対応しているので、誰でも快適に利用できます。 さらに、コンテナ風のレイアウトを使ってメッセージをより見やすく設定することも可能です。また、入退場メッセージに好きな画像を追加することもできます。たった1つのコマンドで、多彩な入退場メッセージを作成してみましょう！",
    supportserver: "Support Server",
    discordserver: "Discord Server",
    footerDev: "開発者",
    footerTeam: "チーム",
    footerPolicy: "ポリシーと規約",
    footerPrivacy: "プライバシーポリシー",
    footerTerms: "利用規約"
  }
};

// URL에서 언어 코드 가져오기
function getLangFromURL() {
  const path = window.location.pathname;
  const match = path.match(/\/(en|ko|ja)/);
  return match ? match[1] : 'en';
}

// 페이지 언어 업데이트
function updatePageLanguage(lang) {
  const t = translations[lang];
  
  document.getElementById('currentLang').textContent = t.langName + " ▼";
  document.getElementById('mainText').innerHTML = t.mainText;
  document.getElementById('mainText2').textContent = t.mainText2;
  document.getElementById('btnInvite').textContent = t.btnInvite;
  document.getElementById('btnFeatures').textContent = t.btnFeatures;
  document.getElementById('serverCount').textContent = t.serverCount;
  document.getElementById('feature1Title').textContent = t.feature1Title;
  document.getElementById('feature1Desc').textContent = t.feature1Desc;
  document.getElementById('feature2Title').textContent = t.feature2Title;
  document.getElementById('feature2Desc').textContent = t.feature2Desc;
  document.getElementById('feature3Title').textContent = t.feature3Title;
  document.getElementById('feature3Desc').textContent = t.feature3Desc;
  document.getElementById('support-server').textContent = t.supportserver;
  document.getElementById('discord-server').textContent = t.discordserver;
  document.getElementById('footerDev').textContent = t.footerDev;
  document.getElementById('footerTeam').textContent = t.footerTeam;
  document.getElementById('footerPolicy').textContent = t.footerPolicy;
  document.getElementById('footerPrivacy').textContent = t.footerPrivacy;
  document.getElementById('footerTerms').textContent = t.footerTerms;
  
  // HTML lang 속성 업데이트
  document.documentElement.lang = lang;
}

// 언어 변경
function changeLanguage(lang) {
  // 선택한 언어를 localStorage에 저장
  localStorage.setItem('preferred_language', lang);
  
  const currentPath = window.location.pathname;
  const basePath = currentPath.replace(/\/(en|ko|ja)/, '');
  const newPath = `/${lang}${basePath}`;
  
  window.location.href = newPath;
}

// 스크롤 함수
function scrollToServer() {
  const el = document.getElementById("server-section");
  const y = el.getBoundingClientRect().top + window.pageYOffset - 150;

  window.scrollTo({
    top: y,
    behavior: "smooth"
  });
}

// 언어 메뉴 토글
function toggleLanguageMenu() {
  const menu = document.getElementById("language-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// 메뉴 외부 클릭시 닫기
document.addEventListener("click", function(e) {
  const langText = document.querySelector(".top-language-text");
  const menu = document.getElementById("language-menu");
  if (!langText.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = "none";
  }
});

// 페이지 로드시 언어 적용
document.addEventListener('DOMContentLoaded', function() {
  const currentLang = getLangFromURL();
  
  // 현재 언어를 localStorage에 저장 (마지막 방문 언어 기록)
  localStorage.setItem('preferred_language', currentLang);
  
  updatePageLanguage(currentLang);
  
  // 로고 링크 설정
  const logoLink = document.getElementById('logoLink');
  if (logoLink) {
    logoLink.href = `/${currentLang}/`;
  }
});




















// 페이지 로드 시 로그인 상태 확인
async function checkLoginStatus() {
  try {
    const response = await fetch('/api/user');
    const data = await response.json();
    
    if (data.loggedIn) {
      updateUIForLoggedIn(data.user);
    } else {
      updateUIForLoggedOut();
    }
  } catch (error) {
    console.error('Error checking login status:', error);
    updateUIForLoggedOut();
  }
}

// 로그인 상태일 때 UI 업데이트
function updateUIForLoggedIn(user) {
  const loginButton = document.getElementById('discord');
  const rightMenu = document.querySelector('.right-menu');
  
  // 로그인 버튼을 사용자 정보로 교체
  const userInfo = document.createElement('div');
  userInfo.className = 'user-info';
  userInfo.innerHTML = `
    <div class="user-dropdown">
      <img src="https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png" 
           alt="Avatar" 
           class="user-avatar"
           onclick="toggleUserMenu()">
      <div id="user-menu" class="user-menu" style="display: none;">
        <div class="user-menu-header">
          <img src="https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png" 
               alt="Avatar" 
               class="user-menu-avatar">
          <div>
            <p class="user-menu-name">${user.username}</p>
            <p class="user-menu-id">#${user.discriminator}</p>
          </div>
        </div>
        <div class="user-menu-divider"></div>
        <a href="/dashboard" class="user-menu-item">Dashboard</a>
        <a href="/logout" class="user-menu-item">Logout</a>
      </div>
    </div>
  `;
  
  loginButton.parentElement.replaceWith(userInfo);
}

// 로그아웃 상태일 때 UI 업데이트
function updateUIForLoggedOut() {
  // 기본 상태 유지
}

// 사용자 메뉴 토글
function toggleUserMenu() {
  const menu = document.getElementById('user-menu');
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

// 메뉴 외부 클릭 시 닫기
document.addEventListener('click', function(event) {
  const userMenu = document.getElementById('user-menu');
  const userAvatar = document.querySelector('.user-avatar');
  
  if (userMenu && !event.target.closest('.user-dropdown')) {
    userMenu.style.display = 'none';
  }
});

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', checkLoginStatus);