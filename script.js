// 캐릭터 데이터
const characters = [
    {
        name: "[ LCB 수감자 ] 이상",
        image: "images/Yi Sang/기본이상.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 남부 세븐 협회 6과 ] 이상",
        image: "images/Yi Sang/세븐이상.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 디에치 협회 ] 이상",
        image: "images/Yi Sang/디에치상.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 어금니 사무소 해결사 ] 이상",
        image: "images/Yi Sang/어금니이상.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 피쿼드호 일등 항해사 ] 이상",
        image: "images/Yi Sang/피쿼드상.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ LCE E.G.O::초롱 ] 이상",
        image: "images/Yi Sang/초롱.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 검계 살수 ] 이상",
        image: "images/Yi Sang/검계살수 이상.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 개화 E.G.O 동백 ] 이상",
        image: "images/Yi Sang/동백 이상.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ W사 3등급 정리요원 ] 이상",
        image: "images/Yi Sang/W상.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 약지 점묘파 스튜던트 ] 이상",
        image: "images/Yi Sang/약상.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 로보토미 E.G.O::엄숙한 애도 ] 이상",
        image: "images/Yi Sang/엄숙한애도이상.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 리우 협회 3과 ] 이상",
        image: "images/Yi Sang/리우이상.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ N사 E.G.O::흉탄 ] 이상",
        image: "images/Yi Sang/N상.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 흑수 - 오 필두 ] 이상",
        image: "images/Yi Sang/말상.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 거미집 검지 아비 ] 이상",
        image: "images/Yi Sang/뤼상.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ LCB 수감자 ] 파우스트",
        image: "images/Faust/기본파우.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ W사 2등급 정리 요원 ] 파우스트",
        image: "images/Faust/w파우.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 살아남은 로보토미 직원 ] 파우스트",
        image: "images/Faust/살아남은파우.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 츠바이 협회 4과 ] 파우스트",
        image: "images/Faust/츠파우.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 워더링하이츠 버틀러 ] 파우스트",
        image: "images/Faust/버파우.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 쥐는 자 ] 파우스트",
        image: "images/Faust/쥐파우.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 남부 세븐 협회 4과 ] 파우스트",
        image: "images/Faust/셰파우.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 로보토미 E.G.O::후회 ] 파우스트",
        image: "images/Faust/후파우.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 검계 살수 ] 파우스트",
        image: "images/Faust/검파우.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 멀티크랙 사무소 대표 ] 파우스트",
        image: "images/Faust/멀파우.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ LCE E.G.O::홍염살 ] 파우스트",
        image: "images/Faust/홍파우.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 흑수 - 묘 필두 ] 파우스트",
        image: "images/Faust/묘파우.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 동부 시 협회 3과 ] 파우스트",
        image: "images/Faust/시파우.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 검지 수행자:【쪽지】] 파우스트",
        image: "images/Faust/검지파우.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 거미집 약지 제자 ] 파우스트",
        image: "images/Faust/약지파우.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ LCB 수감자 ] 돈키호테",
        image: "images/DON QUIXOTE/기본돈키.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 시 협회 5과 부장 ] 돈키호테",
        image: "images/DON QUIXOTE/시돈키.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ N사 중간 망치 ] 돈키호테",
        image: "images/DON QUIXOTE/N돈.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 로보토미 E.G.O::초롱 ] 돈키호테",
        image: "images/DON QUIXOTE/초돈.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 검계 살수 ] 돈키호테",
        image: "images/DON QUIXOTE/검돈.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ W사 3등급 정리 요원 ] 돈키호테",
        image: "images/DON QUIXOTE/w돈.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 로보토미 E.G.O::초롱 ] 돈키호테",
        image: "images/DON QUIXOTE/초돈.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 섕크 협회 5과 부장 ] 돈키호테",
        image: "images/DON QUIXOTE/섕돈.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 중지 작은 아우 ] 돈키호테",
        image: "images/DON QUIXOTE/중돈.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ T사 3등급 징수직 직원 ] 돈키호테",
        image: "images/DON QUIXOTE/T돈.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 라만차랜드 실장 ] 돈키호테",
        image: "images/DON QUIXOTE/실돈.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 동부 섕크 협회 3과 ] 돈키호테",
        image: "images/DON QUIXOTE/동섕돈.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 로보토미 E.G.O::사랑과 증오의 이름으로 ] 돈키호테",
        image: "images/DON QUIXOTE/증여돈.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 흑수 - 미 ] 돈키호테",
        image: "images/DON QUIXOTE/흑수돈키.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 검지 대행자 - 개화 E.G.O::대행 ] 돈키호테",
        image: "images/DON QUIXOTE/검지돈키.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ LCB 수감자 ] 료슈",
        image: "images/Ryoshu/기본료슈.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 세븐 협회 6과 ] 료슈",
        image: "images/Ryoshu/세븐료슈.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ LCCB 대리 ] 료슈",
        image: "images/Ryoshu/LCCB료슈.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 리우 협회 4과 ] 료슈",
        image: "images/Ryoshu/리우료슈.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 20구 유로지비 ] 료슈",
        image: "images/Ryoshu/유료슈.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 흑운회 와카슈 ] 료슈",
        image: "images/Ryoshu/흑슈.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 료.고.파. 주방장 ] 료슈",
        image: "images/Ryoshu/료료슈.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ W사 3등급 정리 요원 ] 료슈",
        image: "images/Ryoshu/w료슈.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 에드가 가문 치프 버틀러 ] 료슈",
        image: "images/Ryoshu/넬슈.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 로보토미 E.G.O::적안 · 참회 ] 료슈",
        image: "images/Ryoshu/로료슈.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 흑수 - 묘 ] 료슈",
        image: "images/Ryoshu/묘슈.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ N사 E.G.O::경멸, 경외 ] 료슈",
        image: "images/Ryoshu/경경슈.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 홍원 방랑무사 ] 료슈",
        image: "images/Ryoshu/홍원료슈.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 로보토미 E.G.O::잔향 · 외로움 ] 료슈",
        image: "images/Ryoshu/잔슈.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ LCB 수감자 ] 뫼르소",
        image: "images/MEURSAULT/기본뫼.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 남부 리우 협회 6과 ] 뫼르소",
        image: "images/MEURSAULT/리우뫼.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 장미스패너 공방 해결사 ] 뫼르소",
        image: "images/MEURSAULT/장미뫼.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 중지 작은 아우 ] 뫼르소",
        image: "images/MEURSAULT/중뫼.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 데드레빗츠 보스 ] 뫼르소",
        image: "images/MEURSAULT/데뫼.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ W사 2등급 정리 요원 ] 뫼르소",
        image: "images/MEURSAULT/w뫼.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ N사 큰 망치 ] 뫼르소",
        image: "images/MEURSAULT/N뫼.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ R사 제 4무리 코뿔소팀 ] 뫼르소",
        image: "images/MEURSAULT/코뫼.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 검계 우두머리 ] 뫼르소",
        image: "images/MEURSAULT/검뫼.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 디에치 협회 4과 부장 ] 뫼르소",
        image: "images/MEURSAULT/디뫼.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 서부 섕크 협회 3과 ] 뫼르소",
        image: "images/MEURSAULT/섕뫼.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 동부 엄지 카포 IIII ] 뫼르소",
        image: "images/MEURSAULT/엄뫼.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 라만차랜드 왕자 ] 뫼르소",
        image: "images/MEURSAULT/뫼세티.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 로보토미 E.G.O::호넷【변조】 ] 뫼르소",
        image: "images/MEURSAULT/호넷뫼.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ LCB 수감자 ] 홍루",
        image: "images/Hong Lu/기본홍루.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 흑운회 와카슈 ] 홍루",
        image: "images/Hong Lu/흑루.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 리우 협회 5과 ] 홍루",
        image: "images/Hong Lu/리홍.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ W사 2등급 정리 요원 ] 홍루",
        image: "images/Hong Lu/W홍.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 갈고리 사무소 해결사 ] 홍루",
        image: "images/Hong Lu/갈루.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 송곳니 사냥 사무소 해결사 ] 홍루",
        image: "images/Hong Lu/송루.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 콩콩이파 두목 ] 홍루",
        image: "images/Hong Lu/콩루.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ K사 3등급 적출직 직원 ] 홍루",
        image: "images/Hong Lu/K루.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 남부 디에치 협회 4과 ] 홍루",
        image: "images/Hong Lu/디루.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 20구 유로지비 ] 홍루",
        image: "images/Hong Lu/유로지비홍루.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 마침표 사무소 대표 ] 홍루",
        image: "images/Hong Lu/마침표 홍루.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ R사 제 4무리 순록팀 ] 홍루",
        image: "images/Hong Lu/R루.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 홍원 군주 ] 홍루",
        image: "images/Hong Lu/군루.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 거미집 약지 아비 ] 홍루",
        image: "images/Hong Lu/약지홍루.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ LCB 수감자 ] 히스클리프",
        image: "images/HEATHCLIFF/시히스.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 남부 시 협회 5과 ] 히스클리프",
        image: "images/HEATHCLIFF/시히스.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ N사 작은 망치 ] 히스클리프",
        image: "images/HEATHCLIFF/N히스.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 세븐 협회 4과 ] 히스클리프",
        image: "images/HEATHCLIFF/세븐히스.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 멀티크랙 사무소 해결사 ] 히스클리프",
        image: "images/HEATHCLIFF/멀티히스.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ R사 제 4무리 토끼팀 ] 히스클리프",
        image: "images/HEATHCLIFF/R히스.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 로보토미 E.G.O 여우비 ] 히스클리프",
        image: "images/HEATHCLIFF/여히스.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 피쿼드호 작살잡이 ] 히스클리프",
        image: "images/HEATHCLIFF/퀴히스.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 남부 외우피 협회 3과 ] 히스클리프",
        image: "images/HEATHCLIFF/외히스.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 와일드헌트 ] 히스클리프",
        image: "images/HEATHCLIFF/와히스.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 마침표 사무소 해결사 ] 히스클리프",
        image: "images/HEATHCLIFF/마침표 히스.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 흑운회 와카슈 ] 히스클리프",
        image: "images/HEATHCLIFF/와카슈히스.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ W사 4등급 정리 요원 - CCA ] 히스클리프",
        image: "images/HEATHCLIFF/W히스.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 흑수 - 유 필두 ] 히스클리프",
        image: "images/HEATHCLIFF/유히스.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ LCB 수감자 ] 이스마엘",
        image: "images/ISMAEL/기본이스.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 남부 시 협회 5과 ] 이스마엘",
        image: "images/ISMAEL/시이스.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ LCCB 대리 ] 이스마엘",
        image: "images/ISMAEL/대리이스.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 로보토미 E.G.O 출렁임 ] 이스마엘",
        image: "images/ISMAEL/출렁임이스.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 에드가 가문 버틀러 ] 이스마엘",
        image: "images/ISMAEL/버이스.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ R사 제 4무리 순록팀 ] 이스마엘",
        image: "images/ISMAEL/순록이스.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 남부 리우 협회 4과 ] 이스마엘",
        image: "images/ISMAEL/리우이스.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 어금니 보트 센터 해결사 ] 이스마엘",
        image: "images/ISMAEL/어금니이스.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 피쿼드호 선장 ] 이스마엘",
        image: "images/ISMAEL/선장이스.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 서부 츠바이 협회 3과 ] 이스마엘",
        image: "images/ISMAEL/츠이스.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 흑운회 부조장 ] 이스마엘",
        image: "images/ISMAEL/흑이스.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 가주 후보 ] 이스마엘",
        image: "images/ISMAEL/시춘마엘.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 정사무소 대표 ] 이스마엘",
        image: "images/ISMAEL/정이스.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 거미집 중지 제자 ] 이스마엘",
        image: "images/ISMAEL/츠이스.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ LCB 수감자 ] 로쟈",
        image: "images/Rodion/기본로쟈.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ LCCB 대리 ] 로쟈",
        image: "images/Rodion/대리로쟈.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ N사 중간 망치 ] 로쟈",
        image: "images/Rodion/N로쟈.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 츠바이 협회 5과 ] 로쟈",
        image: "images/Rodion/츠로쟈.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ T사 2등급 징수직 직원 ] 로쟈",
        image: "images/Rodion/T로쟈.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 흑운회 와카슈 ] 로쟈",
        image: "images/Rodion/흑로쟈.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 장미스패너 공방 대표 ] 로쟈",
        image: "images/Rodion/장미로쟈.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 남부 디에치 협회 4과 ] 로쟈",
        image: "images/Rodion/디로쟈.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 남부 리우 협회 4과 부장 ] 로쟈",
        image: "images/Rodion/리우로쟈.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 북부 제뱌찌 협회 3과 ] 로쟈",
        image: "images/Rodion/제로쟈.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 라만차랜드 공주 ] 로쟈",
        image: "images/Rodion/라만차로쟈.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 흑수 - 사 ] 로쟈",
        image: "images/Rodion/사로쟈.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 로보토미 E.G.O::눈물로 벼려낸 검 ] 로쟈",
        image: "images/Rodion/절쟈.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ R사 제 4무리 순록팀 ] 로쟈",
        image: "images/Rodion/R사로쟈.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ LCB 수감자 ] 싱클레어",
        image: "images/SINCLAIR/기본싱클.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 남부 츠바이 협회 6과 ] 싱클레어",
        image: "images/SINCLAIR/츠싱클.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 마리아치 보스 ] 싱클레어",
        image: "images/SINCLAIR/마리아치싱클.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 로보토미 E.G.O 홍적 ] 싱클레어",
        image: "images/SINCLAIR/홍적싱클.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 어금니 보트 센터 해결사 ] 싱클레어",
        image: "images/SINCLAIR/어금니싱클.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 서부 츠바이 협회 3과 ] 싱클레어",
        image: "images/SINCLAIR/서부츠바이싱클.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 검계 살수 ] 싱클레어",
        image: "images/SINCLAIR/검싱.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 쥐어들 자 ] 싱클레어",
        image: "images/SINCLAIR/쥐싱.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 남부 섕크 협회 4과 부장 ] 싱클레어",
        image: "images/SINCLAIR/섕싱.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 새벽 사무소 해결사 ] 싱클레어",
        image: "images/SINCLAIR/필싱.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 북부 제뱌찌 협회 3과 ] 싱클레어",
        image: "images/SINCLAIR/제싱.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 중지 작은 아우 ] 싱클레어",
        image: "images/SINCLAIR/중싱.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 동부 엄지 솔다토 II ] 싱클레어",
        image: "images/SINCLAIR/엄싱.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 흑수 - 유 ] 싱클레어",
        image: "images/SINCLAIR/닭싱싱.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 거미집 소지 제자 ] 싱클레어",
        image: "images/SINCLAIR/렌싱.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ LCB 수감자 ] 오티스",
        image: "images/OTIS/기본오티스.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 검계 살수 ] 오티스",
        image: "images/OTIS/검티스.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ G사 부장 ] 오티스",
        image: "images/OTIS/G티스.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 섕크 협회 4과 ] 오티스",
        image: "images/OTIS/섕티스.png",
        resistances: {
            slash: "취약",
            pierce: "내성",
            blunt: "보통"
        }
    },
    {
        name: "[ 약지 점묘파 스튜던트 ] 오티스",
        image: "images/OTIS/약티스.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 세븐 협회 6과 부장 ] 오티스",
        image: "images/OTIS/세티스.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 어금니 사무소 해결사 ] 오티스",
        image: "images/OTIS/어금니오티스.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 로보토미 E.G.O::마탄 ] 오티스",
        image: "images/OTIS/마탄오티스.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 워더링하이츠 치프 버틀러 ] 오티스",
        image: "images/OTIS/버틀러오티스.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ W사 3등급 정리 요원 팀장 ] 오티스",
        image: "images/OTIS/W티스.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 라만차랜드 이발사 ] 오티스",
        image: "images/OTIS/혈티스.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 흑수 - 묘 ] 오티스",
        image: "images/OTIS/묘티스.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ T사 3등급 강력징수직 직원 ] 오티스",
        image: "images/OTIS/T티스.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ LCA 우제트 선봉 3팀 팀장 ] 오티스",
        image: "images/OTIS/우티스.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ LCB 수감자 ] 그레고르",
        image: "images/GreGor/기본그렉.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 리우 협회 6과 ] 그레고르",
        image: "images/GreGor/리우그렉.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 료.고.파. 조수 ] 그레고르",
        image: "images/GreGor/요그렉.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 장미스패너 공방 해결사 ] 그레고르",
        image: "images/GreGor/장미그렉.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 흑운회 부조장 ] 그레고르",
        image: "images/GreGor/흑그렉.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ G사 일등대리 ] 그레고르",
        image: "images/GreGor/G그렉.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 남부 츠바이 협회 4과 ] 그레고르",
        image: "images/GreGor/츠그렉.png",
        resistances: {
            slash: "취약",
            pierce: "보통",
            blunt: "내성"
        }
    },
    {
        name: "[ 쌍갈고리 해적단 부선장 ] 그레고르",
        image: "images/GreGor/갈그렉.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 에드가 가문 승계자 ] 그레고르",
        image: "images/GreGor/퐁그렉.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 라만차랜드 신부 ] 그레고르",
        image: "images/GreGor/라만차그렉.png",
        resistances: {
            slash: "보통",
            pierce: "취약",
            blunt: "내성"
        }
    },
    {
        name: "[ 불주먹 사무소 생존자 ] 그레고르",
        image: "images/GreGor/불그렉.png",
        resistances: {
            slash: "내성",
            pierce: "취약",
            blunt: "보통"
        }
    },
    {
        name: "[ 흑수 - 사 ] 그레고르",
        image: "images/GreGor/사그렉.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
    {
        name: "[ 밤의 송곳 카피타노 ] 그레고르",
        image: "images/GreGor/밤그렉.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ 로보토미 E.G.O:: 램프 ] 그레고르",
        image: "images/GreGor/램프그렉.png",
        resistances: {
            slash: "보통",
            pierce: "내성",
            blunt: "취약"
        }
    },
    {
        name: "[ LCE E.G.O::AEDD ] 그레고르",
        image: "images/GreGor/지네그렉.png",
        resistances: {
            slash: "내성",
            pierce: "보통",
            blunt: "취약"
        }
    },
];

// 코드
const recommendBtn = document.getElementById('recommend-btn');
const characterName = document.getElementById('character-name');
const characterImage = document.getElementById('character-image');
const slashResistance = document.getElementById('slash-resistance');
const pierceResistance = document.getElementById('pierce-resistance');
const bluntResistance = document.getElementById('blunt-resistance');

function recommendCharacter() {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const selectedCharacter = characters[randomIndex];

    characterName.textContent = selectedCharacter.name;
    characterImage.src = selectedCharacter.image;
    slashResistance.textContent = selectedCharacter.resistances.slash;
    pierceResistance.textContent = selectedCharacter.resistances.pierce;
    bluntResistance.textContent = selectedCharacter.resistances.blunt;
}

recommendBtn.addEventListener('click', recommendCharacter);
