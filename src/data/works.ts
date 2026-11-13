import { Work } from '../types/literature';
import { WORK_IMAGES } from '../assets/workImages';

export const WORKS: Record<string, Work> = {
  'vo-nhat': {
    slug: 'vo-nhat',
    title: 'Vợ nhặt',
    authorId: 'kim-lan',
    authorName: 'Kim Lân',
    grade: 12,
    genre: 'Truyện ngắn',
    textbook: 'Ngữ văn 12 (Kết nối tri thức / Cánh Diều / Chân trời sáng tạo)',
    year: '1954 (viết lại từ tiểu thuyết xóm ngụ cư năm 1946)',
    origin: 'In trong tập truyện ngắn "Con chó xấu xí" (1962)',
    topic: 'Nạn đói năm Ất Dậu 1945 và số phận người nông dân nghèo trước Cách mạng',
    centralTheme:
      'Ngay trên bờ vực của cái chết và sự hủy diệt của nạn đói, người nông dân Việt Nam vẫn hướng về sự sống, cưu mang đùm bọc nhau bằng tình người ấm áp và niềm tin son sắt vào tương lai.',
    keywords: ['Nạn đói 1945', 'Tình huống truyện éo le', 'Tình mẫu tử', 'Bát cháo cám', 'Lá cờ đỏ', 'Khát vọng sống'],
    hookIntro:
      'Một đám cưới kỳ lạ diễn ra ngay giữa ranh giới sống chết của nạn đói 1945. Không trầu cau, không sính lễ, chỉ bốn bát bánh đúc và vài câu hò đùa, nhưng thắp lên ánh sáng hồi sinh kỳ diệu của nhân phẩm.',
    coverImage: WORK_IMAGES['vo-nhat'],
    bannerImage: WORK_IMAGES['vo-nhat'],
    historicContext: {
      timeframe: 'Tháng 3 năm 1945',
      historicalBackground:
        'Chính sách vơ vét lúa gạo tàn khốc của phát xít Nhật và thực dân Pháp (bắt nhổ lúa trồng đay) dẫn tới thảm họa nạn đói Ất Dậu 1945 làm hơn hai triệu đồng bào miền Bắc chết đói.',
      personalCircumstance:
        'Kim Lân từng trực tiếp trải qua những ngày tháng kinh hoàng của nạn đói tại quê hương Bắc Ninh, thấu hiểu đến tận cùng cảm giác đói khát và vẻ đẹp tâm hồn người nghèo.',
      impactOnWork:
        'Tác phẩm mang tính hiện thực chân xác đến rợn ngợp về bối cảnh tang tóc, nhưng vượt lên trên hết là tinh thần nhân đạo sâu sắc: phát hiện sức sống tiềm tàng của con người trong nghịch cảnh tuyệt cùng.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Phần 1', content: 'Cảnh Tràng dẫn người đàn bà lạ về xóm ngụ cư giữa hoàng hôn đói khát.' },
        { part: 'Phần 2', content: 'Cuộc gặp gỡ giữa người vợ nhặt và bà cụ Tứ trong căn nhà rách nát.' },
        { part: 'Phần 3', content: 'Buổi sáng đầu tiên sau ngày cưới: sự biến chuyển kỳ diệu của không gian và tâm lý.' },
        { part: 'Phần 4', content: 'Bữa cơm ngày đói với nồi cháo cám và viễn cảnh đoàn người phá kho thóc cùng lá cờ đỏ.' },
      ],
      shortSummary:
        'Tràng – anh cu ngụ cư nghèo khó, thô kệch – trong lúc kéo xe bò thóc lên dốc tỉnh đã buông mấy câu hò tầm phơ tầm phào và đãi người đàn bà xa lạ bốn bát bánh đúc. Người đàn bà theo Tràng về làm vợ. Sự xuất hiện của nàng dâu mới khiến xóm ngụ cư ngỡ ngàng, mang lại nỗi mừng tủi cho bà mẹ già và nhóm lên sinh khí mới trong gia đình.',
      detailedSummary:
        'Truyện mở ra với khung cảnh xóm ngụ cư ảm đạm, người chết như ngả rạ, tiếng quạ kêu thê thiết. Tràng dẫn người đàn bà về trong ánh mắt ngạc nhiên, ái ngại lẫn vui mừng của xóm giềng. Bà cụ Tứ trở về nhà, ban đầu ngạc nhiên không hiểu, rồi thấu hiểu, nghẹn ngào chấp nhận nàng dâu với lòng bao dung và tủi phận. Sáng hôm sau, gian nhà được quét dọn sạch sẽ, mọi người bừng lên niềm hy vọng. Bữa cơm đầu tiên đón dâu nghèo đắng ngắt bát cháo cám (chè khoán) nhưng ngập tràn câu chuyện về tương lai nuôi gà. Tiếng trống thúc thuế dồn dập vang lên nhắc nhở thực tại khắc nghiệt, và trong tâm trí Tràng hiện lên hình ảnh đoàn người đói đi phá kho thóc Nhật cùng lá cờ đỏ sao vàng bay phấp phới.',
      mainEvents: [
        'Tràng gặp gỡ và đãi người đàn bà đói 4 bát bánh đúc tại chợ tỉnh.',
        'Tràng dẫn vợ về qua con đường xóm ngụ cư xao xác.',
        'Bà cụ Tứ tiếp nhận con dâu với nước mắt nghẹn ngào và lòng vị tha.',
        'Bữa sáng hôm sau: quang cảnh nhà cửa tinh tươm và bữa tiệc cháo cám.',
        'Tiếng trống thúc thuế vang lên và hình ảnh lá cờ đỏ trong óc Tràng.',
      ],
    },
    mainContentPoints: [
      'Hiện thực đau thương, thê thảm của dân tộc trong nạn đói mùa xuân năm 1945.',
      'Sự rẻ rúng của thân phận con người khi giá trị con người bị hạ xuống như chiếc rơm cọng rác.',
      'Khát vọng hạnh phúc gia đình, tình yêu thương và sự đùm bọc giữa những kiếp người cùng khổ.',
      'Ý thức giác ngộ và con đường giải phóng: hướng về cách mạng để tự cứu lấy mình.',
    ],
    analysisLevels: {
      basic:
        'Tác phẩm kể về việc Tràng "nhặt" được vợ trong nạn đói 1945. Qua đó, Kim Lân ca ngợi tình người, lòng trắc ẩn và khát vọng sống mãnh liệt của người nông dân nghèo ngay bên bờ vực cái chết.',
      detailed:
        'Kim Lân đã xây dựng một tình huống truyện độc đáo, éo le: việc lấy vợ là việc hệ trọng cả đời nhưng lại diễn ra như trò đùa nhặt nhạnh. Giá trị của tác phẩm nằm ở sự đối lập gay gắt giữa bức tranh sự sống và cái chết: cái chết phủ bóng đen rùng rợn, nhưng tình thương và tổ ấm gia đình lại nhóm lên ngọn lửa hồi sinh. Tâm lý của ba nhân vật (Tràng, người vợ nhặt, bà cụ Tứ) được miêu tả biến chuyển tinh tế từ sợ hãi, e thẹn đến ấm áp và hướng thiện.',
      advanced:
        'Từ góc độ triết học nhân sinh, "Vợ nhặt" là bài ca về sự tự khẳng định của bản năng sinh tồn và phẩm giá người. Kim Lân không miêu tả cái đói để khơi gợi lòng thương hại rẻ tiền, mà để đặt bản tính người vào thử thách nghiệt ngã nhất. Ở đó, cái đói làm biến dạng nhân hình và nhân tính tạm thời của người đàn bà ("chao chát, chỏng lỏn"), nhưng tình thương đã lập tức chữa lành sự tha hóa ấy ngay khi chị bước chân vào ngưỡng cửa gia đình. Hình tượng lá cờ đỏ ở cuối truyện không chỉ là tín hiệu cách mạng mang tính xã hội học, mà còn là bước chuyển tất yếu từ tự phát sang tự giác của người nông dân Việt Nam.',
    },
    characters: [
      {
        id: 'trang',
        name: 'Tràng',
        role: 'Nhân vật chính, người đàn ông ngụ cư nghèo khổ',
        appearance: 'Thân hình to bè, lưng to như lưng gấu, quai hàm bạnh ra, hai mắt nhỏ tí gà gà, tính tình hơi gàn dở.',
        situation: 'Dân ngụ cư nghèo khổ, làm nghề đẩy xe bò thuê, sống cùng mẹ già trong căn lều xiêu vẹo.',
        speechAndActions:
          'Nói năng cộc lốc, hay đùa cợt vô thưởng vô phạt: "Muốn ăn cơm trắng mấy giò này / Lại đây mà đẩy xe bò với anh", hào phóng mua bốn bát bánh đúc và mua thêm cái thúng con đựng vài thứ lặt vặt.',
        innerPsychology:
          'Ban đầu chợt nghĩ "thóc gạo này đến cái thân mình cũng chả biết có nuôi nổi không lại còn đèo bòng", nhưng rồi tặc lưỡi "Chậc, kệ!". Sau khi có vợ, trong lòng bỗng dâng lên niềm vui sướng êm dịu, thấy mình gắn bó với gia đình, có trách nhiệm vun vén tổ ấm.',
        fateAndDestiny:
          'Từ một người cô đơn bên lề xã hội, việc "nhặt vợ" đã mở ra cánh cửa ý thức trưởng thành làm trụ cột gia đình và sẵn sàng nhập vào dòng người cách mạng.',
        symbolicMeaning: 'Biểu tượng cho sức sống mộc mạc, bản năng nhân hậu thuần khiết và lòng khao khát hạnh phúc của người lao động bình dị.',
        quote: 'Bây giờ hắn mới thấy hắn nên người, hắn thấy hắn có bổn phận phải lo lắng cho vợ con sau này.',
      },
      {
        id: 'nguoi-vo-nhat',
        name: 'Thị (Người vợ nhặt)',
        role: 'Nhân vật nữ biểu tượng cho số phận trôi dạt trong nạn đói',
        appearance: 'Áo quần tả tơi như tổ đỉa, gầy sọp hẳn đi, khuôn mặt lưỡi cày xám xịt chỉ thấy hai con mắt trũng hoáy.',
        situation: 'Không tên tuổi, không quê hương bản quán, trôi dạt ở chợ tỉnh, đứng trước nguy cơ chết đói từng ngày.',
        speechAndActions:
          'Ban đầu: cong cớn, sưng sỉa, chao chát để giành giật miếng ăn. Khi theo Tràng: ngượng nghịu, chân bước díu vào nhau, ý tứ, khép nép. Sáng hôm sau: quét tước nhà cửa, đi đứng dịu dàng, đúng mực một nàng dâu hiền.',
        innerPsychology:
          'Hành động trơ trẽn ăn bốn bát bánh đúc thực chất là sự quẫy đạp tuyệt vọng trước cái chết. Khi bước vào ngôi nhà dù rách nát, bản tính nữ tính, sự nết na và lòng tự trọng vốn có lập tức trỗi dậy.',
        fateAndDestiny:
          'Được cứu rỗi khỏi vực thẳm cái đói bằng tình thương, trở thành nhân tố mang lại luồng sinh khí ấm áp cho gia đình bà cụ Tứ.',
        symbolicMeaning: 'Biểu tượng cho thân phận con người bị rẻ rúng trong cơn bão táp lịch sử, đồng thời là minh chứng cho sự bất tử của thiên tính nữ.',
        quote: 'Tràng nom thị hôm nay khác lắm, rõ ràng là người đàn bà hiền hậu đúng mực không còn vẻ gì chao chát bướng bỉnh như mấy lần trước.',
      },
      {
        id: 'ba-cu-tu',
        name: 'Bà cụ Tứ',
        role: 'Người mẹ già nhân hậu, biểu tượng tình mẫu tử bao la',
        appearance: 'Dáng người còm nhom, vừa đi vừa lẩm bẩm tính toán, đôi mắt rỉ ghèn cay xót.',
        situation: 'Góa bụa, già yếu, cả đời lầm lũi cùng cực, chỉ biết trông cậy vào đứa con trai ngụ cư.',
        speechAndActions:
          'Lắng nghe câu chuyện của con với nỗi ngổn ngang tâm trạng: ngạc nhiên, bàng hoàng, xót xa, thương cảm. Nói với con dâu bằng lời lẽ dịu dàng, cưu mang: "Ừ, thôi thì các con đã phải duyên phải kiếp với nhau, u cũng mừng lòng...".',
        innerPsychology:
          'Tâm lý dằn vặt: vừa mừng cho con có nơi có chốn, vừa tủi thân vì làm mẹ mà không lo nổi việc cưới xin đàng hoàng, vừa nơm nớp lo sợ: "Người ta có gặp bước khó khăn này người ta mới thèm lấy đến con mình... Biết rằng chúng nó có nuôi nổi nhau sống qua được cơn đói khát này không?".',
        fateAndDestiny:
          'Đại diện cho tầng lớp người già từng trải, dẫu nước mắt lưng tròng vẫn kiên cường động viên con cháu hướng về tương lai tươi sáng.',
        symbolicMeaning: 'Tượng đài bất hủ của lòng bao dung, đức hy sinh và tình mẫu tử muôn đời của người mẹ Việt Nam.',
        quote: 'Chúng mày lấy nhau lúc này, u thương quá... Ai giàu ba họ, ai khó ba đời? Có ra thì rồi con cái chúng mày về sau.',
      },
    ],
    characterRelationships: [
      { from: 'Tràng', to: 'Người vợ nhặt', relation: 'Đãi bánh đúc -> Dắt díu về làm vợ -> Nảy sinh tình nghĩa vợ chồng sâu nặng' },
      { from: 'Bà cụ Tứ', to: 'Người vợ nhặt', relation: 'Ban đầu ngỡ ngàng -> Thấu hiểu xót xa -> Cưu mang bao bọc như con đẻ' },
      { from: 'Bà cụ Tứ', to: 'Tràng', relation: 'Tình mẫu tử ruột thịt -> Vừa thương vừa tủi -> Truyền niềm tin và hy vọng sống' },
    ],
    artisticFeatures: {
      prominentCraft:
        'Nghệ thuật xây dựng tình huống truyện vừa éo le vừa sâu sắc; nghệ thuật miêu tả tâm lý nhân vật tinh tế, chân thực; ngôn ngữ mộc mạc đậm chất Bắc Bộ.',
      language: 'Khẩu ngữ nông thôn tự nhiên, giàu sức gợi cảm, mộc mạc mà đằm thắm trữ tình.',
      tone: 'Trầm buồn, xót xa trước bi kịch nhưng ấm áp, tin cậy và bừng sáng niềm lạc quan ở đoạn kết.',
      structureOrPointOfView: 'Ngôi kể thứ ba khách quan, điểm nhìn linh hoạt đan xen giữa nhân vật Tràng và bà cụ Tứ.',
      imageryOrRhetoric: 'Đối lập gay gắt giữa ánh sáng (ngọn đèn dầu, lá cờ đỏ) và bóng tối (hoàng hôn đói khát, bóng quạ bay qua).',
      distinctiveDevices: [
        { name: 'Nghệ thuật tương phản', description: 'Đặt niềm vui hạnh phúc lứa đôi giữa bối cảnh rùng rợn của thần chết gõ cửa từng nhà.' },
        { name: 'Độc thoại nội tâm', description: 'Diễn tả chân xác những nỗi niềm tủi cực, âu lo và niềm rạo rực thầm kín của từng nhân vật.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-banh-duc',
        detailName: 'Bốn bát bánh đúc và hai hào dầu',
        excerptOrContext: 'Thị cắm đầu ăn một chặp bốn bát bánh đúc chẳng chuyện trò gì; Tràng bỏ hai hào mua chai dầu thắp sáng.',
        directMeaning: 'Thức ăn cứu đói tức thời và vật dụng thắp sáng bình thường trong đời sống thường nhật.',
        symbolicMeaning:
          'Bốn bát bánh đúc phơi bày tận cùng sự bần cùng hóa của con người; hai hào dầu biểu thị cho lòng tự trọng và ước mong thắp sáng hạnh phúc cho tổ ấm mới.',
        thematicConnection:
          'Khẳng định dù trong hoàn cảnh khốn khó nhất, con người không cam chịu sống trong tăm tối mà luôn khao khát ánh sáng và sự đàng hoàng.',
      },
      {
        id: 'chi-tiet-noi-chao-cam',
        detailName: 'Nồi cháo cám (chè khoán)',
        excerptOrContext: 'Bà cụ Tứ bưng ra một nồi khói bốc nghi ngút, đon đả khoe: "Chè khoán đây, ngon đáo để, xóm ta khối nhà còn chả có mà ăn".',
        directMeaning: 'Món ăn đắng chát, nghẹn bứ họng làm từ cám nấu nước, thức ăn gia súc dùng để cứu đói con người.',
        symbolicMeaning:
          'Hiện thân của hiện thực đói nghèo nghiệt ngã, nhưng đồng thời là biểu tượng của tình mẫu tử cảm động: người mẹ muốn xua đi vị đắng cay bằng lời đon đả lạc quan.',
        thematicConnection:
          'Sự chịu đựng kiên cường và tinh thần lạc quan phi thường của con người lao động trước thử thách khắc nghiệt của số phận.',
      },
      {
        id: 'chi-tiet-la-co-do',
        detailName: 'Hình ảnh lá cờ đỏ sao vàng bay phấp phới',
        excerptOrContext: 'Trong óc Tràng vẫn thấy đám người đói ầm ầm kéo nhau đi trên đê Sộp, đằng trước có lá cờ đỏ to lớn bay phấp phới...',
        directMeaning: 'Hình ảnh đoàn biểu tình phá kho thóc Nhật do Việt Minh lãnh đạo.',
        symbolicMeaning:
          'Tín hiệu của bình minh lịch sử, ngọn cờ giải phóng cứu vớt số phận những kiếp người cùng khổ.',
        thematicConnection:
          'Khắc họa bước chuyển mình mang tính tất yếu lịch sử: người nông dân không chịu chết mòn mà tự vùng lên đi theo cách mạng.',
      },
    ],
    literaryValues: {
      realisticValue:
        'Tái hiện chân thực bức tranh thảm khốc của nạn đói năm 1945: người chết như ngả rạ, không khí vẩn lên mùi ẩm mốc của rác rưởi và mùi gây của xác người, tiếng quạ gào thê thiết trên những ngọn cây gạo.',
      humanitarianValue:
        'Tôn vinh vẻ đẹp tình người, tình mẫu tử và khát vọng sống kiên cường. Kim Lân trân trọng phát hiện bản chất lương thiện, nhân hậu của con người ngay khi họ bị đẩy vào đáy cùng của xã hội.',
      artisticValue:
        'Nghệ thuật xây dựng tình huống truyện độc đáo; miêu tả tâm lý bậc thầy; ngôn ngữ kể chuyện dung dị, giàu phong vị Bắc Bộ.',
      message:
        'Tình yêu thương, mái ấm gia đình và niềm tin vào tương lai chính là sức mạnh vĩ đại nhất giúp con người chiến thắng cái chết và sự tuyệt vọng.',
      modernRelevance:
        'Nhắc nhở thế hệ hôm nay về giá trị thiêng liêng của độc lập, sự sẻ chia đồng bào trong hoạn nạn và bài học trân trọng từng khoảnh khắc bình yên của cuộc sống.',
    },
    quick60s: {
      author: 'Kim Lân',
      genre: 'Truyện ngắn hiện thực nhân đạo',
      context: 'Nạn đói Ất Dậu 1945 miền Bắc, hoàn thành 1954.',
      theme: 'Tình người, lòng trắc ẩn và khát vọng sống giữa lằn ranh sinh tử.',
      coreFigureOrCharacter: 'Bộ ba Tràng – Người vợ nhặt – Bà cụ Tứ.',
      mainIdea: 'Dù ở bờ vực cái chết, người nghèo vẫn hướng về sự sống, yêu thương đùm bọc và tin vào ngày mai.',
      keyArt: 'Tình huống truyện éo le; khắc họa tâm lý nhân vật chân thực; kết cấu tương phản độc đáo.',
      goldenKeywords: ['Bốn bát bánh đúc', 'Tình huống nhặt vợ', 'Lòng bao dung mẹ Tứ', 'Nồi cháo cám', 'Lá cờ đỏ sao vàng'],
      takeaway: 'Tình thương và hy vọng là thứ ánh sáng không một nạn đói hay bóng tối nào dập tắt nổi.',
    },
  },

  'song': {
    slug: 'song',
    title: 'Sóng',
    authorId: 'xuan-quynh',
    authorName: 'Xuân Quỳnh',
    grade: 12,
    genre: 'Thơ',
    textbook: 'Ngữ văn 12 (Kết nối tri thức / Cánh Diều / Chân trời sáng tạo)',
    year: '1967 (chuyến đi thực tế tại vùng biển Diêm Điền, Thái Bình)',
    origin: 'Rút từ tập thơ "Hoa dọc chiến hào" (1968)',
    topic: 'Tình yêu lứa đôi và khát vọng vươn tới sự vĩnh hằng',
    centralTheme:
      'Thông qua hình tượng sóng biển trùng điệp, thi phẩm diễn tả các trạng thái tâm lý phức tạp, nỗi nhớ da diết, lòng thủy chung son sắt và khát vọng bất tử hóa tình yêu của trái tim người phụ nữ.',
    keywords: ['Sóng và Em', 'Khát vọng tình yêu', 'Nỗi nhớ cồn cào', 'Lòng thủy chung', 'Biển lớn vĩnh hằng'],
    hookIntro:
      'Được viết bên bờ biển Diêm Điền năm 1967 khi cuộc kháng chiến chống Mỹ đang vào giai đoạn khốc liệt nhất, "Sóng" là bản tình ca bất hủ về vẻ đẹp tâm hồn người phụ nữ: vừa dịu dàng đằm thắm, vừa mãnh liệt khát khao, vượt qua mọi giới hạn của thời gian.',
    coverImage: WORK_IMAGES['song'],
    bannerImage: WORK_IMAGES['song'],
    historicContext: {
      timeframe: 'Năm 1967',
      historicalBackground:
        'Đất nước đang bước vào thời kỳ chiến tranh ác liệt chống đế quốc Mỹ; thế hệ thanh niên hăng hái ra tiền tuyến đối mặt với sinh tử.',
      personalCircumstance:
        'Xuân Quỳnh trải qua nhiều đổ vỡ, trắc trở trong cuộc sống riêng tư, mang theo trái tim giàu âu lo nhưng tràn trề khao khát được yêu thương trọn vẹn.',
      impactOnWork:
        'Bài thơ cất lên như một khúc ca khẳng định giá trị vĩnh cửu của tình cảm lứa đôi chân chính giữa bom đạn chiến tranh, mang chiều sâu triết lý nữ tính độc đáo.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Khổ 1 & 2', content: 'Quy luật tự nhiên của sóng và những trạng thái đối cực trong tâm hồn người phụ nữ khi yêu.' },
        { part: 'Khổ 3 & 4', content: 'Khát khao truy tìm nguồn cội bí ẩn của sóng và tình yêu – sự bất lực đáng yêu của lý trí.' },
        { part: 'Khổ 5, 6 & 7', content: 'Nỗi nhớ nhung da diết cả trong ý thức lẫn tiềm thức và lời hẹn thề thủy chung son sắt.' },
        { part: 'Khổ 8 & 9', content: 'Nỗi âu lo trước sự hữu hạn của đời người và khát vọng hòa tan vào cõi vĩnh hằng.' },
      ],
      shortSummary:
        'Bài thơ xây dựng cấu trúc sóng đôi "Sóng" và "Em". Sóng biển muôn đời gầm gào, khi dữ dội lúc êm ả, cũng giống như người phụ nữ trong tình yêu luôn mang nhiều cung bậc cảm xúc. Từ những băn khoăn về cội nguồn tình ái, bài thơ thăng hoa ở nỗi nhớ nhung vượt qua không gian, thời gian và hướng đến ước nguyện được hiến dâng trọn vẹn cho tình yêu muôn thuở.',
      emotionalArc:
        'Từ những xao xuyến đối cực ban đầu -> băn khoăn trăn trở đi tìm cội nguồn -> bùng nổ nỗi nhớ nhung khôn nguôi -> suy ngẫm triết lý về thời gian -> khát vọng hòa nhập vào biển lớn nhân loại.',
    },
    mainContentPoints: [
      'Vẻ đẹp hiện đại kết hợp truyền thống của người phụ nữ trong tình yêu: chủ động, mãnh liệt nhưng vô cùng thủy chung.',
      'Sự tương đồng kỳ diệu giữa quy luật tự nhiên muôn đời của sóng và quy luật tâm lý của trái tim yêu.',
      'Nỗi khắc khoải đầy âu lo trước sự hữu hạn của đời người và sức mạnh vĩnh cửu của tình yêu chân chính.',
    ],
    analysisLevels: {
      basic:
        'Bài thơ mượn hình tượng sóng biển để nói về tình cảm của người con gái khi yêu: có lúc hờn ghen, giận dỗi nhưng luôn nhớ nhung và chung thủy với người mình yêu.',
      detailed:
        'Cấu trúc bài thơ dựa trên sự đan cài nhịp nhàng của hai hình tượng: Sóng (ngoại giới) và Em (nội giới) – tuy hai mà một. Thể thơ 5 chữ với nhịp điệu dập dồn, biến hóa như hơi thở của biển cả. Điểm nổi bật là người phụ nữ thời hiện đại không còn cam chịu, thụ động mà dám chủ động giã từ sự chật hẹp để đi tìm tình yêu đích thực ("Sông không hiểu nổi mình / Sóng tìm ra tận bể"). Khổ thơ thứ 5 với 6 câu thơ (dài hơn các khổ khác) chính là đỉnh cao của nỗi nhớ, nơi tiềm thức và ý thức hòa làm một.',
      advanced:
        'Xét trên bình diện thi pháp học, "Sóng" của Xuân Quỳnh là một bước đột phá trong lịch sử thơ tình Việt Nam. Nếu như trước đó, thơ tình thường do các nam thi sĩ viết về người phụ nữ với cái nhìn lý tưởng hóa hoặc thụ động, thì ở đây, chính người phụ nữ tự cất lên tiếng nói trữ tình tự ý thức. Xuân Quỳnh phát hiện ra nghịch lý hiện sinh: đời người thì hữu hạn ("Cuộc đời tuy dài thế / Năm tháng vẫn đi qua"), vũ trụ thì vô cùng. Cách giải quyết nghịch lý của nhà thơ không phải là bi quan hay hoài nghi như các nhà Thơ Mới, mà là hành động dấn thân: "Làm sao được tan ra / Thành trăm con sóng nhỏ". Khát vọng tan biến không phải để hủy diệt, mà là để trường tồn cùng năm tháng.',
    },
    poetryAnalysis: [
      {
        id: 'kho-1-2',
        stanzaNumber: 1,
        title: 'Khổ 1 & 2: Trạng thái đối cực và bản tính của sóng',
        excerpt: 'Dữ dội và dịu êm\nỒn ào và lặng lẽ\nSông không hiểu nổi mình\nSóng tìm ra tận bể\n\nÔi con sóng ngày xưa\nVà ngày sau vẫn thế\nNỗi khát vọng tình yêu\nBồi hồi trong ngực trẻ',
        contentSummary:
          'Khám phá những trạng thái đối lập muôn thuở của sóng biển cũng chính là những cung bậc tâm trạng phong phú, bí ẩn của người phụ nữ khi yêu.',
        poeticImages: [
          { image: 'Dữ dội / Dịu êm - Ồn ào / Lặng lẽ', meaning: 'Cặp hình ảnh tương phản diễn tả các thái cực tâm lý phức tạp: khi say đắm nồng nàn, lúc trầm tư kín đáo.' },
          { image: 'Sóng tìm ra tận bể', meaning: 'Hành trình vượt thoát khỏi sự chật hẹp, tù túng (sông) để đến với không gian bao la, khoáng đạt xứng tầm (bể lớn).' },
        ],
        keyWords: [
          { word: 'Không hiểu nổi', nuance: 'Khẳng định sự không tương thích giữa tâm hồn khao khát lớn lao và sự hạn hẹp của môi trường sống cũ.' },
          { word: 'Vẫn thế', nuance: 'Khẳng định quy luật trường tồn, bất biến của tự nhiên và khát vọng yêu thương của muôn thế hệ tuổi trẻ.' },
        ],
        rhetoricalDevices: [
          { device: 'Phép đối lập & tương phản', effect: 'Tạo nên trường cảm xúc đa chiều, phản ánh chân thực bản chất phức tạp nhưng thống nhất của trái tim phụ nữ.' },
          { device: 'Ẩn dụ nhân hóa', effect: 'Biến sóng từ hiện tượng tự nhiên thành sinh thể có linh hồn, biết thao thức và chủ động chọn lựa số phận.' },
        ],
        roleInWork: 'Khơi nguồn cho toàn bộ mạch cảm xúc, đặt nền móng cho sự song hành giữa Sóng và Em.',
        interactiveHotspots: [
          { phrase: 'Dữ dội và dịu êm', note: 'Hai mặt đối lập cùng tồn tại hài hòa trong một bản thể sóng.', technique: 'Phép tương phản' },
          { phrase: 'Sóng tìm ra tận bể', note: 'Khát vọng tự giải phóng, chủ động kiếm tìm chân trời tình yêu đích thực.', technique: 'Nhân hóa hành động' },
        ],
      },
      {
        id: 'kho-3-4',
        stanzaNumber: 2,
        title: 'Khổ 3 & 4: Sự bất lực đáng yêu trước nguồn cội tình ái',
        excerpt: 'Trước muôn trùng sóng bể\nEm nghĩ về anh, em\nEm nghĩ về biển lớn\nTừ nơi nào sóng lên?\n\nSóng bắt đầu từ gió\nGió bắt đầu từ đâu?\nEm cũng không biết nữa\nKhi nào ta yêu nhau',
        contentSummary:
          'Đứng trước biển lớn, nhân vật trữ tình tự vấn về cội nguồn của sóng và tình yêu; câu trả lời bỏ ngỏ thể hiện sự huyền diệu, bất khả giải thích của tình cảm con người.',
        poeticImages: [
          { image: 'Muôn trùng sóng bể', meaning: 'Không gian thiên nhiên bao la gợi niềm suy tư chiêm nghiệm về thân phận và tình yêu.' },
          { image: 'Gió', meaning: 'Hiện tượng tự nhiên vô hình khơi nguồn cho sóng cuộn trào.' },
        ],
        keyWords: [
          { word: 'Em nghĩ', nuance: 'Điệp từ khẳng định nhu cầu tự nhận thức, tự cắt nghĩa bản thân của người con gái.' },
          { word: 'Em cũng không biết nữa', nuance: 'Cái lắc đầu duyên dáng, nữ tính thừa nhận sự bất lực của lý trí trước điều kỳ diệu của con tim.' },
        ],
        rhetoricalDevices: [
          { device: 'Điệp từ "Em nghĩ"', effect: 'Nhấn mạnh sự suy tư sâu sắc, lắng sâu vào nội tâm.' },
          { device: 'Câu hỏi tu từ liên hoàn', effect: 'Tạo mạch suy tưởng tự nhiên từ hiện tượng vật lý sang địa hạt tâm linh màu nhiệm.' },
        ],
        roleInWork: 'Chuyển mạch thơ từ quan sát ngoại cảnh sang đối thoại nội tâm với chính mình.',
        interactiveHotspots: [
          { phrase: 'Gió bắt đầu từ đâu?', note: 'Hỏi tự nhiên để thực chất là muốn chạm vào bí ẩn của tâm hồn.', technique: 'Hỏi tu từ liên hoàn' },
          { phrase: 'Em cũng không biết nữa', note: 'Khoảnh khắc trực cảm ngây thơ nhưng đầy thông thái về tình yêu.', technique: 'Thủ pháp bất khả tri' },
        ],
      },
      {
        id: 'kho-5-6-7',
        stanzaNumber: 3,
        title: 'Khổ 5, 6 & 7: Đỉnh cao nỗi nhớ và lời thề thủy chung',
        excerpt: 'Con sóng dưới lòng sâu\nCon sóng trên mặt nước\nÔi con sóng nhớ bờ\nNgày đêm không ngủ được\nLòng em nhớ đến anh\nCả trong mơ còn thức\n\nDẫu xuôi về phương bắc\nDẫu ngược về phương nam\nNơi nào em cũng nghĩ\nHướng về anh - một phương',
        contentSummary:
          'Khổ thơ 6 câu phá cách diễn tả nỗi nhớ bao trùm cả không gian, thời gian, ý thức và tiềm thức, tiếp nối bằng lời thề son sắt vượt qua mọi trắc trở cuộc đời.',
        poeticImages: [
          { image: 'Dưới lòng sâu / Trên mặt nước', meaning: 'Các tầng không gian của đại dương tượng trưng cho chiều sâu kín đáo và biểu hiện mãnh liệt của tình yêu.' },
          { image: 'Cả trong mơ còn thức', meaning: 'Nỗi nhớ vượt thoát khỏi ranh giới sinh học, thường trực ăn sâu vào tiềm thức.' },
          { image: 'Hướng về anh - một phương', meaning: 'La bàn của trái tim chỉ có một phương duy nhất: phương của người mình yêu.' },
        ],
        keyWords: [
          { word: 'Không ngủ được', nuance: 'Sự trằn trọc, cồn cào day dứt của tình cảm chân thành.' },
          { word: 'Xuôi bắc - Ngược nam', nuance: 'Sự đảo trật tự tự nhiên (thường nói xuôi nam ngược bắc) gợi sự bấp bênh, trắc trở của đường đời.' },
        ],
        rhetoricalDevices: [
          { device: 'Khổ thơ 6 dòng đột biến', effect: 'Phá vỡ quy cách 4 câu để chứa đựng dung lượng cảm xúc dâng trào không kìm nén được.' },
          { device: 'Nghệ thuật đối lập nghịch ngữ', effect: 'Tạo nên một chân lý mới của tình yêu: bất chấp quy luật địa lý, chỉ có phương của người yêu là duy nhất.' },
        ],
        roleInWork: 'Trọng tâm cảm xúc của bài thơ, định vị phẩm chất thủy chung sáng ngời của người phụ nữ Việt Nam.',
        interactiveHotspots: [
          { phrase: 'Cả trong mơ còn thức', note: 'Nỗi nhớ chạm đến cõi vô thức thiêng liêng.', technique: 'Nghịch lý ngôn từ' },
          { phrase: 'Hướng về anh - một phương', note: 'Định nghĩa lại phương hướng vũ trụ bằng phương hướng của trái tim.', technique: 'Sáng tạo địa lý trữ tình' },
        ],
      },
      {
        id: 'kho-8-9',
        stanzaNumber: 4,
        title: 'Khổ 8 & 9: Chiêm nghiệm hữu hạn và khát vọng vĩnh hằng',
        excerpt: 'Cuộc đời tuy dài thế\nNăm tháng vẫn đi qua\nNhư biển kia dẫu rộng\nMây vẫn bay về xa\n\nLàm sao được tan ra\nThành trăm con sóng nhỏ\nGiữa biển lớn tình yêu\nĐể ngàn năm còn vỗ',
        contentSummary:
          'Ý thức sâu sắc về sự ngắn ngủi của kiếp người được giải tỏa bằng ước nguyện hòa tan vào biển lớn tình yêu nhân loại để trường tồn cùng năm tháng.',
        poeticImages: [
          { image: 'Biển kia dẫu rộng / Mây vẫn bay về xa', meaning: 'Sự tương quan giữa cái bao la của tự nhiên và quy luật vận động không ngừng của thời gian.' },
          { image: 'Trăm con sóng nhỏ / Biển lớn tình yêu', meaning: 'Sự hòa nhập giữa cái riêng và cái chung, giữa cá nhân và nhân loại.' },
        ],
        keyWords: [
          { word: 'Tan ra', nuance: 'Khát khao dâng hiến trọn vẹn bản ngã, không phải tiêu biến mà là hóa thân vào sự vĩnh hằng.' },
          { word: 'Ngàn năm còn vỗ', nuance: 'Âm vang bất tử của tình yêu đập vào bờ bãi thời gian.' },
        ],
        rhetoricalDevices: [
          { device: 'Cặp từ hô ứng "tuy... vẫn...", "dẫu... vẫn..."', effect: 'Bộc lộ niềm âu lo hiện sinh nhưng không rơi vào bi quan, buông xuôi.' },
          { device: 'Biểu tượng "Biển lớn tình yêu"', effect: 'Nâng tầm tình yêu đôi lứa thành tình cảm rộng lớn, gắn bó với cuộc đời chung.' },
        ],
        roleInWork: 'Đỉnh cao triết lý nhân sinh của bài thơ, khép lại tác phẩm bằng dư âm ngân vang mãi mãi.',
        interactiveHotspots: [
          { phrase: 'Làm sao được tan ra', note: 'Khát vọng hiến dâng cao cả của người phụ nữ đích thực.', technique: 'Câu cảm thán ước nguyện' },
          { phrase: 'Để ngàn năm còn vỗ', note: 'Sự bất tử hóa tình yêu trong dòng chảy thời gian vô tận.', technique: 'Hình tượng vĩnh cửu' },
        ],
      },
    ],
    artisticFeatures: {
      prominentCraft:
        'Hình tượng sóng đôi độc đáo (Sóng – Em); thể thơ năm chữ giàu nhạc tính với âm hưởng dập dồn của sóng biển; ngôn ngữ trong sáng, giản dị mà giàu chiều sâu triết lý.',
      language: 'Ngôn từ tự nhiên, bình dị, giàu nữ tính, không cầu kỳ trau chuốt nhưng chạm sâu vào lòng người.',
      tone: 'Vừa nồng nàn, sôi nổi, vừa lắng đọng, ưu tư, biến đổi linh hoạt theo nhịp sóng.',
      structureOrPointOfView: 'Kết cấu tương giao giữa ngoại giới và nội tâm, điểm nhìn từ người phụ nữ đang yêu tha thiết.',
      imageryOrRhetoric: 'Sử dụng xuyên suốt hình tượng biểu tượng "Sóng" đại diện cho tình yêu bất diệt.',
      distinctiveDevices: [
        { name: 'Ẩn dụ biểu tượng sóng đôi', description: 'Sóng là sự phân thân của Em, Em soi vào Sóng để nhận diện rõ hơn chính tâm hồn mình.' },
        { name: 'Nhịp điệu thơ 5 chữ biến hóa', description: 'Ngắt nhịp linh hoạt 2/3, 3/2 mô phỏng chính xác nhịp vỗ lúc dồn dập, lúc êm ả của sóng biển.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-kho-tho-6-cau',
        detailName: 'Khổ thơ thứ 5 có 6 dòng thơ',
        excerptOrContext: 'Con sóng dưới lòng sâu / Con sóng trên mặt nước / ... / Lòng em nhớ đến anh / Cả trong mơ còn thức',
        directMeaning: 'Hiện tượng dôi dòng trong một bài thơ mà các khổ khác đều có 4 dòng.',
        symbolicMeaning:
          'Sự bùng vỡ của dung lượng cảm xúc, nhịp đập con tim vượt ra khỏi khuôn khổ chật hẹp để dung nạp nỗi nhớ quá lớn.',
        thematicConnection:
          'Minh chứng rõ nét cho thấy hình thức nghệ thuật hoàn toàn phục tùng và thăng hoa cùng nội dung tình cảm.',
      },
      {
        id: 'chi-tiet-bien-lon-tinh-yeu',
        detailName: 'Biểu tượng "Biển lớn tình yêu"',
        excerptOrContext: 'Làm sao được tan ra / Thành trăm con sóng nhỏ / Giữa biển lớn tình yêu / Để ngàn năm còn vỗ',
        directMeaning: 'Đại dương mênh mông nơi quy tụ muôn triệu con sóng nhỏ.',
        symbolicMeaning:
          'Biểu tượng cho cuộc đời rộng lớn, tình yêu muôn đời của nhân loại vượt qua giới hạn chật hẹp của một kiếp người đơn lẻ.',
        thematicConnection:
          'Nâng tầm tình yêu cá nhân thành giá trị nhân văn phổ quát, gắn liền khát vọng hạnh phúc riêng với sự trường tồn vĩnh cửu.',
      },
    ],
    literaryValues: {
      ideologicalValue:
        'Tuyên ngôn về quyền yêu và cách yêu của người phụ nữ hiện đại: dũng cảm, chủ động, gắn liền tình yêu riêng với cuộc sống rộng lớn.',
      artisticValue:
        'Đạt đến độ chín muồi về sự hòa quyện giữa nhạc điệu, hình tượng và cảm xúc; một trong những bài thơ tình hay nhất của thi ca Việt Nam hiện đại.',
      message:
        'Tình yêu chân chính luôn đi liền với sự chung thủy, lòng vị tha và khát vọng vượt qua rào cản thời gian để chạm tới sự vĩnh hằng.',
      modernRelevance:
        'Cung cấp cho giới trẻ một quan niệm lành mạnh, cao đẹp về tình yêu: không chiếm đoạt vị kỷ mà biết thấu hiểu, sẻ chia và tự hoàn thiện chính mình.',
    },
    quick60s: {
      author: 'Xuân Quỳnh',
      genre: 'Thơ tình yêu hiện đại (thể thơ 5 chữ)',
      context: 'Viết năm 1967 tại biển Diêm Điền (Thái Bình), in trong tập "Hoa dọc chiến hào".',
      theme: 'Tình yêu đôi lứa với nỗi nhớ, lòng thủy chung và khát vọng bất tử hóa tình yêu.',
      coreFigureOrCharacter: 'Hình tượng sóng đôi Sóng và Em.',
      mainIdea: 'Tình yêu của người phụ nữ vừa mãnh liệt, nồng nàn vừa thủy chung, khát khao hòa nhập vào cõi vĩnh hằng.',
      keyArt: 'Hình tượng sóng đôi; thể thơ 5 chữ nhịp dập dồn; ngôn ngữ tự nhiên giàu chất trữ tình triết lý.',
      goldenKeywords: ['Sóng và Em', 'Sông tìm ra bể', 'Cả trong mơ còn thức', 'Hướng về anh một phương', 'Tan vào biển lớn'],
      takeaway: 'Tình yêu chân chính là sức mạnh giúp con người vượt qua mọi hữu hạn của kiếp người để sống mãi trong lòng cuộc đời.',
    },
  },

  'nguoi-lai-do-song-da': {
    slug: 'nguoi-lai-do-song-da',
    title: 'Người lái đò Sông Đà',
    authorId: 'nguyen-tuan',
    authorName: 'Nguyễn Tuân',
    grade: 12,
    genre: 'Tùy bút / Ký',
    textbook: 'Ngữ văn 12 (Kết nối tri thức / Cánh Diều / Chân trời sáng tạo)',
    year: '1960',
    origin: 'Rút từ tập tùy bút "Sông Đà" (1960) – kết quả chuyến đi thực tế Tây Bắc năm 1958',
    topic: 'Thiên nhiên Tây Bắc hùng vĩ và vẻ đẹp người lao động mới trong công cuộc dựng xây đất nước',
    centralTheme:
      'Ngợi ca vẻ đẹp kỳ vĩ, hiểm trở nhưng thơ mộng của thiên nhiên Tây Bắc và tôn vinh chất "vàng mười" – vẻ đẹp tài hoa, dũng cảm, nghệ sĩ của người lao động Việt Nam mới.',
    keywords: ['Sông Đà hung bạo', 'Sông Đà thơ mộng', 'Thạch trận trùng vi', 'Ông lái đò tài hoa', 'Chất vàng mười', 'Chủ nghĩa duy mỹ'],
    hookIntro:
      'Dưới ngòi bút tài hoa, uyên bác của bậc thầy ngôn từ Nguyễn Tuân, Sông Đà không còn là con sông địa lý đơn thuần mà hiện lên như một sinh thể sống động với hai nét tính cách đối lập: hung bạo gầm gào như kẻ thù số một và trữ tình thơ mộng như một cố nhân.',
    coverImage: WORK_IMAGES['nguoi-lai-do-song-da'],
    bannerImage: WORK_IMAGES['nguoi-lai-do-song-da'],
    historicContext: {
      timeframe: 'Năm 1958 – 1960',
      historicalBackground:
        'Miền Bắc bước vào giai đoạn khôi phục kinh tế và xây dựng chủ nghĩa xã hội sau chiến thắng Điện Biên Phủ; phong trào văn nghệ sĩ đi thực tế lên Tây Bắc diễn ra sôi nổi.',
      personalCircumstance:
        'Nguyễn Tuân tìm thấy nguồn cảm hứng mới trong cuộc sống lao động của nhân dân, chuyển từ cái đẹp "vang bóng một thời" sang cái đẹp của hiện thực cách mạng.',
      impactOnWork:
        'Tác phẩm đánh dấu đỉnh cao phong cách nghệ thuật tài hoa, uyên bác của Nguyễn Tuân trong giai đoạn sau năm 1945.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Phần 1', content: 'Lời đề từ định hướng cảm xúc thẩm mỹ và diện mạo hung bạo của Sông Đà nơi thượng nguồn.' },
        { part: 'Phần 2', content: 'Cuộc thủy chiến ác liệt vượt ba trùng vi thạch trận giữa ông lái đò và dòng sông hung dữ.' },
        { part: 'Phần 3', content: 'Vẻ đẹp trữ tình, thơ mộng, đằm thắm của Sông Đà nơi hạ lưu và hình bóng cố nhân.' },
      ],
      shortSummary:
        'Tùy bút khắc họa con sông Đà vừa hung bạo vừa trữ tình. Nơi thượng nguồn, sông Đà có vách đá nghẽn lòng sông, hút nước chết người, ghềnh thác hiểm trở với ba trùng vi thạch trận. Đối diện với thiên nhiên dữ dằn ấy là người lái đò dũng cảm, trí dũng song toàn, thuần phục dòng sông như một người nghệ sĩ tay lái ra hoa. Khi về hạ lưu, sông Đà lại dịu dàng, biến ảo sắc nước theo mùa và êm đềm như một bờ tiền sử.',
      emotionalArc:
        'Từ hồi hộp, kinh ngạc trước sự hung hãn khôn lường -> thán phục đến nghẹt thở trước cuộc đọ sức tài hoa -> thanh thản, say đắm trước vẻ đẹp thơ mộng huyền thoại.',
    },
    mainContentPoints: [
      'Khám phá thiên nhiên sông Đà ở hai phương diện đối lập: Hung bạo dữ dội và Trữ tình thơ mộng.',
      'Khắc họa hình tượng ông lái đò như một vị tướng chỉ huy kiệt xuất, một nghệ sĩ tài hoa trên mặt trận sông nước.',
      'Tôn vinh "chất vàng mười" trong tâm hồn người lao động Tây Bắc bình dị.',
    ],
    analysisLevels: {
      basic:
        'Tác phẩm miêu tả vẻ đẹp hiểm trở và thơ mộng của sông Đà, đồng thời ca ngợi người lái đò dũng cảm, khéo léo vượt qua thác ghềnh hiểm nguy.',
      detailed:
        'Nguyễn Tuân vận dụng tri thức đa ngành (quân sự, võ thuật, điện ảnh, hội họa, địa lý) để biến con sông Đà thành một quái vật sống động với ba trùng vi thạch trận mưu mô xảo quyệt. Hình tượng ông lái đò được khắc họa trong thế đối đầu sinh tử: một bên là thiên nhiên bạo liệt, một bên là con người bé nhỏ nhưng nắm chắc binh pháp của thần sông thần đá, tả xung hữu đột cưỡi lên thác ghềnh như cưỡi hổ. Khi qua khỏi thác ghềnh, sông Đà lại biến hóa thành cố nhân duyên dáng với sắc nước xanh ngọc bích mùa xuân và đỏ lừ mùa thu.',
      advanced:
        'Ở bình diện phong cách học, đây là kiệt tác minh chứng cho quan niệm thẩm mỹ độc đáo của Nguyễn Tuân: tiếp cận sự vật ở phương diện văn hóa thẩm mỹ, tiếp cận con người ở phương diện tài hoa nghệ sĩ. Trước cách mạng, tài hoa chỉ dành cho những bậc tao nhân mặc khách như Huấn Cao. Sau cách mạng, người anh hùng nghệ sĩ của Nguyễn Tuân chính là người lao động bình dị hàng ngày đánh đổi mạng sống để kiếm cớ mưu sinh. Vẻ đẹp của ông đò không phải là cái đẹp trừu tượng mà là vẻ đẹp của trí tuệ, kinh nghiệm và lòng quả cảm được tôi luyện trong thực tiễn.',
    },
    characters: [
      {
        id: 'ong-lai-do',
        name: 'Người lái đò Sông Đà',
        role: 'Nhân vật trung tâm, biểu tượng người lao động mới',
        appearance: 'Tay lêu nghêu như cây sào, chân khuỳnh khuỳnh gò lại như kẹp lấy một cuống lái tưởng tượng, giọng nói ào ào như tiếng nước trước ghềnh, ngực có những vết "củ nâu" sẹo sóng – huân chương lao động vinh dự.',
        situation: 'Tuổi đã ngoài bảy mươi, cả đời xuôi ngược trên dòng sông Đà hiểm trở hơn sáu mươi lần.',
        speechAndActions:
          'Hành động quyết đoán, chuẩn xác từng động tác: ghìm chặt cuống lái, thúc gối vào bụng sóng, phóng thẳng thuyền vào cửa sinh giữa thạch trận bủa vây.',
        innerPsychology:
          'Tâm lý điềm tĩnh, mưu trí, không một chút hoang mang trước cái chết. Sau trận chiến ác liệt, ông cùng bạn chèo ung dung nướng ống cơm lam và bàn về cá anh vũ, xem hiểm nguy như chuyện bình thường.',
        fateAndDestiny:
          'Làm chủ thiên nhiên bằng trí tuệ và sự từng trải, trở thành biểu tượng anh hùng trong lao động thời kỳ mới.',
        symbolicMeaning: 'Hiện thân của "thứ vàng mười đã qua thử lửa", kết tinh vẻ đẹp trí dũng và phẩm chất nghệ sĩ của nhân dân lao động.',
        quote: 'Cưỡi lên thác Sông Đà phải cưỡi đến cùng như là cưỡi hổ.',
      },
      {
        id: 'song-da',
        name: 'Dòng Sông Đà (Hình tượng thiên nhiên nhân hóa)',
        role: 'Nhân vật phản diện hùng vĩ kiêm cố nhân trữ tình',
        appearance: 'Nơi thượng nguồn: vách đá kẹp nghẽn, hút nước như giếng bê tông xoáy tít; nơi hạ lưu: tuôn dài tuôn dài như một áng tóc trữ tình.',
        situation: 'Dòng sông độc đáo của vùng Tây Bắc: "Chúng thủy giai đông tẩu / Đà giang độc bắc lưu" (Mọi con sông đều chảy về đông, chỉ riêng sông Đà chảy về bắc).',
        speechAndActions:
          'Tiếng nước réo như tiếng than vãn, van xin rồi chuyển sang khiêu khích, gầm thét như ngàn trâu mộng bùng cháy trong rừng vầu rừng nứa.',
        innerPsychology:
          'Mang tâm địa hiểm ác, bày binh bố trận với ba trùng vi thạch trận nhằm tiêu diệt thuyền bè; nhưng khi về đồng bằng lại đa tình, nhớ nhung người qua lại.',
        fateAndDestiny:
          'Bị khuất phục hoàn toàn trước bản lĩnh và tài trí của con người lao động dũng cảm.',
        symbolicMeaning: 'Tượng trưng cho sự khắc nghiệt, hùng trĩu của tự nhiên Tây Bắc thách thức ý chí con người.',
      },
    ],
    artisticFeatures: {
      prominentCraft:
        'Vốn ngôn từ phong phú, uyên bác; huy động tri thức nhiều ngành nghệ thuật và khoa học; ngòi bút miêu tả bậc thầy với những so sánh, liên tưởng dị thường táo bạo.',
      language: 'Co duỗi nhịp nhàng, câu văn dài giàu nhạc điệu, giàu tính tạo hình và động tính cao độ.',
      tone: 'Hào hùng, tráng lệ trong các cảnh tả thác ghềnh; êm dịu, đắm say, hoài niệm khi tả cảnh sông nước thanh bình.',
      structureOrPointOfView: 'Tùy bút phóng túng, điểm nhìn di chuyển biến ảo từ trên cao máy bay nhìn xuống, từ lòng thuyền nhìn lên vách đá.',
      imageryOrRhetoric: 'Nhân hóa dòng sông thành kẻ thù số một có tâm địa hiểm độc, rồi lại biến hóa thành cố nhân kiều diễm.',
      distinctiveDevices: [
        { name: 'Tri thức liên ngành', description: 'Ứng dụng thuật ngữ quân sự, võ thuật (thạch trận, trùng vi, cửa sinh, cửa tử, đòn độc) để miêu tả thiên nhiên.' },
        { name: 'Nghệ thuật liên tưởng điện ảnh', description: 'Góc quay lia máy từ dưới đáy hút nước lia ngược lên thành giếng sâu hun hút đầy ấn tượng.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-thach-tran',
        detailName: 'Ba trùng vi thạch trận của Sông Đà',
        excerptOrContext: 'Thạch trận được bố trí tinh vi: vòng 1 mở năm cửa với bốn cửa tử một cửa sinh; vòng 2 tăng thêm nhiều cửa tử, cửa sinh lệch sang bờ hữu; vòng 3 ít cửa hơn nhưng cửa sinh nằm giữa bọn đá hậu vệ.',
        directMeaning: 'Hệ thống bãi đá ngầm và ghềnh thác hiểm trở trên dòng sông.',
        symbolicMeaning:
          'Đại diện cho sức mạnh ghê gớm, mưu mô của tự nhiên hung bạo muốn nuốt chửng con người.',
        thematicConnection:
          'Làm nổi bật chiến công phi thường và tay lái nghệ sĩ của người lái đò khi vượt qua trùng trùng cạm bẫy.',
      },
      {
        id: 'chi-tiet-ang-toc-tru-tinh',
        detailName: 'Hình ảnh sông Đà như "áng tóc trữ tình"',
        excerptOrContext: 'Con Sông Đà tuôn dài tuôn dài như một áng tóc trữ tình, đầu tóc chân tóc ẩn hiện trong mây trời Tây Bắc bung nở hoa ban hoa gạo tháng hai...',
        directMeaning: 'Dáng dòng sông uốn lượn mềm mại nhìn từ trên cao.',
        symbolicMeaning:
          'Biến dòng sông dữ tợn thành một trang tuyệt sắc giai nhân, mang vẻ đẹp thơ mộng, đằm thắm của cội nguồn xứ sở.',
        thematicConnection:
          'Thể hiện trọn vẹn chủ nghĩa duy mỹ của Nguyễn Tuân: cái Đẹp hiện diện ở khắp mọi góc độ của quê hương xứ sở.',
      },
    ],
    literaryValues: {
      ideologicalValue:
        'Tôn vinh cuộc sống mới và con người mới ở vùng Tây Bắc, thể hiện tình yêu thiết tha đối với non sông gấm vóc Tổ quốc.',
      artisticValue:
        'Đạt tới đỉnh cao của thể loại tùy bút tiếng Việt; mẫu mực về việc mở rộng biên độ biểu đạt của ngôn ngữ dân tộc.',
      message:
        'Con người bằng lao động, trí tuệ và lòng dũng cảm hoàn toàn có thể thuần phục thiên nhiên hung dữ để làm chủ cuộc đời mình.',
      modernRelevance:
        'Bài học về sự tận tụy, tinh thần trách nhiệm và tác phong làm việc như một nghệ sĩ trong mọi ngành nghề lao động bình dị.',
    },
    quick60s: {
      author: 'Nguyễn Tuân',
      genre: 'Tùy bút phong cách tài hoa uyên bác',
      context: 'Chuyến đi thực tế Tây Bắc 1958, in trong tập "Sông Đà" (1960).',
      theme: 'Thiên nhiên Tây Bắc kỳ vĩ và vẻ đẹp "vàng mười" của người lao động mới.',
      coreFigureOrCharacter: 'Sông Đà (hung bạo & trữ tình) và Ông lái đò (trí dũng tài hoa).',
      mainIdea: 'Ca ngợi vẻ đẹp non sông đất nước và tôn vinh con người lao động làm chủ thiên nhiên.',
      keyArt: 'Tri thức đa ngành; ngôn từ co duỗi phóng túng; so sánh liên tưởng táo bạo; xây dựng thạch trận kỳ thú.',
      goldenKeywords: ['Thạch trận Sông Đà', 'Áng tóc trữ tình', 'Nước xanh ngọc bích', 'Tay lái ra hoa', 'Thứ vàng mười thử lửa'],
      takeaway: 'Người anh hùng chân chính không ở đâu xa mà chính là những người lao động thầm lặng, tài hoa giữa đời thường.',
    },
  },

  'hon-truong-ba-da-hang-thit': {
    slug: 'hon-truong-ba-da-hang-thit',
    title: 'Hồn Trương Ba, da hàng thịt',
    authorId: 'luu-quang-vu',
    authorName: 'Lưu Quang Vũ',
    grade: 12,
    genre: 'Kịch',
    textbook: 'Ngữ văn 12 (Kết nối tri thức / Cánh Diều / Chân trời sáng tạo)',
    year: '1981 (công diễn năm 1984)',
    origin: 'Dựa trên cốt truyện dân gian cùng tên nhưng mang tư tưởng hiện đại sâu sắc',
    topic: 'Bi kịch sống tha hóa và khát vọng sống toàn vẹn, thanh cao của con người',
    centralTheme:
      'Con người chỉ thực sự hạnh phúc khi được sống là chính mình toàn vẹn giữa thể xác và linh hồn; cảnh báo nguy cơ tha hóa nhân cách khi linh hồn cao khiết phải phụ thuộc vào những đòi hỏi bản năng của thể xác dung tục.',
    keywords: ['Linh hồn và Thể xác', 'Sống là chính mình', 'Bi kịch tha hóa', 'Đế Thích', 'Triết lý nhân sinh'],
    hookIntro:
      'Một linh hồn thanh cao, tao nhã bị giam cầm trong thân xác phàm phu, thô lỗ của anh hàng thịt. Vở kịch mở ra cuộc đối thoại triết học chấn động về nhân phẩm: Ta có thực sự là chính ta khi mỗi ngày phải thỏa hiệp với sự dung tục?',
    coverImage: WORK_IMAGES['hon-truong-ba-da-hang-thit'],
    bannerImage: WORK_IMAGES['hon-truong-ba-da-hang-thit'],
    historicContext: {
      timeframe: 'Thập niên 1980',
      historicalBackground:
        'Giai đoạn xã hội Việt Nam chuẩn bị bước vào thời kỳ Đổi mới (1986); cơ chế quan liêu bao cấp bộc lộ nhiều mâu thuẫn, trì trệ giữa vẻ ngoài đạo đức giả và sự suy đồi nội tâm.',
      personalCircumstance:
        'Lưu Quang Vũ ở độ chín muồi của tài năng kịch tác gia, dũng cảm đem những trăn trở thế sự và triết học nhân sinh lên sân khấu.',
      impactOnWork:
        'Vở kịch gây chấn động dư luận, trở thành hiện tượng văn hóa rực rỡ và được biểu diễn tại nhiều quốc gia trên thế giới.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Cảnh 1 - 6', content: 'Sự nhầm lẫn chết người của quan nhà Trời khiến Trương Ba phải nhập hồn vào xác anh hàng thịt và những rắc rối đời thường.' },
        { part: 'Cảnh 7 (Trọng tâm)', content: 'Cuộc đối thoại giữa Hồn Trương Ba và Xác hàng thịt; xung đột với người thân trong gia đình.' },
        { part: 'Màn kết', content: 'Cuộc đối thoại với Đế Thích, quyết định trả xác chết hẳn và sự bất tử của tâm hồn thanh cao.' },
      ],
      shortSummary:
        'Trương Ba – một ông lão làm vườn thanh cao, giỏi đánh cờ – bị Nam Tào gạch tên chết nhầm. Để sửa sai, Đế Thích cho hồn Trương Ba nhập vào xác anh hàng thịt vừa mới chết. Trớ trêu thay, linh hồn thanh nhã của Trương Ba ngày càng bị lây nhiễm bởi thói ăn tục uống phàm, thèm muốn nhục dục và tính thô lỗ của thân xác. Bị vợ, con dâu và cháu gái xa lánh, Trương Ba đau đớn quyết định thắp hương gọi Đế Thích, từ chối tiếp tục sống giả tạo, chấp nhận cái chết vĩnh viễn để bảo vệ sự trong sạch của tâm hồn.',
      centralConflict:
        'Xung đột gay gắt giữa linh hồn thanh cao (Hồn Trương Ba) và thể xác phàm tục (Xác hàng thịt); xung đột giữa khát vọng sống chân thực với sự thỏa hiệp giả dối của thói quan liêu.',
    },
    mainContentPoints: [
      'Bi kịch sống chắp vá, "bên trong một đằng bên ngoài một nẻo" tàn phá nhân cách con người.',
      'Sự tha hóa âm thầm nhưng tàn khốc khi cái xấu, cái phàm tục lấn át dần những giá trị đạo đức cao đẹp.',
      'Dũng khí đối diện với sự thật và lựa chọn cái chết danh dự hơn là một sự tồn tại vô nghĩa, giả tạo.',
    ],
    analysisLevels: {
      basic:
        'Trương Ba không chấp nhận việc tâm hồn mình bị điều khiển bởi thân xác người khác nên đã xin chết hẳn để giữ gìn phẩm giá và để người thân yêu được yên bình.',
      detailed:
        'Cảnh VII là đỉnh cao kịch tính của vở kịch. Cuộc đối thoại giữa Hồn và Xác phơi bày sự ngụy biện nhưng có lý của thể xác: thể xác không chỉ là vỏ bọc mà nó có sức mạnh ghê gớm lôi kéo, tha hóa linh hồn. Sự cự tuyệt đau đớn từ người vợ, cái Gái và chị con dâu đã đẩy Trương Ba tới tận cùng nỗi cô đơn. Trong cuộc đối thoại với Đế Thích, Trương Ba đập tan quan niệm sống hời hợt "sống thế nào cũng được miễn là còn sống", khẳng định chân lý: "Không thể bên trong một đằng bên ngoài một nẻo được. Tôi muốn được là tôi toàn vẹn".',
      advanced:
        'Vở kịch mang tầm vóc một bi kịch hiện sinh kinh điển. Lưu Quang Vũ đã nâng cốt truyện dân gian thành một ẩn dụ sâu sắc về thời đại. Xác hàng thịt đại diện cho bản năng, cho những nhu cầu vật chất trần tục; Hồn Trương Ba đại diện cho lương tri, lý tưởng và phẩm giá. Sự thỏa hiệp giả tạo giữa Hồn và Xác phản chiếu hiện thực xã hội thời bao cấp: khi người ta buộc phải sống hai mặt để tồn tại. Bằng việc để Trương Ba từ chối nhập vào cu Tị (một đứa trẻ vô tội), tác giả khẳng định lòng nhân đạo cao cả: không thể mượn sự sống của người khác để kéo dài sự tồn tại của mình.',
    },
    characters: [
      {
        id: 'hon-truong-ba',
        name: 'Hồn Trương Ba',
        role: 'Nhân vật bi kịch trung tâm',
        appearance: 'Mang hình dáng vạm vỡ, thô lỗ của anh hàng thịt nhưng cử chỉ, ánh mắt toát lên vẻ khắc khoải, đau đớn của một trí thức nho nhã.',
        situation: 'Linh hồn ông lão gần sáu mươi tuổi, hiền lành, yêu cây cỏ, giỏi cờ tướng, bị ép sống trong thân xác một gã đồ tể ba mươi tuổi.',
        speechAndActions:
          'Dằn vặt, ôm đầu kêu cứu: "Trời ơi! Tôi muốn rời xa cái thân xác này tức khắc!", giằng xé khi thấy bàn tay mình thô bạo tát con, ăn uống nhồm nhoàm.',
        innerPsychology:
          'Cực kỳ đau khổ khi nhận ra mình đang dần biến thành kẻ khác, sợ hãi trước sự tha hóa và nỗi căm ghét của cháu gái.',
        fateAndDestiny:
          'Chấp nhận cái chết thể xác để linh hồn được tự do thanh khiết, hóa thân vào màu xanh của cây cỏ vườn nhà.',
        symbolicMeaning: 'Hiện thân của lương tâm, phẩm giá và khát vọng sống chân thực, thanh cao của con người.',
        quote: 'Tôi muốn được là tôi toàn vẹn! Sống nhờ vào đồ đạc, của cải người khác đã là chuyện không nên, đằng này đến cái thân tôi cũng phải sống nhờ...',
      },
      {
        id: 'xac-hang-thit',
        name: 'Xác hàng thịt',
        role: 'Đối thủ đối thoại của Hồn, đại diện thể xác phàm tục',
        appearance: 'To béo, cục mịch, ánh mắt thèm thuồng đồ nhắm và rượu ngon.',
        situation: 'Đã chết nhưng được làm sống lại nhờ linh hồn Trương Ba trú ngụ.',
        speechAndActions:
          'Giọng điệu mỉa mai, giễu cợt, tự đắc: "Ông không thể tách rời tôi được đâu!", chứng minh sự chi phối của mình qua từng cảm giác thèm ăn, dục vọng.',
        innerPsychology:
          'Đầy sức mạnh bản năng, lý lẽ giảo hoạt vạch trần sự yếu đuối và đạo đức giả của linh hồn khi viện cớ "tâm hồn thanh cao".',
        fateAndDestiny:
          'Bị Hồn Trương Ba từ bỏ hoàn toàn.',
        symbolicMeaning: 'Hiện thân của dục vọng bản năng, sức mạnh vật chất và nguy cơ cám dỗ làm băng hoại đạo đức.',
        quote: 'Tôi là cái hoàn cảnh mà ông buộc phải phục tùng! Tôi là sức mạnh ghê gớm, lắm khi át cả cái linh hồn cao khiết của ông đấy!',
      },
      {
        id: 'de-thich',
        name: 'Đế Thích',
        role: 'Tiên cờ nhà Trời, đại diện cho góc nhìn quyền năng nhưng hời hợt',
        appearance: 'Dáng vẻ thần tiên râu tóc bạc phơ, ung dung tự tại.',
        situation: 'Quý mến tài chơi cờ của Trương Ba nên ban phát cho ông sự sống lại mà không lường trước hậu quả bi kịch trần gian.',
        speechAndActions:
          'Khuyên Trương Ba nên chấp nhận thực tế: "Dưới đất trên trời đều thế cả... Được sống là quý lắm rồi!".',
        innerPsychology:
          'Bất ngờ và kính phục trước dũng khí lựa chọn cái chết của một con người trần gian.',
        fateAndDestiny:
          'Phải thu lại phép thuật và công nhận chân lý nhân tính cao hơn phép màu thần tiên.',
        symbolicMeaning: 'Tượng trưng cho sự can thiệp duy ý chí, quan liêu, xa rời thực tế đời sống.',
      },
    ],
    dramaScenes: [
      {
        id: 'canh-hon-va-xac',
        act: 'Cảnh VII (Trọng tâm)',
        conflict: 'Xung đột giữa khát vọng thanh cao của linh hồn và đòi hỏi bản năng của thể xác.',
        charactersInvolved: ['Hồn Trương Ba', 'Xác hàng thịt'],
        analysis:
          'Cuộc tranh luận nảy lửa phơi bày bi kịch của con người khi bị hoàn cảnh tha hóa. Xác chỉ ra rằng mỗi khi Hồn thỏa hiệp với những thú vui trần tục, Hồn không thể đổ hết lỗi cho Thể xác.',
        philosophicalDepth: 'Cảnh báo về sự tha hóa âm thầm: con người không thể giữ được phẩm giá nếu chỉ biết viện cớ tâm hồn để biện minh cho những hành vi nhơ nhuốc ngoài đời.',
      },
      {
        id: 'canh-nguoi-than',
        act: 'Cảnh VII (Gặp người thân)',
        conflict: 'Sự tha hóa của Trương Ba dẫn tới sự đổ vỡ hạnh phúc gia đình.',
        charactersInvolved: ['Hồn Trương Ba', 'Vợ', 'Cái Gái', 'Con dâu'],
        analysis:
          'Cái Gái không nhận ông nội vì đôi bàn tay vụng về làm gãy chồi non; người vợ đau đớn đòi bỏ đi nhường chồng cho cô hàng thịt; chị con dâu xót xa trước sự biến chất của người cha mẫu mực.',
        philosophicalDepth: 'Nỗi đau lớn nhất của con người không phải là cái chết, mà là sự chối bỏ của những người mình yêu thương nhất.',
      },
      {
        id: 'canh-de-thich-quyet-dinh',
        act: 'Màn kết',
        conflict: 'Khát vọng làm người toàn vẹn đối đầu với sự thỏa hiệp tùy tiện của quyền lực.',
        charactersInvolved: ['Hồn Trương Ba', 'Đế Thích'],
        analysis:
          'Trương Ba dứt khoát từ chối nhập vào xác cu Tị, trả lại sự sống cho đứa trẻ và xin được chết hẳn. Hành động thắp nén nhang xin chết là hành động tự do và cao quý nhất.',
        philosophicalDepth: 'Sự sống chỉ thực sự có ý nghĩa khi con người được là chính mình, hài hòa giữa thể xác và tâm hồn.',
      },
    ],
    artisticFeatures: {
      prominentCraft:
        'Xây dựng xung đột kịch căng thẳng, dồn dập; nghệ thuật đối thoại sắc sảo, giàu tính triết lý sâu xa; kết hợp nhuần nhuyễn giữa yếu tố hiện thực và tưởng tượng huyền ảo.',
      language: 'Khẩu ngữ kịch tự nhiên, biến hóa linh hoạt giữa ngôn ngữ triết lý sâu lắng và ngôn ngữ chợ búa gân guốc.',
      tone: 'Căng thẳng, dằn vặt, bi tráng và kết thúc bằng nốt nhạc thanh thản, lạc quan.',
      structureOrPointOfView: 'Kịch bản 7 cảnh chặt chẽ, cao trào được dồn nén đến đỉnh điểm ở cảnh cuối.',
      imageryOrRhetoric: 'Ẩn dụ biểu tượng về Hồn và Xác, cây vườn, nén nhang, bàn cờ thế sự.',
      distinctiveDevices: [
        { name: 'Đối thoại đa thanh triết học', description: 'Mỗi nhân vật đại diện cho một quan điểm nhân sinh sắc bén tranh biện trực diện với nhau.' },
        { name: 'Nghệ thuật phân thân độc thoại', description: 'Để nhân vật tự phân thân thành Hồn và Xác đứng đối diện tranh luận gay gắt.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-ban-tay-lam-gay-choi-non',
        detailName: 'Bàn tay thô lỗ làm gãy chồi non',
        excerptOrContext: 'Cái Gái khóc thét lên: "Bàn tay ông to bè như cái xẻng, giẫm nát cây sâm quý, bẻ gãy chồi non của ông nội!".',
        directMeaning: 'Hậu quả vụng về của thân xác anh hàng thịt khi làm công việc tỉ mỉ trong vườn.',
        symbolicMeaning:
          'Sự thô bạo của bản năng thể xác phá hủy những mầm sống thanh tao, dịu dàng của tâm hồn và tình thân.',
        thematicConnection:
          'Lời cảnh tỉnh rằng khi ta đánh mất chính mình, ta sẽ vô tình làm tổn thương sâu sắc những người thân yêu nhất.',
      },
      {
        id: 'chi-tiet-qua-le-hoa-than',
        detailName: 'Hình ảnh Trương Ba hòa vào màu xanh cây vườn',
        excerptOrContext: 'Trương Ba hiện về trong làn khói mờ ảo nói với vợ: "Tôi vẫn ở đây, trong màu xanh của cây vườn, trong những quả chín ngọt ngào...".',
        directMeaning: 'Lời từ biệt của linh hồn trước khi tan biến vĩnh viễn.',
        symbolicMeaning:
          'Sự bất tử của cái Đẹp và đạo đức; con người chân chính sau khi chết vẫn sống mãi trong ký ức và tình yêu của nhân gian.',
        thematicConnection:
          'Khẳng định chiến thắng tuyệt đối của phẩm giá con người trước cái chết và sự tha hóa.',
      },
    ],
    literaryValues: {
      ideologicalValue:
        'Tuyên ngôn về quyền sống tự do, trung thực và toàn vẹn của con người; phê phán gay gắt lối sống giả dối, hai mặt trong xã hội.',
      artisticValue:
        'Đỉnh cao của kịch bản văn học Việt Nam hiện đại, kết hợp nhuần nhuyễn giữa kịch tâm lý phương Tây và tinh thần ngụ ngôn truyền thống Á Đông.',
      message:
        'Được sống là quý giá, nhưng được sống đúng là mình, sống trọn vẹn và thanh cao còn quý giá hơn bội phần.',
      modernRelevance:
        'Đặc biệt có ý nghĩa với thời đại số hóa và kinh tế thị trường hôm nay: giữ gìn bản sắc và lương tâm trước những cám dỗ vật chất ngoại lai.',
    },
    quick60s: {
      author: 'Lưu Quang Vũ',
      genre: 'Kịch bản văn học (Kịch triết lý nhân sinh)',
      context: 'Sáng tác năm 1981, công diễn 1984 trước thềm Đổi mới.',
      theme: 'Khát vọng sống là chính mình toàn vẹn giữa thể xác và tâm hồn.',
      coreFigureOrCharacter: 'Hồn Trương Ba, Xác hàng thịt, Đế Thích.',
      mainIdea: 'Không thể bên trong một đằng bên ngoài một nẻo; con người chỉ hạnh phúc khi được sống chân thực, toàn vẹn.',
      keyArt: 'Xung đột kịch gay gắt; lời thoại triết lý sâu sắc; độc thoại phân thân; kết thúc bi tráng nhân văn.',
      goldenKeywords: ['Linh hồn & Thể xác', 'Tôi muốn là tôi toàn vẹn', 'Bẻ gãy chồi non', 'Từ chối xác cu Tị', 'Bất tử trong màu xanh'],
      takeaway: 'Thà chết để giữ trọn nhân phẩm trong sạch còn hơn sống cuộc đời chắp vá, giả tạo và tha hóa.',
    },
  },

  'chi-pheo': {
    slug: 'chi-pheo',
    title: 'Chí Phèo',
    authorId: 'nam-cao',
    authorName: 'Nam Cao',
    grade: 11,
    genre: 'Truyện ngắn',
    textbook: 'Ngữ văn 11 (Kết nối tri thức / Cánh Diều / Chân trời sáng tạo)',
    year: '1941',
    origin: 'Ban đầu có tên "Cái lò gạch cũ", nhà xuất bản Đời Mới đổi thành "Đôi lứa xứng đôi" (1941), sau đổi lại "Chí Phèo"',
    topic: 'Bi kịch bị bần cùng hóa và lưu manh hóa của người nông dân trong xã hội thực dân nửa phong kiến',
    centralTheme:
      'Tố cáo xã hội tàn bạo cướp đi cả nhân hình lẫn nhân tính của người lương thiện; đồng thời khẳng định bản tính lương thiện bất diệt của con người ngay cả khi bị vùi dập xuống đáy cùng bùn nhơ.',
    keywords: ['Làng Vũ Đại', 'Bá Kiến', 'Bát cháo hành', 'Tha hóa nhân hình nhân tính', 'Bi kịch cự tuyệt làm người', 'Tiếng chửi'],
    hookIntro:
      'Mở đầu bằng tiếng chửi kinh điển cất lên trong cơn say khướt, câu chuyện về Chí Phèo là một trong những kiệt tác văn học hiện thực xuất sắc nhất thế kỷ XX: tiếng kêu cứu tuyệt vọng của nhân phẩm bị tước đoạt.',
    coverImage: WORK_IMAGES['chi-pheo'],
    bannerImage: WORK_IMAGES['chi-pheo'],
    historicContext: {
      timeframe: 'Trước Cách mạng tháng Tám 1945',
      historicalBackground:
        'Xã hội nông thôn Bắc Bộ ngột ngạt dưới ách thống trị của thực dân Pháp và giai cấp cường hào ác bá; nông dân bị áp bức bóc lột đến khánh kiệt.',
      personalCircumstance:
        'Nam Cao sống tại làng Đại Hoàng nghèo đói, chứng kiến tận mắt những cảnh đời bi kịch tương tự nguyên mẫu ngoài đời.',
      impactOnWork:
        'Đưa chủ nghĩa hiện thực phê phán Việt Nam lên đỉnh cao mới với chiều sâu khám phá tâm lý học sắc bén.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Mở đầu', content: 'Chí Phèo say rượu bước đi và cất tiếng chửi đời, chửi làng Vũ Đại.' },
        { part: 'Hồi ức', content: 'Tuổi thơ bất hạnh, thời trai trẻ lương thiện bị Bá Kiến đẩy vào tù ngục.' },
        { part: 'Quá trình tha hóa', content: 'Ra tù biến thành con quỷ dữ của làng Vũ Đại, tay sai đắc lực của Bá Kiến.' },
        { part: 'Thức tỉnh', content: 'Gặp Thị Nở, bát cháo hành và niềm hy vọng trở về làm người lương thiện.' },
        { part: 'Bi kịch & Kết thúc', content: 'Bị cự tuyệt, đâm chết Bá Kiến, tự sát và hình ảnh chiếc lò gạch cũ.' },
      ],
      shortSummary:
        'Chí Phèo vốn là đứa trẻ bị bỏ rơi ở lò gạch cũ, lớn lên làm canh điền hiền lành cho nhà Bá Kiến. Vì cơn ghen tuông vô cớ của Bá Kiến, Chí bị đẩy vào nhà tù thực dân. Bảy tám năm sau trở về, Chí bị tha hóa hoàn toàn: mặt mày vằn vọc sẹo, trở thành con quỷ dữ chuyên rạch mặt ăn vạ và đâm thuê chém mướn. Cuộc gặp gỡ định mệnh với Thị Nở bên bờ sông và bát cháo hành nóng hổi đã đánh thức bản tính lương thiện trong Chí. Nhưng định kiến nghiệt ngã của bà cô Thị Nở và xã hội đã cự tuyệt con đường hoàn lương của Chí. Quẫn trí, Chí uống say, vác dao đến đâm chết Bá Kiến rồi tự sát.',
      mainEvents: [
        'Tiếng chửi đầu truyện của Chí Phèo.',
        'Chí Phèo bị Bá Kiến đẩy vào tù khi còn là anh canh điền lương thiện.',
        'Chí ra tù tha hóa nhân hình, nhân tính, thành tay sai cho Bá Kiến.',
        'Đêm trăng vườn chuối gặp Thị Nở và buổi sáng đón nhận bát cháo hành.',
        'Bà cô Thị Nở cấm đoán, cánh cửa hoàn lương sập xuống.',
        'Chí xách dao đâm chết Bá Kiến và tự vẫn trên vũng máu.',
      ],
    },
    mainContentPoints: [
      'Bộ mặt nham hiểm, xảo quyệt của tầng lớp thống trị làng quê phong kiến (tiêu biểu là Bá Kiến).',
      'Quy luật bần cùng hóa và lưu manh hóa nghiệt ngã đẩy người nông dân vào con đường tha hóa.',
      'Sức mạnh cứu rỗi của tình người (bát cháo hành Thị Nở) và vẻ đẹp lương thiện tiềm ẩn.',
      'Bi kịch đau đớn nhất của con người: bi kịch bị cự tuyệt quyền làm người.',
    ],
    analysisLevels: {
      basic:
        'Chí Phèo bị xã hội đẩy vào con đường tội lỗi, sau đó gặp Thị Nở muốn làm lại cuộc đời nhưng bị từ chối nên đã giết kẻ thù và tự kết liễu đời mình.',
      detailed:
        'Tác phẩm kết cấu theo lối phi tuyến tính, mở đầu bằng hiện tại rồi hồi tưởng quá khứ. Tiếng chửi của Chí là một độc thoại nội tâm đặc biệt: Chí chửi để mong manh tìm kiếm một sự giao tiếp với đồng loại, nhưng chỉ nhận lại sự im lặng của ba mươi sáu con chó sủa ran. Bát cháo hành của Thị Nở đại diện cho hương vị đầu tiên của tình người và sự săn sóc mà Chí nhận được trong đời. Bi kịch của Chí đạt đỉnh điểm khi Chí ý thức được bi kịch: trước đây say thì không biết mình là ai, nay tỉnh táo nhận ra thì xã hội không cho lương thiện nữa.',
      advanced:
        'Nam Cao không chỉ miêu tả hiện tượng xã hội mà chạm tới bản chất nhân học triết học. Câu hỏi cuối cùng của Chí: "Ai cho tao lương thiện? Làm sao cho mất được những vết mảnh chai trên mặt này?" là tiếng thét đòi nhân quyền và phẩm giá chấn động lịch sử văn học. Cái chết của Chí Phèo mang tính chất giải thoát nhưng cũng là bản án đanh thép tuyên chiến với một trật tự xã hội phi nhân tính. Hình ảnh "chiếc lò gạch cũ bỏ không" ở cuối tác phẩm là một dự báo nghệ thuật thiên tài: chừng nào xã hội ấy còn tồn tại, sẽ còn những thế hệ "Chí Phèo con" tiếp tục ra đời.',
    },
    characters: [
      {
        id: 'chi-pheo',
        name: 'Chí Phèo',
        role: 'Nhân vật điển hình cho số phận người nông dân tha hóa',
        appearance: 'Cái đầu trọc lốc, răng cạo trắng hớn, cái mặt thì đen mà rất cơng cơng, hai mắt gườm gườm, trên mặt chằng chịt những vết sẹo mảnh chai.',
        situation: 'Mồ côi từ nhỏ, không cha không mẹ, không một tấc đất cắm dùi, bị xã hội ruồng bỏ.',
        speechAndActions:
          'Chửi bới, rạch mặt ăn vạ, đập đầu kêu làng; nhưng khi thức tỉnh thì hiền lành như một đứa trẻ, biết khóc và biết ước mơ mái ấm gia đình.',
        innerPsychology:
          'Diễn biến tâm lý phức tạp: từ sự chai sạn thú tính bước sang sự thức tỉnh ý thức làm người, bàng hoàng trước thời gian trôi qua, rồi rơi vào tuyệt vọng cùng cực.',
        fateAndDestiny:
          'Chết trên ngưỡng cửa trở về làm người lương thiện – bi kịch đau đớn tột cùng.',
        symbolicMeaning: 'Biểu tượng cho nỗi đau nhân phẩm bị chà đạp và khát vọng hoàn lương cháy bỏng.',
        quote: 'Tao muốn làm người lương thiện! Ai cho tao lương thiện?',
      },
      {
        id: 'ba-kien',
        name: 'Bá Kiến',
        role: 'Điển hình cho giai cấp cường hào ác bá nông thôn',
        appearance: 'Cụ bá bốn đời làm lý trưởng, giọng cười Tào Tháo "ha hả", mắt ti hí ranh mãnh.',
        situation: 'Thống trị làng Vũ Đại bằng quyền lực, tiền bạc và sự xảo quyệt "ném đá giấu tay".',
        speechAndActions:
          'Phương châm cai trị: "Nắm đứa có tóc chứ ai nắm đứa trọc đầu", "Mềm nắn rắn buông", dùng lưu manh trị lưu manh.',
        innerPsychology:
          'Luôn nghi ngờ, độc đoán, bản năng ghen tuông ti tiện với anh canh điền trẻ tuổi.',
        fateAndDestiny:
          'Bị chính con dao của kẻ tay sai mình nuôi nấng kết liễu đời.',
        symbolicMeaning: 'Bộ mặt nham hiểm, tàn ác của giai cấp thống trị phong kiến thực dân.',
      },
      {
        id: 'thi-no',
        name: 'Thị Nở',
        role: 'Người phụ nữ mang lại ánh sáng thức tỉnh',
        appearance: 'Xấu ma chê quỷ hờn, mặt ngắn tũn, mũi vừa to vừa ngắn lại nở to bè, ngớ ngẩn, dở hơi.',
        situation: 'Gái ế ngoài ba mươi tuổi, con nhà nghèo có dòng giống mủi hủi, cô độc giữa làng.',
        speechAndActions:
          'Đem lòng thương Chí, nấu cho Chí bát cháo hành giải cảm, quạt cho Chí ngủ.',
        innerPsychology:
          'Tình thương mộc mạc, bản năng nhân đạo không toan tính, nhưng nông nổi nghe theo định kiến của bà cô.',
        symbolicMeaning: 'Biểu tượng của tình thương vô điều kiện có sức mạnh cảm hóa tâm hồn con người.',
      },
    ],
    artisticFeatures: {
      prominentCraft:
        'Nghệ thuật phân tích tâm lý nhân vật bậc thầy; kết cấu truyện phi tuyến tính hiện đại; nghệ thuật trần thuật đa giọng điệu (giọng tác giả, giọng nhân vật, giọng nửa trực tiếp).',
      language: 'Biến hóa phong phú, kết hợp giữa giọng lạnh lùng khách quan và nỗi niềm xót xa tha thiết.',
      tone: 'Bi kịch, châm biếm, cảm thương và đau đớn.',
      structureOrPointOfView: 'Điểm nhìn trần thuật luân chuyển linh hoạt bên trong và bên ngoài nhân vật.',
      imageryOrRhetoric: 'Chi tiết nghệ thuật giàu sức chứa biểu tượng (bát cháo hành, chiếc lò gạch cũ, tiếng chửi).',
      distinctiveDevices: [
        { name: 'Độc thoại nửa trực tiếp', description: 'Xóa nhòa ranh giới giữa lời trần thuật của tác giả và suy nghĩ thầm kín trong đầu nhân vật.' },
        { name: 'Nghệ thuật xây dựng nhân vật điển hình', description: 'Tạo nên hình tượng Chí Phèo và Bá Kiến sống động, độc nhất vô nhị trong văn xuôi Việt Nam.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-bat-chao-hanh',
        detailName: 'Bát cháo hành của Thị Nở',
        excerptOrContext: 'Thị bưng vào một bát cháo hành còn bốc khói nghi ngút, Chí thấy mắt mình ươn ướt và nhận ra hương vị cháo hành thơm ngon kỳ lạ.',
        directMeaning: 'Món ăn dân dã giải cảm nấu vội của người phụ nữ nghèo.',
        symbolicMeaning:
          'Hiện thân của tình yêu thương chân thành, liều thuốc giải độc tâm hồn đưa Chí Phèo từ cõi quỷ trở về cõi người lương thiện.',
        thematicConnection:
          'Khẳng định chỉ có tình thương và lòng nhân đạo mới có thể cứu rỗi nhân phẩm con người khỏi sự tha hóa.',
      },
      {
        id: 'chi-tiet-lo-gach-cu',
        detailName: 'Hình ảnh chiếc lò gạch cũ',
        excerptOrContext: 'Thị Nở nhìn xuống bụng và thoáng nghĩ đến chiếc lò gạch cũ bỏ không, xa nhà cửa và vắng người qua lại...',
        directMeaning: 'Nơi Chí Phèo bị bỏ rơi lúc mới lọt lòng.',
        symbolicMeaning:
          'Vòng luẩn quẩn bi kịch của số phận người nông dân nghèo trong xã hội cũ khi chưa có ánh sáng cách mạng soi đường.',
        thematicConnection:
          'Lời tố cáo đanh thép về tính quy luật tàn khốc của xã hội thực dân phong kiến tước đoạt tương lai con người.',
      },
    ],
    literaryValues: {
      realisticValue:
        'Phản ánh sâu sắc tình cảnh khốn cùng, bế tắc của người nông dân trước 1945 và vạch trần bản chất tàn nhẫn của cường hào phong kiến.',
      humanitarianValue:
        'Phát hiện và khẳng định đốm lửa lương thiện bất diệt trong tâm hồn con người bị tha hóa; đau đớn lên tiếng đòi quyền sống làm người chân chính.',
      artisticValue:
        'Cột mốc chói lọi của văn xuôi hiện thực Việt Nam, nâng nghệ thuật phân tích tâm lý lên tầm cao văn học thế giới.',
      message:
        'Hãy đối xử với con người bằng tình thương và sự thấu cảm; đừng bao giờ đẩy đồng loại vào bước đường cùng tước đoạt nhân phẩm.',
      modernRelevance:
        'Bài học sâu sắc về phòng ngừa sự tha hóa đạo đức, tầm quan trọng của việc hòa nhập xã hội và mở rộng vòng tay đón nhận những người lầm lỡ.',
    },
    quick60s: {
      author: 'Nam Cao',
      genre: 'Truyện ngắn hiện thực phê phán',
      context: 'Năm 1941, nông thôn Việt Nam trước cách mạng.',
      theme: 'Bi kịch bị cự tuyệt quyền làm người của người nông dân lương thiện.',
      coreFigureOrCharacter: 'Chí Phèo – Bá Kiến – Thị Nở.',
      mainIdea: 'Tố cáo xã hội tước đoạt nhân tính con người và ca ngợi sức mạnh thức tỉnh của tình thương.',
      keyArt: 'Phân tích tâm lý bậc thầy; trần thuật đa giọng điệu; xây dựng tính cách điển hình sắc nét.',
      goldenKeywords: ['Làng Vũ Đại', 'Bi kịch tha hóa', 'Bát cháo hành', 'Tao muốn lương thiện', 'Chiếc lò gạch cũ'],
      takeaway: 'Không có gì đau đớn hơn bi kịch muốn sống lương thiện mà xã hội không cho phép.',
    },
  },

  'tay-tien': {
    slug: 'tay-tien',
    title: 'Tây Tiến',
    authorId: 'quang-dung',
    authorName: 'Quang Dũng',
    grade: 12,
    genre: 'Thơ',
    textbook: 'Ngữ văn 12 (Kết nối tri thức / Cánh Diều / Chân trời sáng tạo)',
    year: '1948',
    origin: 'Sáng tác tại làng Phù Lưu Chanh khi tác giả rời xa đơn vị Tây Tiến, in trong tập "Mây đầu ô" (1986)',
    topic: 'Người lính Vệ quốc đoàn và thiên nhiên miền Tây hùng vĩ trong kháng chiến chống Pháp',
    centralTheme:
      'Khắc họa vẻ đẹp hào hùng, hào hoa nhưng thấm đẫm chất bi tráng của đoàn binh Tây Tiến trên nền thiên nhiên miền Tây Tây Bắc hoang vu hiểm trở.',
    keywords: ['Sông Mã', 'Sài Khao mường Lát', 'Đoàn binh không mọc tóc', 'Áo bào thay chiếu', 'Hào hoa bi tráng'],
    hookIntro:
      'Một khúc độc hành tráng lệ bằng thơ viết về những chàng trai Hà Nội xếp bút nghiên lên đường cứu nước. Giữa muôn vàn gian khổ và sốt rét rừng, tâm hồn họ vẫn lấp lánh vẻ hào hoa lãng mạn và tinh thần xả thân vì độc lập.',
    coverImage: WORK_IMAGES['tay-tien'],
    bannerImage: WORK_IMAGES['tay-tien'],
    historicContext: {
      timeframe: 'Năm 1947 – 1948',
      historicalBackground:
        'Giai đoạn đầu kháng chiến chống thực dân Pháp gian nan thiếu thốn trăm bề; trung đoàn Tây Tiến có nhiệm vụ phối hợp với bộ đội Lào bảo vệ biên giới phía Tây.',
      personalCircumstance:
        'Quang Dũng từng là Đại đội trưởng đoàn quân Tây Tiến, cùng đồng đội chia ngọt sẻ bùi giữa núi rừng hiểm trở.',
      impactOnWork:
        'Bài thơ dạt dào cảm xúc hoài niệm chân thực, bi tráng nhưng không hề bi lụy nhờ cảm hứng lãng mạn cách mạng.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Đoạn 1 (14 câu đầu)', content: 'Nỗi nhớ da diết về những chặng đường hành quân gian khổ giữa thiên nhiên miền Tây hùng vĩ hiểm trở.' },
        { part: 'Đoạn 2 (8 câu tiếp)', content: 'Kỷ niệm ấm áp tình quân dân trong đêm liên hoan lửa đuốc và cảnh sông nước chiều sương Châu Mộc thơ mộng.' },
        { part: 'Đoạn 3 (8 câu tiếp)', content: 'Bức tượng đài bất tử về người lính Tây Tiến: hào hùng, bi tráng và hào hoa.' },
        { part: 'Đoạn 4 (4 câu cuối)', content: 'Lời thề gắn bó thiêng liêng và khúc độc hành ngàn đời cùng Sông Mã.' },
      ],
      shortSummary:
        'Bắt đầu bằng tiếng gọi "Sông Mã xa rồi Tây Tiến ơi!", bài thơ đưa người đọc về với những cung đường hành quân Sài Khao sương lấp, Mường Lát hoa về. Nơi đó thiên nhiên gập ghềnh hiểm trở nhưng đượm tình người trong bát xôi nếp Mai Châu. Đêm hội đuốc hoa bừng lên rực rỡ bên những điệu múa nàng e ấp. Bức tượng đài người lính Tây Tiến hiện lên với nét vẽ gân guốc "không mọc tóc, quân xanh màu lá" nhưng tâm hồn vẫn mơ về dáng kiều thơm Hà Nội, sẵn sàng hiến dâng tuổi xanh cho Tổ quốc.',
      emotionalArc:
        'Từ nỗi nhớ bồi hồi dồn dập -> xúc động trước tình quân dân đầm ấm -> trầm lắng bi tráng trước sự hy sinh -> dâng trào lời thề non nước.',
    },
    mainContentPoints: [
      'Thiên nhiên miền Tây vừa hiểm trở dữ dội vừa hoang sơ thơ mộng huyền ảo.',
      'Bức chân dung người lính Tây Tiến: hiện thực gian khổ nhưng tinh thần lãng mạn, hào hoa.',
      'Sự hy sinh bi tráng của những người lính trí thức trẻ tuổi vì nền độc lập tự do.',
    ],
    analysisLevels: {
      basic:
        'Bài thơ thể hiện nỗi nhớ của Quang Dũng về đoàn quân Tây Tiến và vùng đất miền Tây, ca ngợi lòng dũng cảm và tinh thần lạc quan của người lính.',
      detailed:
        'Ngòi bút lãng mạn tài hoa của Quang Dũng phối hợp tài tình thanh điệu (khổ thơ nhiều thanh trắc gợi dốc đứng hiểm trở "Dốc lên khúc khuỷu dốc thăm thẳm", câu toàn thanh bằng gợi sự thanh thản "Nhà ai Pha Luông mưa xa khơi"). Hình ảnh người lính Tây Tiến vượt lên trên cái khắc nghiệt của bệnh tật "không mọc tóc", "da xanh màu lá" bằng khí phách "dữ oai hùm" và giấc mơ lãng mạn thanh tân "Đêm mơ Hà Nội dáng kiều thơm". Cái chết được nâng đỡ bằng cảm hứng tráng sĩ cổ điển "Áo bào thay chiếu anh về đất" và khúc tráng ca bất tận của Sông Mã gầm vang.',
      advanced:
        'Về mặt thi pháp, "Tây Tiến" là sự giao thoa tuyệt mỹ giữa chất hiện thực trần trụi của chiến tranh và chất lãng mạn thời đại mới. Quang Dũng đã vượt qua quan niệm thẩm mỹ thông thường về người lính (thường né tránh mất mát, hy sinh) để nhìn thẳng vào cái chết nhưng miêu tả cái chết ở tầm vóc bi tráng của người tráng sĩ non sông. Từ ngữ Hán Việt cổ kính (biên cương, viễn xứ, chiến trường, áo bào, độc hành) tạo nên không khí sử thi trang trọng, biến sự hy sinh cá nhân thành một tượng đài tâm linh bất tử của thế hệ thanh niên kháng chiến.',
    },
    poetryAnalysis: [
      {
        id: 'doan-1',
        stanzaNumber: 1,
        title: 'Đoạn 1: Cung đường hành quân và thiên nhiên miền Tây',
        excerpt: 'Sông Mã xa rồi Tây Tiến ơi!\nNhớ về rừng núi nhớ chơi vơi\nSài Khao sương lấp đoàn quân mỏi\nMường Lát hoa về trong đêm hơi\n\nDốc lên khúc khuỷu dốc thăm thẳm\nHeo hút cồn mây súng ngửi trời\nNgàn thước lên cao, ngàn thước xuống\nNhà ai Pha Luông mưa xa khơi',
        contentSummary:
          'Nỗi nhớ da diết cất lên thành tiếng gọi tha thiết, mở ra bức tranh thiên nhiên miền Tây hoang dã, hiểm trở nhưng không kém phần thơ mộng.',
        poeticImages: [
          { image: 'Súng ngửi trời', meaning: 'Hình ảnh vừa hiện thực vừa lãng mạn tinh nghịch diễn tả độ cao ngút ngàn của dốc núi chạm tới tầng mây.' },
          { image: 'Mưa xa khơi', meaning: 'Cái nhìn khoáng đạt, thanh thản nhìn qua màn mưa mờ ảo từ trên đỉnh đèo cao.' },
        ],
        keyWords: [
          { word: 'Nhớ chơi vơi', nuance: 'Trạng thái nhớ nhung lơ lửng, mênh mông, khó nắm bắt nhưng phủ kín tâm trí.' },
          { word: 'Khúc khuỷu / Thăm thẳm', nuance: 'Từ láy tượng hình gợi sự gập ghềnh, hiểm trở liên tiếp của núi rừng.' },
        ],
        rhetoricalDevices: [
          { device: 'Phối thanh trắc - bằng đỉnh cao', effect: 'Tạo cảm giác gập ghềnh trắc trở ở ba câu trắc rồi bung tỏa êm ả ở câu toàn thanh bằng.' },
          { device: 'Nhân hóa "Súng ngửi trời"', effect: 'Thể hiện chất hóm hỉnh, tếu táo và tâm hồn lãng mạn của người lính trẻ.' },
        ],
        roleInWork: 'Khắc họa không gian nền tảng hoang vu, hiểm trở để tôn lên vẻ đẹp người lính.',
      },
      {
        id: 'doan-3',
        stanzaNumber: 2,
        title: 'Đoạn 3: Tượng đài bi tráng về người lính Tây Tiến',
        excerpt: 'Tây Tiến đoàn binh không mọc tóc\nQuân xanh màu lá dữ oai hùm\nMắt trừng gửi mộng qua biên giới\nĐêm mơ Hà Nội dáng kiều thơm\n\nRải rác biên cương mồ viễn xứ\nChiến trường đi chẳng tiếc đời xanh\nÁo bào thay chiếu, anh về đất\nSông Mã gầm lên khúc độc hành',
        contentSummary:
          'Khắc họa chân dung người lính với diện mạo khác thường do sốt rét rừng, tâm hồn hào hoa và tinh thần quyết tử cho Tổ quốc quyết sinh.',
        poeticImages: [
          { image: 'Đoàn binh không mọc tóc / Quân xanh màu lá', meaning: 'Chi tiết hiện thực khắc nghiệt về những cơn sốt rét rừng hiểm ác làm rụng tóc, xanh xao da thịt.' },
          { image: 'Dáng kiều thơm', meaning: 'Giấc mơ lãng mạn về vẻ đẹp thanh lịch, yêu kiều của người con gái đất Hà thành.' },
          { image: 'Áo bào thay chiếu', meaning: 'Cách nói trang trọng hóa sự thiếu thốn khi chôn cất đồng đội bằng manh chiếu manh áo thường.' },
        ],
        keyWords: [
          { word: 'Dữ oai hùm', nuance: 'Khí phách hiên ngang, dũng mãnh áp đảo bệnh tật và hiểm nguy.' },
          { word: 'Về đất', nuance: 'Cách nói giảm nói tránh thiêng liêng hóa sự hy sinh như trở về với lòng mẹ đất nước ấm áp.' },
        ],
        rhetoricalDevices: [
          { device: 'Tương phản giữa ngoại hình và tâm hồn', effect: 'Bên ngoài gầy gò ốm yếu nhưng bên trong ngùn ngụt khí thế dũng mãnh và lãng mạn.' },
          { device: 'Nhân hóa dòng Sông Mã', effect: 'Sông Mã như vị mẹ thiên nhiên tấu lên bản tráng ca tiễn đưa linh hồn những người con ưu tú.' },
        ],
        roleInWork: 'Trọng tâm nghệ thuật và tư tưởng của bài thơ, khắc sâu bức tượng đài bất tử.',
      },
    ],
    artisticFeatures: {
      prominentCraft:
        'Bút pháp lãng mạn hòa quyện chất bi tráng; nghệ thuật phối thanh bậc thầy; sử dụng sáng tạo từ ngữ cổ kính xen lẫn khẩu ngữ hiện đại.',
      language: 'Giàu nhạc tính và chất họa, câu từ sắc sảo tạo hình ảnh mạnh mẽ.',
      tone: 'Hào hùng, tráng lệ, tha thiết và bi tráng.',
      structureOrPointOfView: 'Mạch cảm xúc hoài niệm chảy trôi theo không gian và thời gian hành quân.',
      imageryOrRhetoric: 'Sử dụng hệ thống địa danh xa lạ giàu chất thơ (Sài Khao, Mường Lát, Pha Luông, Mường Hịch).',
      distinctiveDevices: [
        { name: 'Nghệ thuật đối lập thanh điệu', description: 'Tạo nhịp điệu gập ghềnh mô phỏng chân xác địa hình hiểm trở của vùng Tây Bắc.' },
        { name: 'Màu sắc tráng sĩ cổ điển', description: 'Khoác chiếc áo bào hào hoa lên sự hy sinh của những người lính cách mạng thời hiện đại.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-dem-mo-ha-noi',
        detailName: 'Chi tiết "Đêm mơ Hà Nội dáng kiều thơm"',
        excerptOrContext: 'Mắt trừng gửi mộng qua biên giới / Đêm mơ Hà Nội dáng kiều thơm',
        directMeaning: 'Giấc mơ của những người lính trẻ về hình bóng bạn gái nơi quê nhà.',
        symbolicMeaning:
          'Biểu hiện của vẻ đẹp tâm hồn hào hoa, lãng mạn; điểm tựa tinh thần tiếp thêm sức mạnh cho người lính chiến đấu.',
        thematicConnection:
          'Khẳng định người lính ra đi không phải vì căm thù mù quáng mà vì tình yêu sâu sắc đối với cuộc sống và quê hương.',
      },
      {
        id: 'chi-tiet-song-ma-gam-len',
        detailName: 'Tiếng gầm độc hành của Sông Mã',
        excerptOrContext: 'Áo bào thay chiếu anh về đất / Sông Mã gầm lên khúc độc hành',
        directMeaning: 'Tiếng thác nước sông Mã gầm thét trong đêm vắng.',
        symbolicMeaning:
          'Bản đại hợp xướng thiêng liêng của non sông đất nước tiễn biệt người anh hùng ngã xuống.',
        thematicConnection:
          'Nâng sự hy sinh cá nhân lên tầm vóc sử thi bất tử của toàn thể dân tộc.',
      },
    ],
    literaryValues: {
      ideologicalValue:
        'Tôn vinh lòng yêu nước nồng nàn và tinh thần xả thân vì nghĩa lớn của thế hệ thanh niên trí thức những ngày đầu toàn quốc kháng chiến.',
      artisticValue:
        'Một trong những kiệt tác xuất sắc nhất của nền thơ ca kháng chiến chống Pháp, đỉnh cao của khuynh hướng thơ lãng mạn cách mạng.',
      message:
        'Tuổi trẻ đẹp nhất là khi được cống hiến cho lý tưởng cao đẹp của dân tộc.',
      modernRelevance:
        'Khơi dậy niềm tự hào dân tộc và lòng biết ơn sâu sắc đối với sự hy sinh của các thế hệ cha anh đi trước.',
    },
    quick60s: {
      author: 'Quang Dũng',
      genre: 'Thơ lãng mạn cách mạng kháng chiến',
      context: 'Năm 1948 tại làng Phù Lưu Chanh sau khi rời trung đoàn Tây Tiến.',
      theme: 'Vẻ đẹp hào hoa, dũng cảm và bi tráng của đoàn binh Tây Tiến giữa núi rừng miền Tây.',
      coreFigureOrCharacter: 'Người lính Tây Tiến (hào hùng, hào hoa, bi tráng).',
      mainIdea: 'Bức tượng đài bất tử về người lính Vệ quốc đoàn xếp bút nghiên lên đường cứu nước.',
      keyArt: 'Bút pháp lãng mạn bi tráng; nghệ thuật phối thanh đỉnh cao; ngôn ngữ giàu chất tạo hình.',
      goldenKeywords: ['Sông Mã xa rồi', 'Súng ngửi trời', 'Không mọc tóc', 'Dáng kiều thơm', 'Áo bào thay chiếu'],
      takeaway: 'Chất bi tráng làm nên vẻ đẹp bất tử của những chàng trai hy sinh tuổi xanh cho độc lập non sông.',
    },
  },

  'binh-ngo-dai-cao': {
    slug: 'binh-ngo-dai-cao',
    title: 'Bình Ngô đại cáo',
    authorId: 'nguyen-trai',
    authorName: 'Nguyễn Trãi',
    grade: 10,
    genre: 'Văn chính luận',
    textbook: 'Ngữ văn 10 (Kết nối tri thức / Cánh Diều / Chân trời sáng tạo)',
    year: '1428',
    origin: 'Do Nguyễn Trãi thừa lệnh Lê Lợi soạn thảo vào mùa xuân năm Mậu Thân 1428 sau khi dẹp tan giặc Minh',
    topic: 'Khúc tráng ca toàn thắng của cuộc khởi nghĩa Lam Sơn và bản tuyên ngôn độc lập vĩ đại',
    centralTheme:
      'Tuyên ngôn chủ quyền thiêng liêng của dân tộc Đại Việt, nêu cao tư tưởng nhân nghĩa vì dân trừ bạo, vạch trần tội ác giặc Minh và ca ngợi sức mạnh chính nghĩa của nhân dân.',
    keywords: ['Bản Tuyên ngôn độc lập thứ hai', 'Tư tưởng nhân nghĩa', 'Tội ác giặc Minh', 'Khởi nghĩa Lam Sơn', 'Thiên cổ hùng văn'],
    hookIntro:
      'Được mệnh danh là "thiên cổ hùng văn" – áng văn kiệt tác ngàn đời không bao giờ tắt thở. Không chỉ là bản tổng kết hào hùng của mười năm khởi nghĩa Lam Sơn gian khổ, áng văn còn là cột mốc khẳng định ý chí độc lập ngàn năm của giọt máu Lạc Hồng.',
    coverImage: WORK_IMAGES['binh-ngo-dai-cao'],
    bannerImage: WORK_IMAGES['binh-ngo-dai-cao'],
    historicContext: {
      timeframe: 'Tháng 12 năm Đinh Mùi (đầu 1428)',
      historicalBackground:
        'Sau 10 năm nếm mật nằm gai (1418 – 1427), nghĩa quân Lam Sơn dưới sự lãnh đạo của Lê Lợi đã đánh tan 15 vạn viện binh giặc Minh tại Chi Lăng – Xương Giang, buộc Vương Thông phải giảng hòa rút quân về nước.',
      personalCircumstance:
        'Nguyễn Trãi – linh hồn tư tưởng của cuộc khởi nghĩa – thay lời vua viết bản tuyên cáo trọng đại bố cáo với toàn thể thiên hạ.',
      impactOnWork:
        'Tác phẩm kết tinh đỉnh cao tư tưởng nhân nghĩa, tài năng hùng biện chính luận và niềm tự hào dân tộc Đại Việt thế kỷ XV.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Đoạn 1', content: 'Khẳng định tư tưởng nhân nghĩa và chân lý độc lập chủ quyền thiêng liêng của dân tộc Đại Việt.' },
        { part: 'Đoạn 2', content: 'Vạch trần tội ác man rợ ngút trời của giặc Minh xâm lược đối với nhân dân Đại Việt.' },
        { part: 'Đoạn 3', content: 'Tái hiện quá trình khởi nghĩa Lam Sơn từ những ngày đầu gian khó đến các chiến dịch đại thắng vang dội.' },
        { part: 'Đoạn 4', content: 'Tuyên bố nền độc lập thái bình vĩnh viễn và bài học lịch sử cho muôn đời con cháu.' },
      ],
      shortSummary:
        'Mở đầu bằng chân lý nhân nghĩa sáng ngời: "Việc nhân nghĩa cốt ở yên dân / Quân điếu phạt trước lo trừ bạo", tác giả khẳng định chủ quyền độc lập của Đại Việt dựa trên văn hiến lâu đời, cương thổ phân định, phong tục riêng biệt và truyền thống anh hùng hào kiệt sánh vai với các triều đại phương Bắc. Tiếp đó, tác phẩm kết án tội ác chất chồng của giặc Minh: "Độc ác thay, trúc Nam Sơn không ghi hết tội / Dơ bẩn thay, nước Đông Hải không rửa sạch mùi". Phần trung tâm tái hiện sinh động khí thế bừng bừng của cuộc khởi nghĩa Lam Sơn từ thuở "cơm ăn chẳng đội, quân thiếu nghìn người" cho đến khi đánh tan quân viện binh ở Tốt Động – Chúc Động và Chi Lăng. Cuối cùng, áng văn tuyên cáo mở ra kỷ nguyên thái bình muôn thuở.',
    },
    mainContentPoints: [
      'Tư tưởng nhân nghĩa tiến bộ: Nhân nghĩa gắn liền với yên dân và chống giặc ngoại xâm bảo vệ đất nước.',
      'Bản tuyên ngôn chủ quyền toàn diện, sâu sắc bậc nhất lịch sử trung đại.',
      'Sức mạnh vô địch của chiến tranh nhân dân toàn dân toàn diện, lấy yếu thắng mạnh.',
      'Tinh thần hòa hiếu nhân đạo mở đường sống cho kẻ thù bại trận để chấm dứt chiến tranh.',
    ],
    analysisLevels: {
      basic:
        'Bình Ngô đại cáo là bản tuyên ngôn độc lập thông báo thắng lợi của cuộc khởi nghĩa Lam Sơn, khẳng định nước Đại Việt có độc lập chủ quyền và ca ngợi tinh thần yêu nước chống giặc.',
      detailed:
        'Tác phẩm vận dụng triệt để thể văn biền ngẫu với các câu đối sóng đôi hào hùng. Trong đoạn 1, khái niệm quốc gia dân tộc được định nghĩa toàn diện với 5 yếu tố: nền văn hiến, bờ cõi lãnh thổ, phong tục tập quán, các triều đại độc lập song song và lịch sử chống xâm lăng anh dũng. Đoạn 2 dùng hình ảnh cực tả để tố cáo tội ác tày trời của giặc Minh ("nướng dân đen", "vùi con đỏ"). Đoạn 3 tái hiện trận chiến với nhịp điệu dồn dập như bão tố, khắc họa sự thất bại nhục nhã của tướng giặc đối lập với lòng nhân đạo chu cấp ngựa xe cho giặc rút quân của nghĩa quân Lam Sơn.',
      advanced:
        'Đỉnh cao triết học của "Bình Ngô đại cáo" nằm ở chỗ Nguyễn Trãi đã nâng cấp tư tưởng "Nhân nghĩa" của Nho giáo từ một chuẩn mực đạo đức cá nhân thành một học thuyết chính trị quân sự tiến bộ của dân tộc: Nhân nghĩa là thương dân, bảo vệ cuộc sống của nhân dân; do đó đánh giặc xâm lược là hành vi nhân nghĩa cao nhất. Đây là tư tưởng vượt thời đại, đặt nhân dân lên vị trí trung tâm của lịch sử ("Lấy chí nhân để thay cường bạo / Đem đại nghĩa để thắng hung tàn").',
    },
    argumentativePoints: [
      {
        pointNumber: 1,
        claim: 'Việc nhân nghĩa cốt ở yên dân và nền độc lập của Đại Việt là chân lý bất diệt.',
        reasoning: 'Nước Đại Việt có nền văn hiến lâu đời, cương thổ rõ ràng, phong tục tập quán riêng, lịch sử hào hùng sánh vai cùng Hán, Đường, Tống, Nguyên.',
        evidence: 'Lưu Cung tham công nên thất bại, Triệu Tiết thích lớn phải tiêu vong, Toa Đô bị bắt, Ô Mã bị giết.',
        rhetoricalArt: 'Lập luận chặt chẽ bằng văn biền ngẫu đăng đối, giọng điệu đanh thép, dẫn chứng lịch sử xác thực không thể chối cãi.',
      },
      {
        pointNumber: 2,
        claim: 'Giặc Minh xâm lược là phi nghĩa, tội ác tày trời của chúng không thể dung tha.',
        reasoning: 'Nhân cơ hội nhà Hồ suy yếu, mượn cớ phù Trần diệt Hồ để cướp bóc đất nước ta, bóc lột nhân dân đến tận xương tủy.',
        evidence: 'Nướng dân đen trên ngọn lửa hung tàn, vùi con đỏ xuống dưới hầm tai vạ; lột da, róc xương, mò ngọc, đãi vàng.',
        rhetoricalArt: 'Hình ảnh phóng đại biểu tượng cực tả ("trúc Nam Sơn không ghi hết tội, nước Đông Hải không rửa sạch mùi"), gợi nỗi căm phẫn thấu trời xanh.',
      },
      {
        pointNumber: 3,
        claim: 'Cuộc khởi nghĩa Lam Sơn tất thắng nhờ đường lối nhân nghĩa và tinh thần đoàn kết toàn dân.',
        reasoning: 'Tướng sĩ một lòng phụ tử, hòa nước sông chén rượu ngọt ngào, lấy đại nghĩa thắng hung tàn.',
        evidence: 'Các chiến dịch vang dội: Bồ Đằng sấm vang chớp giật, Trà Lân trúc chẻ tro bay, Chi Lăng chém Liễu Thăng, Mã Yên giết Lương Minh.',
        rhetoricalArt: 'Nhịp điệu dồn dập, so sánh phóng đại vũ bão, tái hiện khí thế ngất trời của đoàn quân chính nghĩa.',
      },
    ],
    artisticFeatures: {
      prominentCraft:
        'Nghệ thuật chính luận mẫu mực bậc thầy; kết hợp nhuần nhuyễn cảm hứng chính luận sắc bén với cảm hứng sử thi lãng mạn dạt dào; thể văn biền ngẫu nhịp nhàng, biến hóa.',
      language: 'Hùng hồn, đanh thép, giàu hình tượng và cảm xúc mãnh liệt.',
      tone: 'Tự hào, trang nghiêm ở mở đầu; căm phẫn nghẹn ngào ở đoạn kết án; sục sôi bão táp ở đoạn tả trận; thanh thản rạng rỡ ở kết thúc.',
      structureOrPointOfView: 'Bố cục 4 phần lô-gíc chặt chẽ không một kẽ hở lập luận.',
      imageryOrRhetoric: 'Các hình tượng đối lập vĩ mô mang tầm vóc vũ trụ (Nam Sơn, Đông Hải, sấm vang chớp giật, gươm mài đá núi).',
      distinctiveDevices: [
        { name: 'Nghệ thuật biền ngẫu đăng đối', description: 'Các vế câu đối nhau chan chát tạo nên sức nặng hùng biện vô song.' },
        { name: 'Hình ảnh cực tả và phóng đại sử thi', description: 'Nâng quy mô trận đánh lên tầm vóc trời đất đổi màu để ca ngợi chiến thắng vĩ đại.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-truc-nam-son',
        detailName: 'Hình tượng trúc Nam Sơn và nước Đông Hải',
        excerptOrContext: 'Độc ác thay, trúc Nam Sơn không ghi hết tội / Dơ bẩn thay, nước Đông Hải không rửa sạch mùi',
        directMeaning: 'Rừng trúc núi Nam Sơn nhiều vô kể dùng làm thẻ tre viết chữ; biển Đông bao la vô tận.',
        symbolicMeaning:
          'Lấy cái vô tận của tự nhiên để đo đếm tội ác khôn xiết của kẻ thù xâm lược.',
        thematicConnection:
          'Khắc sâu nỗi căm hờn ngút trời và củng cố tính chính nghĩa tuyệt đối của cuộc khởi nghĩa đánh đuổi quân Minh.',
      },
      {
        id: 'chi-tiet-hoa-nuoc-song',
        detailName: 'Hình ảnh "Hòa nước sông chén rượu ngọt ngào"',
        excerptOrContext: 'Tướng sĩ một lòng phụ tử / Hòa nước sông chén rượu ngọt ngào',
        directMeaning: 'Điển tích tướng soái đổ chén rượu được ban xuống sông để cùng ba quân uống chung.',
        symbolicMeaning:
          'Tinh thần đoàn kết gắn bó keo sơn, coi tướng sĩ như con đẻ của chủ soái Lê Lợi.',
        thematicConnection:
          'Chỉ ra cội nguồn sức mạnh bách chiến bách thắng của cuộc khởi nghĩa chính là sự đồng lòng của toàn thể nhân dân.',
      },
    ],
    literaryValues: {
      ideologicalValue:
        'Khẳng định quyền tự quyết thiêng liêng của dân tộc; đặt nền móng lý luận cho chủ nghĩa yêu nước và nhân đạo Đại Việt.',
      artisticValue:
        'Đỉnh cao chói lọi của thể cáo và văn học chính luận trung đại Việt Nam, bản hùng ca bất hủ có giá trị muôn đời.',
      message:
        'Đất nước vững bền nhờ lòng dân và đạo lý nhân nghĩa; không một thế lực bạo tàn nào có thể khuất phục được một dân tộc có văn hiến và tinh thần tự chủ.',
      modernRelevance:
        'Bài học trường tồn về bảo vệ chủ quyền biên cương lãnh thổ và tư tưởng "lấy dân làm gốc" trong mọi chiến lược dựng xây đất nước.',
    },
    quick60s: {
      author: 'Nguyễn Trãi',
      genre: 'Văn chính luận trung đại (Thể Cáo)',
      context: 'Mùa xuân 1428 sau chiến thắng khởi nghĩa Lam Sơn lẫy lừng.',
      theme: 'Tuyên ngôn độc lập, khẳng định chủ quyền dân tộc và ca ngợi tư tưởng nhân nghĩa vì dân.',
      coreFigureOrCharacter: 'Nhân dân Đại Việt, nghĩa quân Lam Sơn, chủ soái Lê Lợi.',
      mainIdea: 'Khẳng định chủ quyền thiêng liêng, kết án tội ác giặc Minh và tuyên cáo nền độc lập thái bình.',
      keyArt: 'Lập luận sắc bén; văn biền ngẫu đăng đối hùng tráng; kết hợp nhuần nhuyễn cảm hứng chính luận và thi ca.',
      goldenKeywords: ['Việc nhân nghĩa cốt ở yên dân', 'Trúc Nam Sơn ghi tội', 'Hòa nước sông chén rượu', 'Chi Lăng Xương Giang', 'Bản tuyên ngôn thứ hai'],
      takeaway: 'Đại nghĩa và chí nhân là sức mạnh tối thượng giúp một dân tộc nhỏ bé đánh tan mọi kẻ thù bạo tàn.',
    },
  },

  'trao-duyen': {
    slug: 'trao-duyen',
    title: 'Trao duyên (Trích Truyện Kiều)',
    authorId: 'nguyen-du',
    authorName: 'Nguyễn Du',
    grade: 10,
    genre: 'Truyện thơ Nôm',
    textbook: 'Ngữ văn 10 (Kết nối tri thức / Cánh Diều / Chân trời sáng tạo)',
    year: 'Đầu thế kỷ XIX (khoảng 1805 – 1809)',
    origin: 'Trích từ câu 723 đến câu 756 trong kiệt tác Đoạn trường tân thanh (Truyện Kiều)',
    topic: 'Bi kịch tình yêu tan vỡ và nhân phẩm cao thượng của nàng Kiều',
    centralTheme:
      'Đoạn trích miêu tả cuộc giằng xé nội tâm đau đớn đến tột cùng của Thúy Kiều trong đêm trao duyên cho em gái Thúy Vân, qua đó ngợi ca đức hy sinh cao cả và chữ tình son sắt của nàng.',
    keywords: ['Truyện Kiều', 'Thúy Kiều', 'Thúy Vân', 'Kim Trọng', 'Cậy em em có chịu lời', 'Kỷ vật tình yêu', 'Bi kịch tình yêu'],
    hookIntro:
      'Trong văn học trung đại, chưa có cuộc trao gửi nào đau đớn và nghịch lý như đêm trao duyên. Kiều trao duyên nhưng không thể trao tình; mỗi lời dặn dò trao kỷ vật là một nhát dao cứa nát cõi lòng son trẻ.',
    coverImage: WORK_IMAGES['trao-duyen'],
    bannerImage: WORK_IMAGES['trao-duyen'],
    historicContext: {
      timeframe: 'Cuối thế kỷ XVIII - đầu thế kỷ XIX',
      historicalBackground:
        'Chế độ phong kiến Đàng Ngoài - Đàng Trong khủng hoảng trầm trọng; đồng tiền và quyền lực bạo tàn chà đạp lên hạnh phúc lứa đôi.',
      personalCircumstance:
        'Nguyễn Du trải qua "mười năm gió bụi", thấu hiểu nỗi đau đớn đoạn trường của kiếp người bạc mệnh.',
      impactOnWork:
        'Tác phẩm kết tinh đỉnh cao cảm hứng nhân đạo và nghệ thuật miêu tả tâm lý bậc thầy của đại thi hào.',
    },
    structureAndSummary: {
      layout: [
        { part: '12 câu đầu', content: 'Thúy Kiều thuyết phục và cậy nhờ Thúy Vân thay mình kết duyên với Kim Trọng.' },
        { part: '14 câu tiếp', content: 'Kiều trao kỷ vật thiêng liêng và dặn dò em chuyện mai sau khi mình thác oan.' },
        { part: '8 câu cuối', content: 'Nỗi đau bùng phát thành tiếng khóc than xé lòng hướng về Kim Trọng phương xa.' },
      ],
      shortSummary:
        'Vì gia đình gặp tai biến, Kiều phải bán mình chuộc cha và em. Đêm cuối cùng trước ngày theo Mã Giám Sinh, Kiều thức trắng nhờ cậy Thúy Vân thay mình nối duyên với chàng Kim. Nàng dùng lễ nghi trang trọng quỳ lạy em để tỏ lòng biết ơn, trao lại chiếc thoa vàng, bức tờ mây nhưng tiếc nuối khôn nguôi. Cuối cùng, nàng ngất lịm trong tiếng khóc nghẹn ngào lạy tạ Kim Trọng.',
      emotionalArc:
        'Từ sự tỉnh táo, khôn khéo thuyết phục em -> chuyển sang giằng xé, tiếc nuối kỷ vật -> rơi vào ảo giác đau đớn nghĩ về cái chết -> bùng nổ tuyệt vọng tột cùng.',
    },
    mainContentPoints: [
      'Bi kịch đau đớn khi phải hy sinh tình yêu đầu trong trắng để làm tròn chữ hiếu.',
      'Đức hy sinh quên mình và sự tinh tế, chu đáo giàu lòng vị tha của Thúy Kiều.',
      'Tài năng miêu tả tâm trạng nhân vật đạt đến độ tuyệt đỉnh của Nguyễn Du.',
    ],
    analysisLevels: {
      basic:
        'Đoạn trích kể về việc Thúy Kiều nhờ em gái là Thúy Vân lấy Kim Trọng thay mình vì nàng phải bán mình chuộc cha, thể hiện tình yêu chung thủy và nỗi đau của Kiều.',
      detailed:
        'Nguyễn Du sử dụng từ ngữ vô cùng chuẩn xác: "Cậy" chứ không phải "nhờ" (gợi sự nương tựa, tin tưởng tuyệt đối), "chịu lời" chứ không phải "nhận lời" (buộc Vân phải nhận một trách nhiệm nặng nề). Hành động "ngồi lên cho chị lạy rồi sẽ thưa" đã đảo lộn trật tự tôn ti chị - em để đặt ơn nghĩa lên cao nhất. Khi trao kỷ vật, mâu thuẫn giữa lý trí và tình cảm bộc lộ gay gắt: "Duyên này thì giữ, vật này của chung" – Kiều muốn dứt duyên nhưng tình yêu thì không thể chia sẻ. Đoạn kết chuyển sang độc thoại với người vắng mặt, Kiều coi mình như đã chết để gửi trọn giọt lệ tạ tình chàng Kim.',
      advanced:
        'Từ góc độ tâm lý học hiện đại, cảnh trao duyên là một ca phân tích chấn thương tâm lý tuyệt đỉnh. Kiều thực hiện cuộc phân thân: một Kiều lý trí đang thu xếp bổn phận, và một Kiều vô thức đang gào thét vì bị tước đoạt sự sống tình yêu. Cái chết được Kiều nhắc đến liên tục ("thịt nát xương mòn", "ngậm cười chín suối", "hồn lạc lõng", "dạ đài") không phải sự bi quan yếm thế mà là cảm giác trống rỗng tột cùng của một linh hồn bị lưu đày khỏi tình yêu. Tiếng nấc cuối cùng: "Ôi Kim Lang! Hỡi Kim Lang! Thôi thôi thiếp đã phụ chàng từ đây!" là sự bùng nổ của bi kịch hiện sinh.',
    },
    poetryAnalysis: [
      {
        id: 'trao-duyen-doan-1',
        stanzaNumber: 1,
        title: '12 câu đầu: Lời cậy nhờ và thuyết phục Thúy Vân',
        excerpt: 'Cậy em em có chịu lời\nNgồi lên cho chị lạy rồi sẽ thưa\nGiữa đường đứt gánh tương tư\nKeo loan chắp mối tơ thừa mặc em\nKể từ khi gặp chàng Kim\nKhi ngày quạt ước khi đêm chén thề\nSự đâu sóng gió bất kỳ\nHiếu tình khôn lẽ hai bề vẹn hai',
        contentSummary:
          'Thúy Kiều tạo nên không khí trang trọng khác thường, đem hết ân tình và lý lẽ để thuyết phục em gái nhận lãnh món nợ duyên thay mình.',
        poeticImages: [
          { image: 'Đứt gánh tương tư', meaning: 'Ẩn dụ cho tình yêu dang dở, gãy gánh giữa đường vì nghịch cảnh.' },
          { image: 'Quạt ước / Chén thề', meaning: 'Những minh chứng thiêng liêng cho lời hẹn ước son sắt thuở ban đầu giữa Kiều và Kim Trọng.' },
        ],
        keyWords: [
          { word: 'Cậy', nuance: 'Hàm chứa cả sự trông cậy, tin tưởng, gửi gắm và nài ép thiêng liêng không thể chối từ.' },
          { word: 'Chịu lời', nuance: 'Chấp nhận một sự ép buộc trong tình thế éo le, nhận phần thiệt thòi về mình.' },
        ],
        rhetoricalDevices: [
          { device: 'Đảo trật tự hành vi nghi lễ', effect: 'Chị lạy em, tôn vinh người chịu ơn lên vị trí cứu tinh để hóa giải sự gượng gạo.' },
          { device: 'Thành ngữ dân gian & điển cố', effect: 'Tạo sức thuyết phục sắc bén cả về tình cảm và lý trí.' },
        ],
        roleInWork: 'Mở đầu tấn bi kịch trao duyên, làm bật lên sự thông minh, chu đáo và nỗi cay đắng của Kiều.',
      },
      {
        id: 'trao-duyen-doan-3',
        stanzaNumber: 2,
        title: '8 câu cuối: Lời vĩnh biệt đớn đau gửi Kim Trọng',
        excerpt: 'Bây giờ trâm gãy gương tan\nKể làm sao xiết muôn vàn ái ân!\nTrăm nghìn gửi lạy tình quân\nTơ duyên ngắn ngủi có ngần ấy thôi\nPhận sao phận bạc như vôi\nĐã đành nước chảy hoa trôi lỡ làng\nÔi Kim Lang! Hỡi Kim Lang!\nThôi thôi thiếp đã phụ chàng từ đây!',
        contentSummary:
          'Kiều quay lưng lại thực tại để hoàn toàn chìm đắm vào tiếng khóc tạ lỗi với Kim Trọng phương xa, khép lại tấn bi kịch tâm trạng.',
        poeticImages: [
          { image: 'Trâm gãy gương tan', meaning: 'Thành ngữ tượng trưng cho sự tan vỡ tuyệt vọng của tình duyên đôi lứa.' },
          { image: 'Nước chảy hoa trôi', meaning: 'Thân phận lênh đênh, bất định, trôi dạt vô định giữa dòng đời bão táp.' },
        ],
        keyWords: [
          { word: 'Kim Lang', nuance: 'Tiếng gọi thiết tha, thiêng liêng tôn chàng Kim lên hàng bạn đời tri kỷ trọn đời trọn kiếp.' },
          { word: 'Phụ chàng', nuance: 'Kiều tự nhận hết lỗi lầm về mình, thể hiện tấm lòng vị tha cao cả nhất.' },
        ],
        rhetoricalDevices: [
          { device: 'Câu cảm thán dồn dập & thán từ', effect: 'Tạo nhịp điệu thổn thức, xé ruột xé gan như tiếng nấc nghẹn ngào.' },
          { device: 'Đảo ngữ và nhịp thơ lục bát đứt gãy', effect: 'Mô tả trạng thái tâm lý suy sụp, kiệt quệ hoàn toàn của nàng Kiều.' },
        ],
        roleInWork: 'Đỉnh điểm thăng hoa của bi kịch đoạn trường, khắc sâu vẻ đẹp trinh bạch trong tâm hồn Kiều.',
      },
    ],
    artisticFeatures: {
      prominentCraft:
        'Nghệ thuật miêu tả nội tâm nhân vật sâu sắc, tinh tế; ngôn ngữ lục bát điêu luyện đạt tới đỉnh cao chuẩn mực của thi ca dân tộc; kết hợp nhuần nhuyễn giữa ngôn ngữ bác học và khẩu ngữ dân gian.',
      language: 'Trang nhã, hàm súc, giàu tính biểu cảm và nhạc điệu trữ tình.',
      tone: 'Xót xa, nghẹn ngào, đau đớn và tha thiết.',
      structureOrPointOfView: 'Độc thoại tâm trạng kết hợp đối thoại biến hóa tài tình.',
      imageryOrRhetoric: 'Sử dụng hàng loạt thành ngữ chỉ sự tan vỡ (trâm gãy gương tan, nước chảy hoa trôi, phận bạc như vôi).',
      distinctiveDevices: [
        { name: 'Nghệ thuật phân thân tâm lý', description: 'Để nhân vật vừa đối thoại với người hiện diện vừa độc thoại với người vắng mặt.' },
        { name: 'Khẩu ngữ dân gian hòa quyện điển cố', description: 'Nâng niu từng sắc thái biểu cảm tế vi nhất của lòng người.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-vat-nay-cua-chung',
        detailName: 'Câu thơ "Duyên này thì giữ, vật này của chung"',
        excerptOrContext: 'Chiếc vành với bức tờ mây / Duyên này thì giữ, vật này của chung',
        directMeaning: 'Lời dặn dò của Kiều khi trao kỷ vật cho Thúy Vân.',
        symbolicMeaning:
          'Sự giằng xé nội tâm: trao duyên nhưng không đành lòng trao kỷ vật; "của chung" là của Kim Trọng, Thúy Vân và cả một phần tâm hồn vĩnh cửu của Kiều.',
        thematicConnection:
          'Minh chứng cho tình yêu đích thực không bao giờ có thể bị san sẻ hay tước đoạt một cách trọn vẹn.',
      },
      {
        id: 'chi-tiet-tieng-goi-kim-lang',
        detailName: 'Tiếng thét "Ôi Kim Lang! Hỡi Kim Lang!"',
        excerptOrContext: 'Ôi Kim Lang! Hỡi Kim Lang! / Thôi thôi thiếp đã phụ chàng từ đây!',
        directMeaning: 'Lời gọi tên người yêu trong tuyệt vọng trước khi ngất đi.',
        symbolicMeaning:
          'Tiếng kêu đứt ruột xé lòng của một linh hồn thanh khiết nhận hết phần oan khiên, đau đớn về mình.',
        thematicConnection:
          'Khẳng định sự hy sinh cao cả và lòng thủy chung bất diệt của người phụ nữ trong xã hội cũ.',
      },
    ],
    literaryValues: {
      humanitarianValue:
        'Cảm thương sâu sắc cho bi kịch tình yêu tan vỡ; trân trọng ca ngợi nhân phẩm cao đẹp và đức hy sinh quên mình của người phụ nữ.',
      artisticValue:
        'Mẫu mực kinh điển của nghệ thuật khắc họa tâm lý trong truyện thơ Nôm Việt Nam và thế giới.',
      message:
        'Tình yêu chân chính luôn gắn liền với sự thủy chung, lòng tự trọng và đức hy sinh cao cả.',
      modernRelevance:
        'Lời nhắc nhở về giá trị của sự thấu hiểu, trân trọng tự do yêu đương và hạnh phúc gia đình trong cuộc sống hôm nay.',
    },
    quick60s: {
      author: 'Nguyễn Du',
      genre: 'Truyện thơ Nôm (Thể thơ lục bát)',
      context: 'Đoạn trích từ câu 723 - 756 trong Truyện Kiều.',
      theme: 'Bi kịch tình yêu tan vỡ và đức hy sinh cao thượng của Thúy Kiều.',
      coreFigureOrCharacter: 'Thúy Kiều (vừa lý trí sắp xếp vừa đớn đau tột cùng).',
      mainIdea: 'Kiều cậy nhờ Thúy Vân nối duyên với chàng Kim, giằng xé khi trao kỷ vật và nấc nghẹn tạ tình người yêu.',
      keyArt: 'Miêu tả nội tâm trác tuyệt; ngôn từ tinh luyện chuẩn xác; kết hợp độc thoại và đối thoại tài hoa.',
      goldenKeywords: ['Cậy em chịu lời', 'Lạy rồi sẽ thưa', 'Kỷ vật của chung', 'Khói hương hồn oan', 'Ôi Kim Lang'],
      takeaway: 'Trao duyên nhưng không trao tình – một nghịch cảnh đoạn trường tôn vinh trái tim vị tha bất tử.',
    },
  },

  'chu-nguoi-tu-tu': {
    slug: 'chu-nguoi-tu-tu',
    title: 'Chữ người tử tù',
    authorId: 'nguyen-tuan',
    authorName: 'Nguyễn Tuân',
    grade: 11,
    genre: 'Truyện ngắn',
    textbook: 'Ngữ văn 11 (Kết nối tri thức / Cánh Diều / Chân trời sáng tạo)',
    year: '1939 (in trên tạp chí Tao Đàn)',
    origin: 'In trong tập truyện "Vang bóng một thời" (1940)',
    topic: 'Cái đẹp thiên lương và khí phách hiên ngang của bậc danh sĩ thất thế',
    centralTheme:
      'Ca ngợi sự chiến thắng của cái Đẹp, cái Thiện và nhân cách cao khiết trước cái xấu xa, tàn bạo; khẳng định cái Đẹp có thể nảy sinh từ chốn bùn nhơ tăm tối nhưng không bao giờ chung sống với cái ác.',
    keywords: ['Huấn Cao', 'Viên quản ngục', 'Cảnh cho chữ xưa nay chưa từng có', 'Cái đẹp thiên lương', 'Thanh lọc tâm hồn'],
    hookIntro:
      'Một tử tù lãnh án chém ngang lưng lại trở thành người ban phát cái Đẹp; một viên cai ngục nắm quyền sinh sát lại khúm núm cúi đầu trước người tù. Đó là sự đảo lộn ngoạn mục giữa quyền lực và nhân cách trong "cảnh tượng xưa nay chưa từng có".',
    coverImage: WORK_IMAGES['chu-nguoi-tu-tu'],
    bannerImage: WORK_IMAGES['chu-nguoi-tu-tu'],
    historicContext: {
      timeframe: 'Thập niên 1930',
      historicalBackground:
        'Thời kỳ văn hóa phương Tây tràn vào làm xói mòn những giá trị cổ truyền thanh tao; tầng lời nho sĩ xưa lui về quá vãng hoài niệm.',
      personalCircumstance:
        'Nguyễn Tuân trước 1945 say mê đi tìm cái Đẹp "vang bóng một thời" như một phản ứng bất hòa sâu sắc với xã hội kim tiền thực dân phàm tục.',
      impactOnWork:
        'Tạo nên kiệt tác truyện ngắn lãng mạn mẫu mực đạt đến đỉnh cao tinh hoa của nghệ thuật văn xuôi tiếng Việt.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Phần 1', content: 'Cuộc trò chuyện giữa Quản ngục và Thơ lại về danh tiếng và khí phách của Huấn Cao.' },
        { part: 'Phần 2', content: 'Những ngày Huấn Cao bị giam cầm: thái độ biệt đãi của Quản ngục và sự khinh bạc của Huấn Cao.' },
        { part: 'Phần 3', content: 'Cảnh cho chữ vô tiền khoáng hậu trong buồng giam và lời răn dạy thanh lọc tâm hồn.' },
      ],
      shortSummary:
        'Huấn Cao – người có tài viết chữ nhanh và đẹp nổi tiếng, đồng thời là thủ lĩnh cuộc khởi nghĩa chống lại triều đình – bị bắt giam chờ ngày thụ hình. Viên quản ngục là người biết quý trọng cái Đẹp, khao khát có được chữ của Huấn Cao để treo trong nhà. Hiểu được tấm lòng biệt nhỡn liên tài và "thiên lương" trong sạch của quản ngục, Huấn Cao đã quyết định cho chữ ngay trong đêm cuối cùng trước ngày ra pháp trường. Trong phòng giam chật hẹp, hôi thối, ba con người chụm đầu bên ánh đuốc sáng rực tạo nên một bức tranh nghệ thuật tuyệt mỹ.',
    },
    mainContentPoints: [
      'Khí phách hiên ngang, bất khuất của người tráng sĩ không sợ uy quyền bạo lực.',
      'Sự tỏa sáng của cái Đẹp và thiên lương làm cảm hóa những tâm hồn lầm lỡ.',
      'Mối quan hệ tri âm, tri kỷ vượt qua ranh giới giữa kẻ cầm quyền và người tử tù.',
    ],
    analysisLevels: {
      basic:
        'Truyện ca ngợi Huấn Cao vừa có tài viết chữ đẹp vừa có khí phách anh hùng, và quản ngục biết trân trọng cái đẹp, qua đó khẳng định cái đẹp luôn chiến thắng cái xấu.',
      detailed:
        'Tác phẩm xây dựng tình huống gặp gỡ kịch tính giữa hai con người ở hai vị thế đối lập: một bên là tử tù chống triều đình, một bên là quan cai ngục đại diện cho luật pháp phong kiến. Nhưng trên bình diện nghệ thuật và thiên lương, họ lại là tri âm tri kỷ. "Cảnh cho chữ" được tôn vinh là cảnh tượng xưa nay chưa từng có vì diễn ra ở nơi tối tăm, hôi hám của nhà tù nhưng lại thăng hoa vẻ đẹp tinh khiết của ngọn đuốc, tấm lụa bạch và hương thơm của chậu mực. Trật tự xã hội bị đảo lộn: tử tù thành bậc thầy uy nghiêm truyền thụ đạo lý, quản ngục khúm núm vái lạy.',
      advanced:
        'Nguyễn Tuân đã thể hiện quan niệm thẩm mỹ sâu sắc: Cái Tài phải đi liền với cái Tâm (Tài - Tâm tương đắc); cái Đẹp không thể tách rời cái Thiện. Lời khuyên cuối cùng của Huấn Cao ("Ở đây lẫn lộn... thầy hãy thoát khỏi cái nghề này đi đã rồi hãy nghĩ đến chuyện chơi chữ") là một chân lý nghệ thuật: con người chỉ có thể thưởng thức và gìn giữ cái Đẹp một cách chân chính khi giữ được thiên lương trong sạch. Nghệ thuật ánh sáng đối lập (chiaroscuro) mang phong cách hội họa phương Tây kết hợp hoàn hảo với phong vị cổ điển phương Đông.',
    },
    characters: [
      {
        id: 'huan-cao',
        name: 'Huấn Cao (Hình tượng người nghệ sĩ trượng phu)',
        role: 'Nhân vật lý tưởng kết tinh Tài - Dũng - Thiên lương',
        appearance: 'Dáng vẻ hiên ngang, dỗ gông đánh uỳnh một cái làm kinh hồn lính ngục, cổ đeo gông nặng nhưng đầu ngẩng cao.',
        situation: 'Tử tù chờ ngày chém đầu vì tội chống lại triều đình mục ruỗng.',
        speechAndActions:
          'Khinh bạc quát mắng quản ngục khi chưa hiểu tấm lòng ông; nhưng khi biết rõ liền cảm động thốt lên: "Ta cảm cái tấm lòng biệt nhỡn liên tài của các người... Thiếu chút nữa ta đã phụ mất một tấm lòng trong thiên hạ".',
        innerPsychology: 'Trọng nghĩa khinh tài, cả đời chỉ cho chữ ba người bạn thân, trân quý thiên lương của con người.',
        symbolicMeaning: 'Bức tượng đài về sự hội tụ hoàn mỹ giữa Thiên tài nghệ thuật, Khí phách anh hùng và Đạo đức trong sáng.',
        quote: 'Thầy Quản nên tìm về nhà quê mà ở đã, hãy thoát khỏi cái nghề này đi đã, rồi hãy nghĩ đến chuyện chơi chữ. Ở đây, khó giữ thiên lương cho lành vững...',
      },
      {
        id: 'vien-quan-nguc',
        name: 'Viên quản ngục',
        role: 'Người có sở nguyện thanh cao giữa chốn ngục tù',
        appearance: 'Mái tóc hoa râm, râu đã điểm bạc, ánh mắt nhân hậu hiền từ giữa bầy lính dữ dằn.',
        situation: 'Cai quản nhà tù tỉnh Sơn, sống giữa chốn lừa lọc, tàn nhẫn nhưng vẫn giữ được tâm hồn thanh tao.',
        speechAndActions:
          'Biệt đãi người tù bằng rượu thịt, nhẫn nhục trước sự khinh bạc của Huấn Cao, khúm núm vái lạy nhận chữ.',
        innerPsychology: 'Say mê cái đẹp đến quên cả hiểm nguy mất chức mất đầu; kính phục nhân cách cao thượng của Huấn Cao.',
        symbolicMeaning: 'Hiện thân của "thanh âm trong trẻo chen vào giữa bản đàn mà nhạc luật đều hỗn loạn xô bồ".',
        quote: 'Kẻ mê muội này xin bái lĩnh!',
      },
    ],
    artisticFeatures: {
      prominentCraft:
        'Bút pháp lãng mạn kết hợp thủ pháp tương phản đối lập gay gắt; nghệ thuật dựng cảnh và miêu tả không khí cổ kính huy hoàng; ngôn ngữ góc cạnh, giàu chất tạo hình.',
      language: 'Trang trọng, cổ kính, phục dựng hoàn hảo không khí của một thời vang bóng đã qua.',
      tone: 'Trầm trồ, kính phục, bi tráng và trang nghiêm.',
      structureOrPointOfView: 'Kịch tính cao độ dẫn dắt đến cảnh tượng cao trào vô tiền khoáng hậu.',
      imageryOrRhetoric: 'Nghệ thuật đối lập giữa ánh sáng rực rỡ và bóng tối ngục tù, giữa cái Đẹp và cái Nhơ bẩn.',
      distinctiveDevices: [
        { name: 'Nghệ thuật đối lập ánh sáng Chiaroscuro', description: 'Ngọn đuốc đỏ rực, tấm lụa bạch trắng ngần đối chọi với bóng tối ẩm mốc chốn ngục tù.' },
        { name: 'Đảo ngược vị thế nhân vật', description: 'Kẻ tử tù trở thành quan tòa đạo đức, người coi tù trở thành học trò kính cẩn vái lạy.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-canh-cho-chu',
        detailName: 'Cảnh cho chữ đêm khuya trong ngục tối',
        excerptOrContext: 'Trong một buồng tối chật hẹp, ẩm ướt, tường đầy mạng nhện, đất bừa bãi phân chuột phân gián... một ngọn đuốc tẩm dầu rực sáng, khói cay mắt...',
        directMeaning: 'Hành động viết câu đối tặng chữ giữa tử tù và viên quản ngục.',
        symbolicMeaning:
          'Sự bất tử của cái Đẹp: cái Đẹp được sinh ra từ nơi tăm tối nhất nhưng lại tỏa ánh sáng rực rỡ xua tan bóng đêm tàn bạo.',
        thematicConnection:
          'Khẳng định sức mạnh cảm hóa vĩ đại của nghệ thuật và đạo đức trước bạo quyền.',
      },
      {
        id: 'chi-tiet-cai-cui-dau-quan-nguc',
        detailName: 'Cái cúi đầu của viên quản ngục',
        excerptOrContext: 'Ngục quan cảm động, vái người tù một vái, chắp tay nói một câu mà dòng nước mắt rỉ vào kẽ miệng làm cho nghẹn ngào: "Kẻ mê muội này xin bái lĩnh!".',
        directMeaning: 'Hành động bái lạy tạ ơn của người coi ngục trước lời răn dạy của tử tù.',
        symbolicMeaning:
          'Sự khuất phục tự nguyện của quyền lực trước nhân cách cao thượng; cái cúi đầu nâng con người lên tầm vóc vĩ đại.',
        thematicConnection:
          'Tôn vinh chiến thắng tuyệt đối của thiên lương và chân lý làm người.',
      },
    ],
    literaryValues: {
      ideologicalValue:
        'Tôn vinh những giá trị văn hóa truyền thống thanh cao; khẳng định thiên lương là cốt lõi làm nên giá trị đích thực của con người.',
      artisticValue:
        'Một trong những truyện ngắn hoàn hảo nhất của chủ nghĩa lãng mạn Việt Nam về cả kết cấu, xây dựng nhân vật và ngôn ngữ.',
      message:
        'Cái Đẹp chỉ có thể nảy nở và tỏa sáng khi gắn liền với một tâm hồn trong sạch, không vụ lợi.',
      modernRelevance:
        'Nhắc nhở con người hiện đại giữ gìn sự liêm chính, trân trọng tài năng và không cúi đầu trước những cám dỗ vật chất phi nhân tính.',
    },
    quick60s: {
      author: 'Nguyễn Tuân',
      genre: 'Truyện ngắn lãng mạn hoài cổ',
      context: 'Năm 1939, in trong tập "Vang bóng một thời" (1940).',
      theme: 'Sự chiến thắng của cái Đẹp, cái Thiện và thiên lương trước bóng tối bạo quyền.',
      coreFigureOrCharacter: 'Huấn Cao (người tử tù tài hoa khí phách) & Viên quản ngục (tấm lòng biệt nhỡn).',
      mainIdea: 'Cảnh cho chữ xưa nay chưa từng có khẳng định cái Đẹp cứu rỗi và thanh lọc tâm hồn con người.',
      keyArt: 'Bút pháp tương phản đối lập; ngôn từ trang trọng cổ kính; xây dựng tình huống gặp gỡ éo le kỳ thú.',
      goldenKeywords: ['Huấn Cao', 'Biệt nhỡn liên tài', 'Cảnh cho chữ vô tiền khoáng hậu', 'Mùi mực thơm', 'Kẻ mê muội xin bái lĩnh'],
      takeaway: 'Cái Đẹp chân chính luôn tỏa sáng ngay giữa chốn bùn nhơ và có sức mạnh thanh lọc nhân cách con người.',
    },
  },

  'day-thon-vi-da': {
    slug: 'day-thon-vi-da',
    title: 'Đây thôn Vĩ Dạ',
    authorId: 'han-mac-tu',
    authorName: 'Hàn Mặc Tử',
    grade: 11,
    genre: 'Thơ',
    textbook: 'Ngữ văn 11 (Kết nối tri thức / Cánh Diều / Chân trời sáng tạo)',
    year: '1938',
    origin: 'Rút từ tập "Thơ Điên" (sau đổi tên thành "Đau thương", 1938)',
    topic: 'Bức tranh phong cảnh xứ Huế và nỗi niềm u uẩn, khát khao tình người của nhà thơ',
    centralTheme:
      'Bài thơ là bức tranh phong cảnh Vĩ Dạ tinh khôi, huyền ảo; đồng thời là tiếng lòng tha thiết yêu đời, yêu người nhưng đầy mặc cảm, u uất và hoài nghi trước số phận trớ trêu của thi sĩ tài hoa.',
    keywords: ['Thôn Vĩ Dạ', 'Nắng hàng cau', 'Vườn ai mướt quá', 'Thuyền ai đậu bến sông trăng', 'Sương khói mờ nhân ảnh'],
    hookIntro:
      'Gợi hứng từ tấm bưu thiếp phong cảnh của người con gái Hoàng Cúc xứ Huế gửi tặng, "Đây thôn Vĩ Dạ" là một trong những thi phẩm kỳ diệu nhất của phong trào Thơ mới: vừa trong trẻo như sương mai, vừa mộng ảo, đau đớn như một tiếng thở dài hư vô.',
    coverImage: WORK_IMAGES['day-thon-vi-da'],
    bannerImage: WORK_IMAGES['day-thon-vi-da'],
    historicContext: {
      timeframe: 'Năm 1938',
      historicalBackground:
        'Thời kỳ hoàng kim của phong trào Thơ Mới; cái tôi cá nhân được giải phóng khám phá muôn vàn cung bậc cảm xúc tinh tế.',
      personalCircumstance:
        'Hàn Mặc Tử mắc bệnh phong hiểm nghèo, phải sống cách ly tại trại phong Quy Hòa trong nỗi đau đớn thể xác và cô đơn tột cùng về tinh thần.',
      impactOnWork:
        'Biến nỗi khát khao giao cảm trần thế thành ngọn lửa thơ bùng cháy vừa rực rỡ vừa xót xa.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Khổ 1', content: 'Cảnh thôn Vĩ Dạ buổi sớm mai tinh khôi, ngập tràn sức sống thanh khiết.' },
        { part: 'Khổ 2', content: 'Cảnh sông nước đêm trăng huyền ảo, chia lìa, nhuốm màu âu lo và dự cảm bất trắc.' },
        { part: 'Khổ 3', content: 'Cõi mộng sương khói mờ ảo và câu hỏi hoài nghi da diết về tình người trần thế.' },
      ],
      shortSummary:
        'Khổ một mở đầu bằng câu hỏi tu từ tế nhị mời gọi về thăm thôn Vĩ, nơi có nắng mới hàng cau, vườn tược mướt xanh như ngọc và gương mặt chữ điền phúc hậu. Khổ hai chuyển sang không gian sông nước đêm trăng với gió mây chia lìa, dòng nước buồn thiu hoa bắp lay và chiếc thuyền chở trăng cập bến kịp tối nay hay không. Khổ ba lạc vào cõi mộng ảo với tà áo trắng xa xăm trong sương khói và tiếng thở dài hoài nghi muôn thuở: "Ai biết tình ai có đậm đà?".',
      emotionalArc:
        'Từ niềm vui say mê trước vẻ đẹp thanh tân trần thế -> chuyển sang âu lo chia lìa, hoảng hốt trước thời gian -> khép lại trong nỗi hoài nghi, cô đơn u uẩn tuyệt vọng.',
    },
    mainContentPoints: [
      'Bức tranh thiên nhiên và con người xứ Huế thanh tú, thơ mộng, đượm buồn.',
      'Khát vọng sống, khát vọng yêu thương và giao cảm với cuộc đời trần thế.',
      'Nỗi đau đớn, cô đơn và dự cảm chia lìa của một kiếp người bất hạnh.',
    ],
    analysisLevels: {
      basic:
        'Bài thơ ca ngợi cảnh đẹp thôn Vĩ Dạ xứ Huế và bộc lộ tình yêu đời, khát khao tình người của nhà thơ Hàn Mặc Tử giữa hoàn cảnh bệnh tật cô đơn.',
      detailed:
        'Sự vận động cảm xúc và không gian chuyển dịch từ cõi thực sang cõi mộng. Khổ 1 là cõi thực tươi sáng ("nắng mới lên", "xanh như ngọc"). Khổ 2 là cõi thực pha mộng với nghịch lý "Gió theo lối gió, mây đường mây" báo hiệu sự chia lìa; hình ảnh "sông trăng", "thuyền chở trăng" đưa thi phẩm vào thế giới siêu thực huyền ảo. Khổ 3 hoàn toàn là cõi mộng với hình ảnh "khách đường xa", sắc áo trắng tinh khôi đến hư ảo và câu hỏi tu từ cuối bài để lại nỗi day dứt khôn nguôi.',
      advanced:
        'Thi phẩm là ví dụ điển hình cho bút pháp tượng trưng siêu thực trong Thơ mới. "Trăng" trong thơ Hàn Mặc Tử không đơn thuần là cảnh vật mà là sinh thể cứu rỗi tâm linh; câu hỏi "Có chở trăng về kịp tối nay?" hàm chứa nỗi âu lo chạy đua với thời gian của một người ý thức được quỹ thời gian sống của mình sắp cạn. "Gương mặt chữ điền" và "Áo em trắng quá" là những hình ảnh biểu tượng cho sự trinh bạch, thánh thiện của cõi nhân gian mà thi nhân cả đời khao khát nhưng vĩnh viễn không thể chạm tới.',
    },
    poetryAnalysis: [
      {
        id: 'kho-vi-da-1',
        stanzaNumber: 1,
        title: 'Khổ 1: Bình minh thôn Vĩ thanh khiết',
        excerpt: 'Sao anh không về chơi thôn Vĩ?\nNhìn nắng hàng cau nắng mới lên\nVườn ai mướt quá xanh như ngọc\nLá trúc che ngang mặt chữ điền',
        contentSummary: 'Khung cảnh bình minh thôn Vĩ tươi tắn, thanh tú với vẻ đẹp hài hòa giữa thiên nhiên và con người phúc hậu.',
        poeticImages: [
          { image: 'Nắng hàng cau nắng mới lên', meaning: 'Ánh nắng tinh khôi sớm mai chiếu rọi lên những ngọn cau cao vút đọng sương đêm.' },
          { image: 'Vườn ai mướt quá xanh như ngọc', meaning: 'Sắc xanh mượt mà, bóng bẩy, óng ánh như ngọc bích của cây trái vườn Huế.' },
          { image: 'Mặt chữ điền', meaning: 'Gương mặt phúc hậu, đoan trang, kín đáo của con người xứ Huế lấp ló sau cành trúc biếc.' },
        ],
        keyWords: [
          { word: 'Mướt quá', nuance: 'Cực tả vẻ non tơ, mịn màng, giàu sức sống mơn mởn của cỏ cây vườn tược.' },
          { word: 'Sao anh không về', nuance: 'Vừa là lời trách nhẹ nhàng, mời mọc ân cần của cô gái, vừa là lời tự vấn nuối tiếc của tác giả.' },
        ],
        rhetoricalDevices: [
          { device: 'Điệp từ "nắng"', effect: 'Diễn tả ánh sáng ban mai đang lan tỏa rực rỡ khắp không gian thôn quê.' },
          { device: 'So sánh "xanh như ngọc"', effect: 'Mỹ lệ hóa vẻ đẹp của cỏ cây vườn Huế thành một viên ngọc bích khổng lồ.' },
        ],
        roleInWork: 'Điểm tựa cõi thực duy nhất, khơi gợi niềm say đắm trần gian của thi nhân.',
      },
      {
        id: 'kho-vi-da-2',
        stanzaNumber: 2,
        title: 'Khổ 2: Đêm trăng chia lìa và nỗi lo âu gấp gáp',
        excerpt: 'Gió theo lối gió, mây đường mây\nDòng nước buồn thiu, hoa bắp lay\nThuyền ai đậu bến sông trăng đó\nCó chở trăng về kịp tối nay?',
        contentSummary: 'Không gian chuyển sang đêm trăng huyền ảo, thấm đẫm cảm giác chia lìa và nỗi thắc thỏm chạy đua với sự hữu hạn của đời người.',
        poeticImages: [
          { image: 'Gió theo lối gió, mây đường mây', meaning: 'Sự chia lìa đôi ngả, ngược hướng, trái với quy luật tự nhiên gió thổi mây bay.' },
          { image: 'Bến sông trăng / Thuyền chở trăng', meaning: 'Hình ảnh siêu thực lung linh biến dòng Hương giang thành dòng sông ánh sáng tâm linh.' },
        ],
        keyWords: [
          { word: 'Buồn thiu', nuance: 'Nhân hóa dòng nước mang nỗi sầu nhân thế chậm chạp, ngưng trệ.' },
          { word: 'Kịp tối nay', nuance: 'Khắc khoải sự gấp gáp, lo âu trước cái chết đang cận kề từng ngày.' },
        ],
        rhetoricalDevices: [
          { device: 'Phép tiểu đối phi lý tính', effect: 'Tạo cảm giác chia ly tan tác không thể hàn gắn.' },
          { device: 'Hình ảnh siêu thực "chở trăng"', effect: 'Nâng bài thơ thoát khỏi cảnh sắc hiện thực để bay vào cõi mộng ảo.' },
        ],
        roleInWork: 'Bước ngoặt tâm lý, báo hiệu sự đổ vỡ và nỗi cô đơn bủa vây.',
      },
    ],
    artisticFeatures: {
      prominentCraft:
        'Sự kết hợp kỳ diệu giữa bút pháp tả thực, lãng mạn và tượng trưng siêu thực; cấu tứ thơ biến hóa bất ngờ từ thực sang mộng; ngôn ngữ giàu sức gợi hình và nhạc tính.',
      language: 'Trong sáng, tinh tế, man mác chất Huế pha lẫn giọng điệu u uẩn của thơ tượng trưng.',
      tone: 'Từ tươi vui, say đắm chuyển sang u hoài, trăn trở và hoài nghi xót xa.',
      structureOrPointOfView: 'Mạch liên tưởng phi lô-gíc bề mặt nhưng thống nhất bởi mạch ngầm cảm xúc khao khát sống.',
      imageryOrRhetoric: 'Hệ thống hình ảnh ánh sáng (nắng hàng cau, sông trăng, sương khói) biến ảo kỳ ảo.',
      distinctiveDevices: [
        { name: 'Cấu tứ chuyển tầng không gian', description: 'Từ cõi thực ban mai sang cõi mộng đêm trăng và cõi ảo sương khói mờ ảo.' },
        { name: 'Hình ảnh biểu tượng siêu thực', description: 'Thuyền chở trăng, dòng sông trăng cứu rỗi linh hồn thi sĩ.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-thuyen-cho-trang',
        detailName: 'Hình ảnh "Thuyền ai chở trăng về kịp tối nay?"',
        excerptOrContext: 'Thuyền ai đậu bến sông trăng đó / Có chở trăng về kịp tối nay?',
        directMeaning: 'Con thuyền chở ánh trăng trên dòng sông đêm.',
        symbolicMeaning:
          'Khát vọng níu giữ hạnh phúc và niềm an ủi tâm linh cuối cùng trước khi cánh cửa sự sống khép lại.',
        thematicConnection:
          'Khắc họa tấn bi kịch thời gian và nỗi khát khao sống mãnh liệt của một linh hồn đau đớn.',
      },
      {
        id: 'chi-tiet-ai-biet-tinh-ai',
        detailName: 'Câu thơ kết "Ai biết tình ai có đậm đà?"',
        excerptOrContext: 'Ở đây sương khói mờ nhân ảnh / Ai biết tình ai có đậm đà?',
        directMeaning: 'Câu hỏi tu từ ngập ngừng về tình cảm của người và của mình.',
        symbolicMeaning:
          'Nỗi hoài nghi xót xa nhưng ẩn chứa bên trong là lời tha thiết cầu xin một tấm lòng tri âm chân thực.',
        thematicConnection:
          'Khép lại bài thơ trong dư âm ngân dài của nỗi buồn thế nhân muôn thuở.',
      },
    ],
    literaryValues: {
      humanitarianValue:
        'Tiếng kêu tha thiết đòi quyền sống, quyền yêu thương và giao cảm trọn vẹn với cuộc đời của con người.',
      artisticValue:
        'Một trong những viên ngọc sáng nhất của phong trào Thơ Mới, mở đầu cho xu hướng thơ tượng trưng hiện đại ở Việt Nam.',
      message:
        'Dù trong bất kỳ hoàn cảnh đau thương nào, hãy luôn giữ trọn tình yêu tha thiết với vẻ đẹp của đất nước và cuộc đời.',
      modernRelevance:
        'Khơi gợi sự cảm thông sâu sắc với những số phận bất hạnh và trân trọng từng khoảnh khắc bình yên của tuổi trẻ.',
    },
    quick60s: {
      author: 'Hàn Mặc Tử',
      genre: 'Thơ Mới (Lãng mạn & Tượng trưng)',
      context: 'Năm 1938, in trong tập "Thơ Điên" (Đau thương).',
      theme: 'Bức tranh xứ Huế thơ mộng và khát vọng sống, khát vọng tình người cháy bỏng của thi nhân bất hạnh.',
      coreFigureOrCharacter: 'Cảnh sắc thôn Vĩ Dạ và Cái Tôi trữ tình đau thương tha thiết yêu đời.',
      mainIdea: 'Từ vẻ đẹp thanh tân thôn Vĩ bước vào cõi mộng trăng chia lìa và câu hỏi đau đáu về tình người.',
      keyArt: 'Bút pháp siêu thực chuyển cõi; hình ảnh thơ biến ảo lạ lùng; nhạc điệu u hoài da diết.',
      goldenKeywords: ['Nắng hàng cau', 'Xanh như ngọc', 'Sông trăng', 'Kịp tối nay', 'Sương khói mờ nhân ảnh'],
      takeaway: 'Tình yêu cuộc sống trần thế bùng cháy mãnh liệt nhất chính là lúc con người đứng trước bờ vực hư vô.',
    },
  },

  'chiec-thuyen-ngoai-xa': {
    slug: 'chiec-thuyen-ngoai-xa',
    title: 'Chiếc thuyền ngoài xa',
    authorId: 'nguyen-minh-chau',
    authorName: 'Nguyễn Minh Châu',
    grade: 12,
    genre: 'Truyện ngắn',
    textbook: 'Ngữ văn 12 (Kết nối tri thức / Cánh Diều / Chân trời sáng tạo)',
    year: '1983 (in trong tập "Bến quê" năm 1985, sau in riêng trong tập cùng tên năm 1987)',
    origin: 'Tác phẩm tiêu biểu của văn học Việt Nam thời kỳ mở đầu công cuộc Đổi mới',
    topic: 'Mối quan hệ giữa nghệ thuật và đời sống; cái nhìn đa diện về số phận con người sau chiến tranh',
    centralTheme:
      'Nghệ thuật không thể là cái nhìn thi vị hóa một chiều từ khoảng cách xa; người nghệ sĩ phải dấn thân thấu hiểu bề sâu số phận đầy nghịch lý và nhọc nhằn của con người trong đời sống mưu sinh cơm áo.',
    keywords: ['Nhiếp ảnh gia Phùng', 'Bức ảnh toàn bích', 'Bạo lực gia đình', 'Người đàn bà hàng chài', 'Tòa án huyện', 'Màu hồng của ánh bình minh'],
    hookIntro:
      'Từ khoảng cách ngoài xa, chiếc thuyền là bức tranh mực tàu tuyệt đỉnh của danh họa thời cổ. Nhưng khi con thuyền cập bến, bức màn thi vị rách toang, phơi bày một màn bạo lực gia đình tàn nhẫn đến bàng hoàng. Đâu là sự thật của cuộc đời?',
    coverImage: WORK_IMAGES['chiec-thuyen-ngoai-xa'],
    bannerImage: WORK_IMAGES['chiec-thuyen-ngoai-xa'],
    historicContext: {
      timeframe: 'Đầu thập niên 1980',
      historicalBackground:
        'Đất nước bước ra khỏi chiến tranh, bước vào thời kỳ hậu chiến với muôn vàn khó khăn kinh tế và những vấn đề thế sự đời thường nhức nhối.',
      personalCircumstance:
        'Nguyễn Minh Châu tiên phong đổi mới tư duy sáng tác, chuyển từ cảm hứng sử thi ngợi ca sang cảm hứng thế sự - đời tư và triết lý nhân sinh.',
      impactOnWork:
        'Khẳng định vị thế người mở đường tinh anh cho văn xuôi Việt Nam hiện đại.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Phần 1', content: 'Hai phát hiện nghệ thuật của nghệ sĩ nhiếp ảnh Phùng ở bờ biển miền Trung.' },
        { part: 'Phần 2', content: 'Câu chuyện cảm động của người đàn bà hàng chài tại tòa án huyện.' },
        { part: 'Phần 3', content: 'Tấm ảnh được chọn trong bộ lịch năm ấy và chiêm nghiệm sâu sắc của người nghệ sĩ.' },
      ],
      shortSummary:
        'Nghệ sĩ nhiếp ảnh Phùng được giao nhiệm vụ chụp một bức ảnh cảnh biển sớm mai cho bộ lịch năm mới. Sau nhiều ngày phục kích, anh bắt gặp một "cảnh đắt trời cho": chiếc thuyền lưới vó ẩn hiện sau màn sương mù màu hồng, đẹp như bức tranh mực tàu cổ điển. Nhưng ngay sau khoảnh khắc thăng hoa ấy, chiếc thuyền đâm thẳng vào bờ: một gã chồng vũ phu rút thắt lưng da quật tới tấp vào người vợ, đứa con trai (thằng Phác) lao vào giằng thắt lưng để bảo vệ mẹ. Chứng kiến cảnh tượng lặp lại, Phùng và chánh án Đẩu đã khuyên người phụ nữ ly hôn. Tại tòa án huyện, người đàn bà hàng chài đã từ chối ly hôn và giãi bày câu chuyện nhọc nhằn, đức hy sinh bao la của người mẹ nuôi con trên sóng gió đại dương.',
    },
    mainContentPoints: [
      'Khoảng cách giữa nghệ thuật thuần túy và hiện thực đời sống trần trụi lấm lem.',
      'Vẻ đẹp khuất lấp của đức hy sinh, tình mẫu tử thiêng liêng ở người phụ nữ lao động nghèo.',
      'Bài học về cái nhìn đa diện, không được đơn giản một chiều khi đánh giá con người và cuộc đời.',
    ],
    analysisLevels: {
      basic:
        'Tác phẩm kể về một nhiếp ảnh gia phát hiện vẻ đẹp tuyệt mỹ của cảnh biển nhưng sau đó chứng kiến cảnh bạo lực gia đình, từ đó nhận ra nghệ thuật phải gắn liền với thực tế cuộc sống.',
      detailed:
        'Nguyễn Minh Châu xây dựng tình huống nhận thức độc đáo qua hai phát hiện của Phùng. Phát hiện thứ nhất mang lại sự thanh lọc tâm hồn ("cái Đẹp tuyệt đỉnh chính là Đạo đức"). Phát hiện thứ hai đập tan ảo tưởng thẩm mỹ khi cái ác, cái bạo lực diễn ra ngay sau lưng cái đẹp. Câu chuyện tại tòa án huyện là bước ngoặt nhận thức của Phùng và Đẩu: họ có lòng tốt và luật pháp sách vở, nhưng người đàn bà hàng chài có sự từng trải và triết lý sống sinh tồn thực tế. Chi tiết cuối truyện về tấm ảnh lịch (nhìn kỹ thấy hiện lên người đàn bà bước ra khỏi tấm ảnh) là biểu tượng nghệ thuật ám ảnh.',
      advanced:
        'Tác phẩm là tuyên ngôn đổi mới mỹ học của Nguyễn Minh Châu. Nhà văn đặt ra vấn đề nhức nhối: Không thể nhân danh cái đẹp nghệ thuật để thờ ơ trước nỗi đau trần thế. Lòng tốt nếu thiếu đi sự am hiểu sâu sắc hiện thực sẽ biến thành lòng tốt ngây thơ, thậm chí tàn nhẫn. Hình tượng người đàn bà hàng chài vô danh là hiện thân cho nghịch lý muôn đời của phận người: lam lũ, nhẫn nhục, chịu đựng đòn roi không phải vì ngu muội mà vì tình mẫu tử ("đàn bà trên thuyền chúng tôi phải sống cho con chứ không thể sống cho mình").',
    },
    characters: [
      {
        id: 'nguoi-dan-ba-hang-chai',
        name: 'Người đàn bà hàng chài (Vô danh)',
        role: 'Nhân vật trung tâm của chiều sâu tư tưởng',
        appearance: 'Trạc ngoài bốn mươi, cao lớn với những đường nét thô kệch, rỗ mặt, khuôn mặt mệt mỏi tái ngắt, tấm lưng áo bạc phếch rách rưới.',
        situation: 'Làm nghề chài lưới nhọc nhằn, đông con, thường xuyên bị chồng đánh đập tàn nhẫn "ba ngày một trận nhẹ, năm ngày một trận nặng".',
        speechAndActions:
          'Cam chịu đòn roi không kêu một tiếng, van xin tòa án: "Con lạy quý tòa... quý tòa bắt tội con cũng được, phạt tù con cũng được, đừng bắt con bỏ nó".',
        innerPsychology:
          'Thấu hiểu cuộc đời sâu sắc hơn cả chánh án và trí thức; sẵn sàng hy sinh tất cả vì sự sống còn của đàn con thơ trên chiếc thuyền nan giữa sóng gió.',
        symbolicMeaning: 'Bức tượng đài về tình mẫu tử, đức hy sinh và sức chịu đựng phi thường của người phụ nữ Việt Nam.',
        quote: 'Đàn bà ở thuyền chúng tôi phải sống cho con chứ không thể sống cho mình như ở trên đất được...',
      },
      {
        id: 'phung',
        name: 'Nghệ sĩ nhiếp ảnh Phùng',
        role: 'Nhân vật trần thuật và nhân vật nhận thức',
        appearance: 'Người lính từng cầm súng vào sinh ra tử, nay là nghệ sĩ nhiếp ảnh tận tụy.',
        situation: 'Đi săn lùng bức ảnh phong cảnh hoàn mỹ theo đơn đặt hàng.',
        speechAndActions:
          'Vui sướng nghẹt thở trước cái đẹp, phẫn nộ xông vào can thiệp cứu người phụ nữ khỏi gã chồng vũ phu.',
        innerPsychology:
          'Bàng hoàng, tự vấn, nhận thức lại toàn bộ vốn sống và quan niệm nghệ thuật của chính mình sau chuyến đi biển.',
        symbolicMeaning: 'Hiện thân của người nghệ sĩ chân chính luôn trăn trở và tự làm mới cái nhìn của mình trước hiện thực.',
      },
    ],
    artisticFeatures: {
      prominentCraft:
        'Nghệ thuật xây dựng tình huống truyện mang tính nhận thức sâu sắc; điểm nhìn trần thuật sắc sảo; nghệ thuật tổ chức cốt truyện tương phản; ngôn từ giản dị mà trĩu nặng triết lý.',
      language: 'Trầm tĩnh, khách quan, giàu chất suy tư chiêm nghiệm.',
      tone: 'Day dứt, trăn trở, thấu hiểu và xót xa.',
      structureOrPointOfView: 'Ngôi kể thứ nhất qua nhân vật Phùng, tạo độ tin cậy và chiều sâu tự vấn.',
      imageryOrRhetoric: 'Chiếc thuyền ngoài xa và chiếc thuyền lúc cập bến; tấm ảnh đen trắng và sắc hồng ban mai.',
      distinctiveDevices: [
        { name: 'Tình huống truyện nhận thức', description: 'Đặt nhân vật vào chuỗi nghịch lý liên tiếp để tự phá vỡ định kiến cũ.' },
        { name: 'Chi tiết nghệ thuật đa nghĩa', description: 'Ánh hồng bình minh và bóng người đàn bà bước ra từ bức ảnh lịch.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-buc-anh-canh-dat-troi-cho',
        detailName: 'Bức ảnh "Cảnh đắt trời cho"',
        excerptOrContext: 'Mũi thuyền in một nét mơ hồ lòe nhòe vào bầu sương mù màu trắng sữa có pha đôi chút màu hồng hồng do ánh mặt trời chiếu vào...',
        directMeaning: 'Khoảnh khắc thiên nhiên biển sớm mai tuyệt mỹ.',
        symbolicMeaning:
          'Ảo ảnh của cái đẹp nghệ thuật khi bị tách rời khỏi thực tế đời sống con người.',
        thematicConnection:
          'Cảnh báo người nghệ sĩ không được bằng lòng với cái đẹp bề ngoài mà quên đi hiện thực bên trong.',
      },
      {
        id: 'chi-tiet-nguoi-dan-ba-buoc-ra-khoi-anh',
        detailName: 'Hình bóng người đàn bà bước ra khỏi bức ảnh',
        excerptOrContext: 'Mỗi lần ngắm kỹ, tôi vẫn thấy hiện lên cái màu hồng hồng của ánh sương mai... và nếu nhìn lâu hơn bao giờ tôi cũng thấy người đàn bà ấy đang bước ra khỏi tấm ảnh...',
        directMeaning: 'Ấn tượng thị giác và tâm lý của nghệ sĩ Phùng khi nhìn bức ảnh trên tường.',
        symbolicMeaning:
          'Sự hiện diện không thể xua tan của nỗi đau đời sống thực tế trong lòng nghệ thuật chân chính.',
        thematicConnection:
          'Tuyên ngôn nghệ thuật vĩ đại: Nghệ thuật đích thực không bao giờ được quay lưng lại với nỗi đau của kiếp người.',
      },
    ],
    literaryValues: {
      ideologicalValue:
        'Đặt ra những vấn đề thời sự nhức nhối về bạo lực gia đình và số phận người phụ nữ thời hậu chiến; thức tỉnh lương tri người nghệ sĩ.',
      artisticValue:
        'Cột mốc đánh dấu sự chuyển mình mạnh mẽ của văn xuôi Việt Nam từ khuynh hướng sử thi sang khuynh hướng thế sự đời tư.',
      message:
        'Muốn thấu hiểu cuộc đời, hãy nhìn nhận nó từ nhiều chiều; đừng vội vàng phán xét con người bằng những lý thuyết sách vở vô hồn.',
      modernRelevance:
        'Đến nay vẫn mang tính thời sự nóng hổi về bảo vệ phụ nữ, trẻ em và phòng chống bạo lực gia đình.',
    },
    quick60s: {
      author: 'Nguyễn Minh Châu',
      genre: 'Truyện ngắn tự sự – triết lý thế sự',
      context: 'Năm 1983, thời kỳ mở đầu công cuộc Đổi mới văn học.',
      theme: 'Mối quan hệ giữa nghệ thuật và cuộc đời; cái nhìn đa diện về số phận con người.',
      coreFigureOrCharacter: 'Nhiếp ảnh gia Phùng và Người đàn bà hàng chài.',
      mainIdea: 'Nghệ thuật phải bắt nguồn từ cuộc đời và người nghệ sĩ phải có cái nhìn sâu sắc về nỗi đau con người.',
      keyArt: 'Tình huống nhận thức độc đáo; ngôn ngữ tự sự chiêm nghiệm; biểu tượng giàu tính triết lý.',
      goldenKeywords: ['Cảnh đắt trời cho', 'Chiếc thuyền ngoài xa', 'Người đàn bà hàng chài', 'Tòa án huyện', 'Bước ra khỏi tấm ảnh'],
      takeaway: 'Cái đẹp nghệ thuật chỉ có giá trị khi nó gắn liền và phục vụ cho sự sống thực của con người.',
    },
  },

  /* ======================================================================== */
  /* KHỐI LỚP 10 (BỔ SUNG): ĐĂM SĂN, CHINH PHỤ NGÂM, MÙA XUÂN CHÍN            */
  /* ======================================================================== */

  'dam-san': {
    slug: 'dam-san',
    title: 'Chiến thắng Mtao Mxây (Trích Sử thi Đăm Săn)',
    authorId: 'dan-gian-tay-nguyen',
    authorName: 'Nghệ nhân Dân gian Ê-đê',
    grade: 10,
    genre: 'Truyện ngắn',
    textbook: 'Ngữ văn 10 (Kết nối tri thức / Chân trời sáng tạo / Cánh diều)',
    year: 'Cổ đại (Truyền khẩu)',
    origin: 'Trích sử thi anh hùng Đăm Săn của dân tộc Ê-đê (Tây Nguyên).',
    topic: 'Người anh hùng sử thi bảo vệ danh dự, hạnh phúc gia đình và sự thịnh vượng của buôn làng.',
    centralTheme:
      'Ca ngợi vẻ đẹp oai hùng, sức mạnh phi thường và trọng danh dự của tù trưởng Đăm Săn trong cuộc chiến đòi lại vợ và thống nhất cộng đồng Tây Nguyên.',
    keywords: ['Sử thi Ê-đê', 'Đăm Săn', 'Mtao Mxây', 'Miếng trầu thần', 'Hát khan Tây Nguyên', 'Cồng chiêng'],
    hookIntro:
      'Âm vang cồng chiêng đại ngàn Tây Nguyên ngân lên hùng tráng trong trận quyết đấu giữa tù trưởng Đăm Săn và kẻ cướp vợ Mtao Mxây — bản anh hùng ca bất tử về sức mạnh và khát vọng phồn vinh của cộng đồng Ê-đê.',
    coverImage: WORK_IMAGES['dam-san'],
    historicContext: {
      timeframe: 'Thời kỳ công xã thị tộc chuyển sang chế độ phụ quyền cổ đại ở Tây Nguyên.',
      historicalBackground:
        'Các buôn làng Tây Nguyên thường xảy ra xung đột để bảo vệ lãnh thổ, giành lại người thân và hợp nhất thành những cộng đồng lớn mạnh, giàu có.',
      personalCircumstance:
        'Được các nghệ nhân Ê-đê hát kể (hát khan) bên bếp lửa nhà dài suốt nhiều đêm liền.',
      impactOnWork:
        'Mang đậm tư duy thần thoại, bút pháp phóng đại kỳ vĩ và nhịp điệu sử thi hào sảng.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Phần 1: Cuộc khiêu chiến và giao đấu giữa Đăm Săn và Mtao Mxây', content: 'Đăm Săn đến tận chân cầu thang nhà Mtao Mxây khiêu chiến; hai tù trưởng múa khiên đọ sức và Đăm Săn nhờ miếng trầu của Hơ Nhị cùng lời mách bảo của Ông Trời đã chiến thắng.' },
        { part: 'Phần 2: Đăm Săn thuyết phục dân làng Mtao Mxây đi theo mình', content: 'Dân làng Mtao Mxây nô nức mang của cải đi theo Đăm Săn bởi lòng ngưỡng mộ vị tù trưởng anh hùng, nhân nghĩa.' },
        { part: 'Phần 3: Tiệc ăn mừng chiến thắng bên nhà dài đại ngàn', content: 'Cảnh tiệc tùng linh đình, tiếng chiêng ngân vang khắp núi rừng, tôn vinh tầm vóc vĩ đại của Đăm Săn.' },
      ],
      shortSummary:
        'Khi Mtao Mxây thừa lúc Đăm Săn đi vắng đã cướp nàng Hơ Nhị về làm vợ, Đăm Săn lập tức kéo quân đến tận nhà kẻ thù khiêu chiến. Qua những hiệp múa khiên dũng mãnh và sự trợ giúp của thần linh, Đăm Săn hạ gục Mtao Mxây, cứu lại vợ, thu phục toàn bộ dân làng và mở hội ăn mừng vang dội núi rừng.',
      centralConflict: 'Xung đột giữa chính nghĩa, lòng trọng danh dự (Đăm Săn) và sự hèn nhát, xảo quyệt (Mtao Mxây).',
    },
    mainContentPoints: [
      'Hình tượng Đăm Săn trong màn khiêu chiến đĩnh đạc, trọng tinh thần thượng võ.',
      'Nghệ thuật tương phản giữa hai màn múa khiên: Mtao Mxây kém cỏi, huênh hoang >< Đăm Săn dũng mãnh như bão lốc.',
      'Sự đồng lòng của dân làng đi theo Đăm Săn — khát vọng hòa bình, thống nhất và hùng mạnh của bộ tộc.',
      'Bức tranh lễ hội ăn mừng chiến thắng rực rỡ sắc màu văn hóa cồng chiêng Tây Nguyên.',
    ],
    analysisLevels: {
      basic:
        'Đoạn trích kể lại cuộc chiến của chàng Đăm Săn đánh bại tù trưởng sắt Mtao Mxây để đòi lại người vợ Hơ Nhị. Qua đó ca ngợi sức mạnh, lòng dũng cảm của người anh hùng và ước mơ về cuộc sống ấm no của người Ê-đê.',
      detailed:
        'Nghệ nhân dân gian khắc họa Đăm Săn bằng bút pháp tương phản và phóng đại sử thi: khi Mtao Mxây múa khiên kêu lạch xạch như quả mướp khô, thì Đăm Săn múa một hơi vượt đồi tranh, vượt đồi lồ ô, gió nổi ầm ầm. Chiến thắng của Đăm Săn không phải là cuộc chiến trả thù đẫm máu mà là cuộc chiến thống nhất các buôn làng trong sự ngưỡng mộ tự nguyện của cộng đồng.',
      advanced:
        'Ở tầng sâu văn hóa học, "Chiến thắng Mtao Mxây" phản ánh bước chuyển lịch sử của xã hội Tây Nguyên cổ đại. Đăm Săn là sự kết tinh lý tưởng thẩm mỹ cộng đồng: nơi sức mạnh cá nhân hòa làm một với ý chí tập thể và vũ trụ quan vạn vật hữu linh (hình ảnh Ông Trời và miếng trầu thần). Ngôn ngữ đối thoại 3 lần cùng điệp cấu trúc tạo nên nhịp điệu hùng ca bất tận.',
    },
    characters: [
      {
        id: 'dam-san-char',
        name: 'Tù trưởng Đăm Săn',
        role: 'Người anh hùng sử thi trung tâm',
        appearance: 'Bắp chân to bằng cây xà ngang, bắp đùi to bằng ống bễ, sức ngang sức voi đực, hơi thở ầm ầm tựa sấm dậy.',
        situation: 'Vợ là Hơ Nhị bị tù trưởng Mtao Mxây bắt cóc.',
        speechAndActions: 'Khiêu chiến đàng hoàng, không đâm lén khi đối thủ đang đi xuống cầu thang; múa khiên vượt đồi tranh, đồi lồ ô; khoan dung kêu gọi dân làng đi theo.',
        innerPsychology: 'Trọng danh dự, kiêu hãnh, thượng võ và gắn bó máu thịt với vận mệnh buôn làng.',
        symbolicMeaning: 'Biểu tượng cho sức mạnh, khí phách và khát vọng thịnh vượng của dân tộc Ê-đê.',
      },
      {
        id: 'mtao-mxay-char',
        name: 'Tù trưởng Mtao Mxây (Tù trưởng Sắt)',
        role: 'Nhân vật phản diện đối trọng',
        appearance: 'Khiên tròn như đầu cú, gươm óng ánh như cái cầu vồng, đóng khố sọc gấp bỏ múi nhưng dáng đi tần ngần, do dự.',
        situation: 'Cướp vợ của Đăm Săn khi chàng vắng nhà.',
        speechAndActions: 'Sợ bị đâm lén, múa khiên kêu lạch xạch như quả mướp khô, chạy trốn quanh chuồng lợn, van xin tha mạng.',
        innerPsychology: 'Hèn nhát, xảo quyệt nhưng lại khoác lác, tự phụ.',
        symbolicMeaning: 'Phông nền tương phản làm bật dậy tầm vóc kỳ vĩ của người anh hùng Đăm Săn.',
      },
    ],
    artisticFeatures: {
      prominentCraft: 'Thủ pháp phóng đại (ngoa dụ) sử thi kết hợp với so sánh trùng điệp lấy chuẩn mực từ thiên nhiên đại ngàn Tây Nguyên.',
      language: 'Giàu nhịp điệu, giàu hình ảnh núi rừng, âm vang như lời hát kể khan bên bếp lửa.',
      tone: 'Hào hùng, sảng khoái, trang trọng mà pha chút hóm hỉnh dân gian khi miêu tả kẻ thù.',
      structureOrPointOfView: 'Kết cấu đối xứng, lặp lại có biến đổi (3 lần kêu gọi dân làng).',
      imageryOrRhetoric: 'Múa khiên vượt đồi tranh, chày mòn ném trúng vành tai, đoàn người đông như bầy cà tông.',
      distinctiveDevices: [
        { name: 'Phóng đại – Ngoo dụ sử thi', description: 'Mở rộng kích thước và sức mạnh con người sánh ngang tầm vóc vũ trụ.' },
        { name: 'Thủ pháp trùng điệp 3 lần', description: 'Đăm Săn gõ vào nhà dân làng 3 lần, khẳng định sự đồng thuận tuyệt đối của cộng đồng.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-mua-khien',
        detailName: 'Màn múa khiên đối lập giữa hai tù trưởng',
        excerptOrContext: 'Chàng vượt một đồi tranh, chàng vượt một đồi lồ ô. Chàng chạy vun vút qua phía đông, vun vút qua phía tây...',
        directMeaning: 'Tài năng võ nghệ tuyệt luân của Đăm Săn so với sự kém cỏi của Mtao Mxây.',
        symbolicMeaning: 'Vẻ đẹp hài hòa giữa con người anh hùng và thiên nhiên hùng vĩ Tây Nguyên.',
        thematicConnection: 'Khẳng định chiến thắng tất yếu của chính nghĩa và sức mạnh cộng đồng.',
      },
      {
        id: 'chi-tiet-chay-mon',
        detailName: 'Chiếc chày mòn ném trúng vành tai kẻ thù',
        excerptOrContext: 'Ông Trời mách Đăm Săn lấy một cái chày mòn ném vào vành tai Mtao Mxây làm giáp sắt của hắn rơi loảng xoảng.',
        directMeaning: 'Vũ khí thần kỳ phá vỡ lớp giáp sắt bất khả xâm phạm của Mtao Mxây.',
        symbolicMeaning: 'Chiếc chày giã gạo là vật dụng lao động đời thường của phụ nữ Ê-đê (xã hội mẫu hệ), tượng trưng cho sự trợ giúp của truyền thống văn hóa bản địa và thần linh.',
        thematicConnection: 'Gắn kết yếu tố kỳ ảo thần thoại với đời sống lao động thực tại của buôn làng.',
      },
    ],
    literaryValues: {
      ideologicalValue: 'Tôn vinh chủ nghĩa anh hùng cộng đồng, tinh thần thượng võ và khát vọng thống nhất, phồn vinh.',
      artisticValue: 'Mẫu mực chói sáng của thể loại sử thi anh hùng Tây Nguyên.',
      message: 'Sức mạnh đích thực luôn bắt nguồn từ lẽ phải, lòng trọng danh dự và sự gắn kết cộng đồng.',
      modernRelevance: 'Khơi dậy niềm tự hào về bản sắc văn hóa các dân tộc thiểu số Việt Nam và không gian văn hóa cồng chiêng Tây Nguyên.',
    },
    quick60s: {
      author: 'Nghệ nhân Dân gian Ê-đê',
      genre: 'Sử thi anh hùng (Khan)',
      context: 'Xã hội Ê-đê cổ đại ở Tây Nguyên.',
      theme: 'Cuộc chiến bảo vệ hạnh phúc gia đình và sự lớn mạnh của buôn làng.',
      coreFigureOrCharacter: 'Tù trưởng Đăm Săn và Mtao Mxây.',
      mainIdea: 'Ca ngợi vẻ đẹp kỳ vĩ, trọng danh dự của người anh hùng Đăm Săn.',
      keyArt: 'So sánh, phóng đại sử thi, đối lập tương phản, trùng điệp 3 lần.',
      goldenKeywords: ['Đăm Săn', 'Mtao Mxây', 'Múa khiên', 'Chày mòn', 'Tiệc mừng chiến thắng'],
      takeaway: 'Tượng đài bất hủ của sử thi Tây Nguyên về khí phách và tinh thần thượng võ.',
    },
  },

  'chinh-phu-ngam': {
    slug: 'chinh-phu-ngam',
    title: 'Tình cảnh lẻ loi của người chinh phụ',
    authorId: 'doan-thi-diem',
    authorName: 'Đặng Trần Côn & Đoàn Thị Điểm',
    grade: 10,
    genre: 'Thơ',
    textbook: 'Ngữ văn 10 (Chương trình THPT)',
    year: 'Nửa đầu thế kỷ XVIII',
    origin: 'Trích từ câu 193 đến câu 216 trong tác phẩm "Chinh phụ ngâm khúc".',
    topic: 'Nỗi cô đơn, sầu muộn và khát vọng hạnh phúc lứa đôi của người vợ có chồng đi đánh trận.',
    centralTheme:
      'Khắc họa tinh tế bi kịch cô đơn lẻ bóng và nỗi nhớ thương chồng da diết của người chinh phụ, qua đó lên án chiến tranh phi nghĩa và khẳng định quyền sống, quyền hạnh phúc của con người.',
    keywords: ['Chinh phụ ngâm', 'Song thất lục bát', 'Đèn biết chăng', 'Hoa đèn', 'Khắc giờ đằng đẵng', 'Chủ nghĩa nhân đạo'],
    hookIntro:
      'Trong đêm sâu vắng lặng, người thiếu phụ dạo gót hiên vắng, rèm cuốn rồi lại buông, đối bóng cùng ngọn đèn khuya — một trong những trang thơ nội tâm thổn thức và tinh tế nhất của văn học trung đại Việt Nam.',
    coverImage: WORK_IMAGES['chinh-phu-ngam'],
    historicContext: {
      timeframe: 'Nửa đầu thế kỷ XVIII – thời kỳ khủng hoảng của chế độ phong kiến Lê – Trịnh.',
      historicalBackground:
        'Những cuộc chiến tranh liên miên khiến bao trai tráng phải ra trận, để lại nơi hậu phương những người vợ trẻ mỏi mòn chờ đợi.',
      personalCircumstance:
        'Đặng Trần Côn cảm thương trước cảnh ly tán đã viết nguyên tác chữ Hán; Đoàn Thị Điểm (và Phan Huy Ích) dịch sang chữ Nôm bằng thể thơ song thất lục bát.',
      impactOnWork:
        'Chuyển từ cảm hứng sử thi ca ngợi công hầu sang cảm hứng nhân đạo xót thương số phận cá nhân.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Khổ 1 (8 câu đầu): Hành động và dáng vẻ cô đơn của người chinh phụ', content: 'Bước chân vô định ngoài hiên vắng, buông rèm lại cuốn rèm, đối diện với ngọn đèn khuya.' },
        { part: 'Khổ 2 (8 câu tiếp): Nỗi sầu thương trong đêm vắng và sự trôi chảy lê thê của thời gian', content: 'Tiếng gà báo canh, bóng cây hòe, khắc giờ đằng đẵng như niên, gượng đốt hương, gượng soi gương, gượng gảy đàn.' },
        { part: 'Khổ 3 (8 câu cuối): Nỗi nhớ thương gửi vào thiên nhiên mênh mang', content: 'Gửi lòng theo gió đông đến non Yên, nỗi nhớ nhung thăm thẳm như đường lên trời.' },
      ],
      shortSummary:
        'Đoạn trích diễn tả tâm trạng cô đơn tột cùng của người chinh phụ qua chuỗi hành động lặp đi lặp lại trong vô thức, sự đối diện với ngọn đèn khuya và cảm nhận thời gian ngưng đọng, từ đó bộc lộ nỗi nhớ thương chồng khôn nguôi nơi biên ải xa xôi.',
      emotionalArc: 'Cô đơn trống trải -> Khắc khoải, bồn chồn -> Nhớ thương da diết vượt không gian.',
    },
    mainContentPoints: [
      'Ngoại hiện hóa tâm trạng cô đơn qua cử chỉ dạo hiên vắng, buông rèm – cuốn rèm và đối bóng cùng ngọn đèn khuya.',
      'Bi kịch của tuổi xuân phai tàn trong cảm nhận "khắc giờ đằng đẵng như niên" và ba chữ "gượng" đầy xót xa.',
      'Khát vọng đồng cảm và tình yêu chung thủy vượt qua khoảng cách nghìn trùng tới núi Yên.',
    ],
    analysisLevels: {
      basic:
        'Đoạn trích miêu tả nỗi cô đơn, buồn tủi của người vợ trẻ khi chồng đi lính phương xa. Nàng thao thức suốt đêm bên ngọn đèn, làm việc gì cũng thấy lẻ loi và luôn hướng lòng nhớ về nơi biên ải của chồng.',
      detailed:
        'Bằng thể thơ song thất lục bát giàu nhạc tính cùng thủ pháp điệp liên hoàn ("Đèn có biết dường bằng chẳng biết / Lòng thiếp riêng bi thiết mà thôi"), đoạn thơ đã biến ngọn đèn và cái bóng thành nhân chứng cho nỗi cô đơn tuyệt đối. Ba hành động "gượng đốt hương", "gượng soi gương", "gượng gảy đàn" cho thấy mọi thú vui tao nhã đều bất lực trước nỗi nhớ chồng.',
      advanced:
        'Đoạn trích là đỉnh cao của nghệ thuật miêu tả tâm lý trong văn học trung đại thế kỷ XVIII: thời gian vật lý bị biến dạng thành thời gian tâm lý ("Khắc giờ đằng đẵng như niên"), không gian tâm tưởng mở rộng đến vô cùng ("Trời thăm thẳm xa vời khôn thấu"). Qua tiếng thở dài của người chinh phụ, tác giả cất lên tiếng nói nhân đạo đòi quyền hưởng hạnh phúc trần thế cho người phụ nữ.',
    },
    poetryAnalysis: [
      {
        id: 'cpn-k1',
        stanzaNumber: 1,
        title: 'Khổ 1: Dáng hình lẻ bóng và cuộc độc thoại với ngọn đèn khuya',
        excerpt:
          'Dạo hiên vắng thầm gieo từng bước,\nNgồi rèm thưa rủ thác đòi phen.\nNgoài rèm thước chẳng mách tin,\nTrong rèm, dường đã có đèn biết chăng?\nĐèn có biết dường bằng chẳng biết,\nLòng thiếp riêng bi thiết mà thôi.\nBuồn rầu nói chẳng nên lời,\nHoa đèn kia với bóng người khá thương!',
        contentSummary: 'Người chinh phụ bước đi thầm lặng nơi hiên vắng, cuốn rồi lại buông rèm chờ tin chim thước, cuối cùng chỉ biết giãi bày cùng ngọn đèn khuya vô tri.',
        poeticImages: [
          { image: 'Rèm thưa rủ thác đòi phen', meaning: 'Hành động buông rèm xuống rồi lại cuốn rèm lên nhiều lần phản chiếu sự bồn chồn, khắc khoải chờ mong vô vọng.' },
          { image: 'Hoa đèn kia với bóng người', meaning: 'Sự phân thân đầy bi kịch: người phụ nữ chỉ còn biết bầu bạn với cái bóng của chính mình và đầu bấc đèn lụi tàn.' },
        ],
        keyWords: [
          { word: 'Thầm gieo từng bước', nuance: 'Bước chân nặng nề, lặng lẽ rơi vào khoảng không tĩnh mịch.' },
          { word: 'Bi thiết', nuance: 'Đau đớn, thiết tha đến mức nghẹn ngào không nói nên lời.' },
        ],
        rhetoricalDevices: [
          { device: 'Điệp từ liên hoàn (vòng/bắc cầu)', effect: 'Ngoài rèm - Trong rèm, Đèn biết chăng - Đèn có biết: tạo âm hưởng triền miên, quẩn quanh không lối thoát.' },
          { device: 'Câu hỏi tu từ', effect: 'Khắc sâu khát khao tìm kiếm một sự sẻ chia giữa đêm trường lạnh lẽo.' },
        ],
        roleInWork: 'Mở đầu bức tranh tâm cảnh bằng sự cô đơn vây bủa từ không gian bên ngoài vào tận đáy lòng.',
      },
      {
        id: 'cpn-k2',
        stanzaNumber: 2,
        title: 'Khổ 2: Thời gian tâm lý đằng đẵng và những hành động "gượng"',
        excerpt:
          'Gà eo óc gáy sương năm trống,\nHòe phất phơ rủ bóng bốn bên.\nKhắc giờ đằng đẵng như niên,\nMối sầu dằng dặc tựa miền biển xa.\nHương gượng đốt hồn đà mê mải,\nGương gượng soi lệ lại châu chan.\nSắt cầm gượng gảy ngón đàn,\nDây uyên kinh đứt, phím loan ngại chùng.',
        contentSummary: 'Cảm nhận thời gian trôi chậm chạp lê thê suốt năm canh giờ và sự bế tắc khi tìm cách giải khuây.',
        poeticImages: [
          { image: 'Khắc giờ đằng đẵng như niên', meaning: 'Một khắc đồng hồ dài như cả một năm ròng vì nỗi chờ đợi mỏi mòn.' },
          { image: 'Dây uyên kinh đứt, phím loan ngại chùng', meaning: 'Nỗi ám ảnh dự cảm chẳng lành về sự chia lìa của tình nghĩa vợ chồng nơi chiến địa.' },
        ],
        keyWords: [
          { word: 'Gượng (lặp 3 lần)', nuance: 'Làm một cách miễn cưỡng, cố gượng dậy mà lòng hoàn toàn tan nát.' },
        ],
        rhetoricalDevices: [
          { device: 'So sánh phóng đại', effect: 'Đằng đẵng như niên, dằng dặc tựa miền biển xa: hữu hình hóa khối sầu vô tận.' },
        ],
        roleInWork: 'Đẩy bi kịch nội tâm lên đỉnh điểm của sự bế tắc và dự cảm lo âu.',
      },
    ],
    artisticFeatures: {
      prominentCraft: 'Thể thơ song thất lục bát cổ điển đạt tới độ hoàn mỹ về nhạc điệu (vần lưng, vần chân, thanh bằng – trắc đan xen); bút pháp tả cảnh ngụ tình và điệp liên hoàn.',
      language: 'Từ láy giàu giá trị biểu cảm (thầm gieo, eo óc, phất phơ, đằng đẵng, dằng dặc, thăm thẳm).',
      tone: 'Trầm buồn, thiết tha, thổn thức như tiếng đàn bầu trong đêm khuya.',
      structureOrPointOfView: 'Độc thoại nội tâm kết hợp điểm nhìn dịch chuyển từ gần đến xa.',
      imageryOrRhetoric: 'Hoa đèn – bóng người, chim thước, đàn sắt cầm, gió đông – non Yên.',
      distinctiveDevices: [
        { name: 'Điệp ngữ bắc cầu (Liên hoàn)', description: 'Nối kết các câu thơ tạo cảm giác nỗi buồn luẩn quẩn, triền miên.' },
        { name: 'Bút pháp tả cảnh ngụ tình', description: 'Mỗi cảnh vật (gà gáy sương, bóng hòe, ngàn dâu) đều nhuốm màu tâm trạng cô đơn.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-hoa-den',
        detailName: 'Hình ảnh "Hoa đèn kia với bóng người khá thương"',
        excerptOrContext: 'Buồn rầu nói chẳng nên lời / Hoa đèn kia với bóng người khá thương!',
        directMeaning: 'Đầu bấc đèn dầu cháy kết thành hoa đèn đối diện với cái bóng của người chinh phụ trên vách.',
        symbolicMeaning: 'Biểu tượng cho tuổi thanh xuân rực rỡ nhưng đang hao gầy, tự đốt cháy mình trong đêm trường cô quạnh.',
        thematicConnection: 'Tố cáo gián tiếp chiến tranh phong kiến đã cướp đi hạnh phúc lứa đôi của người phụ nữ.',
      },
    ],
    literaryValues: {
      humanitarianValue: 'Trân trọng khát vọng tình yêu, hạnh phúc lứa đôi trần thế và xót thương cho tuổi xuân người phụ nữ.',
      artisticValue: 'Kiệt tác mẫu mực bậc nhất của thể loại ngâm khúc song thất lục bát dân tộc.',
      message: 'Hạnh phúc bình dị của con người là vô giá; chiến tranh phi nghĩa luôn để lại nỗi đau sâu thẳm nơi hậu phương.',
      modernRelevance: 'Vẫn lay động trái tim người đọc hôm nay bởi vẻ đẹp của lòng chung thủy và tiếng nói nhân văn.',
    },
    quick60s: {
      author: 'Đặng Trần Côn (nguyên tác Hán) – Đoàn Thị Điểm (diễn Nôm)',
      genre: 'Ngâm khúc (Song thất lục bát)',
      context: 'Nửa đầu thế kỷ XVIII, nhiều cuộc chiến tranh phong kiến nổ ra.',
      theme: 'Nỗi cô đơn lẻ bóng và niềm thương nhớ chồng của người chinh phụ.',
      coreFigureOrCharacter: 'Người chinh phụ nơi khuê phòng vắng lặng.',
      mainIdea: 'Khắc họa nỗi sầu cô đơn để khẳng định khát vọng hạnh phúc lứa đôi và lên án chiến tranh.',
      keyArt: 'Thể thơ song thất lục bát, điệp ngữ liên hoàn, từ láy giàu nhạc tính, tả cảnh ngụ tình.',
      goldenKeywords: ['Rủ thác đòi phen', 'Hoa đèn – bóng người', 'Khắc giờ đằng đẵng', 'Ba chữ Gượng', 'Non Yên'],
      takeaway: 'Tiếng lòng thổn thức đòi quyền được yêu và được sống hạnh phúc của người phụ nữ trung đại.',
    },
  },

  'mua-xuan-chin': {
    slug: 'mua-xuan-chin',
    title: 'Mùa xuân chín',
    authorId: 'han-mac-tu',
    authorName: 'Hàn Mặc Tử',
    grade: 10,
    genre: 'Thơ',
    textbook: 'Ngữ văn 10 (Kết nối tri thức với cuộc sống – GDPT 2018)',
    year: '1937',
    origin: 'Rút từ phần "Hương thơm" trong tập "Đau thương" (Thơ Điên).',
    topic: 'Bức tranh thiên nhiên mùa xuân làng quê Việt Nam độ viên mãn và nỗi niềm hoài niệm của thi nhân.',
    centralTheme:
      'Vẻ đẹp rạng rỡ, căng tràn sức sống của mùa xuân và con người ở độ "chín", đan xen với nỗi bâng khuâng, tiếc nuối trước sự trôi chảy của thời gian và khát vọng giao cảm với cuộc đời.',
    keywords: ['Hàn Mặc Tử', 'Mùa xuân chín', 'Nắng mới', 'Khói mơ tan', 'Ngày mai trong đám xuân xanh ấy', 'Dọc bờ sông trắng'],
    hookIntro:
      'Một bức tranh xuân trong trẻo, dát vàng ánh nắng và rộn rã tiếng hát vắt vẻo trên sườn đồi, nhưng ẩn sâu dưới độ "chín" viên mãn ấy là nhịp thở gấp gáp, nghẹn ngào của một linh hồn yêu đời đến đau đớn.',
    coverImage: WORK_IMAGES['mua-xuan-chin'],
    historicContext: {
      timeframe: 'Năm 1937, thời kỳ nở rộ của phong trào Thơ Mới.',
      historicalBackground:
        'Thơ Mới đem đến cái nhìn trẻ trung, giàu cảm giác trực tiếp về thiên nhiên và tình yêu.',
      personalCircumstance:
        'Sáng tác khi Hàn Mặc Tử bắt đầu phát hiện căn bệnh hiểm nghèo, khiến tình yêu sự sống và nỗi tiếc nuối tuổi xuân càng trở nên da diết.',
      impactOnWork:
        'Tạo nên sự đan cài độc đáo giữa bức tranh ngoại cảnh tươi sáng rực rỡ và tâm cảnh bâng khuâng, xa vắng.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Khổ 1: Khung cảnh mùa xuân mới bắt đầu trong sắc nắng và khói mơ', content: 'Làn nắng ửng, khói mơ tan, đôi mái nhà tranh lấm tấm vàng, bóng xuân sang trên giàn thiên lý.' },
        { part: 'Khổ 2: Sức sống mùa xuân căng tràn và tiếng hát của những cô thôn nữ', content: 'Sóng cỏ xanh tươi gợn tới trời, bao cô thôn nữ hát trên đồi và nỗi bâng khuâng về ngày xuân xanh theo chồng.' },
        { part: 'Khổ 3: Tiếng hát mùa xuân độ "chín" hòa quyện cùng thiên nhiên vũ trụ', content: 'Tiếng ca vắt vẻo lưng chừng núi, hổn hển như lời của nước mây, lời thầm thĩ với ai dưới trúc.' },
        { part: 'Khổ 4: Nỗi nhớ quê hương và hình ảnh người chị gánh thóc dọc bờ sông trắng', content: 'Khách xa gặp lúc mùa xuân chín, lòng trí bâng khuâng sực nhớ làng với hình ảnh chị ấy năm nay còn gánh thóc.' },
      ],
      shortSummary:
        'Bài thơ mở ra bức tranh mùa xuân thôn dã ngập tràn sắc vàng của nắng mới, sắc xanh của sóng cỏ và tiếng ca trong trẻo của các cô thôn nữ đang độ xuân thì. Giữa khung cảnh mùa xuân đạt đến độ viên mãn ("chín"), người khách xa bỗng chạnh lòng thương nhớ quê hương và người chị tần tảo bên bờ sông trắng nắng chang chang.',
      emotionalArc: 'Trong trẻo, rạo rực -> Đắm say, viên mãn -> Bâng khuâng, khắc khoải nhớ thương.',
    },
    mainContentPoints: [
      'Bức tranh xuân trong trẻo, thơ mộng với sự giao hòa tinh tế của màu sắc và ánh sáng (nắng ửng, khói mơ, lấm tấm vàng).',
      'Hình tượng "mùa xuân chín" vừa là độ viên mãn của đất trời vừa là tuổi xuân thì rực rỡ của người thiếu nữ.',
      'Tâm trạng bâng khuâng, hoài niệm của "khách xa" hướng về cuộc sống lao động bình dị nơi quê nhà.',
    ],
    analysisLevels: {
      basic:
        'Bài thơ vẽ nên cảnh sắc mùa xuân tươi đẹp, tràn đầy sức sống ở làng quê Việt Nam cùng hình ảnh những cô gái trẻ trung, yêu đời. Qua đó thể hiện tình yêu thiên nhiên, yêu cuộc sống và nỗi nhớ quê hương tha thiết của Hàn Mặc Tử.',
      detailed:
        'Nhan đề "Mùa xuân chín" là một kết hợp từ mới lạ, chuyển hóa khái niệm thời gian vô hình thành trạng thái hữu hình căng mọng, viên mãn. Tuy nhiên, trong mỹ học của Hàn Mặc Tử, khi cái đẹp đạt đến độ "chín" cũng là lúc chớm bước sang sự phai tàn ("Ngày mai trong đám xuân xanh ấy / Có kẻ theo chồng bỏ cuộc chơi").',
      advanced:
        'Về mặt thi pháp, "Mùa xuân chín" sử dụng hệ thống ngôn từ giàu tính nhạc và nghệ thuật chuyển đổi cảm giác (ẩn dụ chuyển đổi cảm giác: "Tiếng ca vắt vẻo lưng chừng núi / Hổn hển như lời của nước mây"). Điểm nhìn dịch chuyển từ hiện tại rực rỡ sang ký ức xa xăm ở khổ cuối ("Dọc bờ sông trắng nắng chang chang") thể hiện bi kịch của người nghệ sĩ bị cầm tù trong bệnh tật nhưng tâm hồn luôn vươn ra giao cảm mãnh liệt với trần gian.',
    },
    poetryAnalysis: [
      {
        id: 'mxc-k1-2',
        stanzaNumber: 1,
        title: 'Khổ 1 & 2: Sắc nắng xuân mới và sóng cỏ xuân xanh',
        excerpt:
          'Trong làn nắng ửng: khói mơ tan,\nĐôi mái nhà tranh lấm tấm vàng.\nSột soạt gió may trêu tà áo,\nTrên giàn thiên lý. Bóng xuân sang.\n\nSóng cỏ xanh tươi gợn tới trời\nBao cô thôn nữ hát trên đồi;\n– Ngày mai trong đám xuân xanh ấy,\nCó kẻ theo chồng bỏ cuộc chơi...',
        contentSummary: 'Khung cảnh làng quê bừng sáng trong nắng xuân dịu dàng và không gian bao la của đồi cỏ xanh rộn tiếng hát thôn nữ.',
        poeticImages: [
          { image: 'Đôi mái nhà tranh lấm tấm vàng', meaning: 'Ánh nắng xuân rắc từng hạt vàng ấm áp lên vẻ đẹp mộc mạc, thanh bình của làng quê.' },
          { image: 'Sóng cỏ xanh tươi gợn tới trời', meaning: 'Không gian mở rộng khoáng đạt, sức sống mùa xuân dâng trào như những đợt sóng xanh bất tận.' },
        ],
        keyWords: [
          { word: 'Nắng ửng', nuance: 'Sắc nắng hồng hào như đôi má thiếu nữ tuổi dậy thì.' },
          { word: 'Bóng xuân sang', nuance: 'Dấu chấm câu giữa dòng tạo nhịp ngập ngừng, ngỡ ngàng trước bước chân hữu hình của mùa xuân.' },
        ],
        rhetoricalDevices: [
          { device: 'Nhân hóa', effect: '"Gió may trêu tà áo": biến thiên nhiên thành người bạn tình tinh nghịch, đa tình.' },
          { device: 'Ẩn dụ', effect: '"Xuân xanh" vừa là cỏ xuân vừa là tuổi trẻ của những cô thôn nữ.' },
        ],
        roleInWork: 'Khởi mở không gian xuân tươi tắn và gieo nốt nhạc bâng khuâng đầu tiên về sự chia phôi của tuổi trẻ.',
      },
      {
        id: 'mxc-k3-4',
        stanzaNumber: 2,
        title: 'Khổ 3 & 4: Âm vang tiếng hát lưng đồi và nỗi nhớ bờ sông trắng',
        excerpt:
          'Tiếng ca vắt vẻo lưng chừng núi,\nHổn hển như lời của nước mây,\nThầm thĩ với ai ngồi dưới trúc,\nNghe ra ý vị và thơ ngây...\n\nKhách xa gặp lúc mùa xuân chín,\nLòng trí bâng khuâng sực nhớ làng:\n– “Chị ấy, năm nay còn gánh thóc\nDọc bờ sông trắng nắng chang chang?”',
        contentSummary: 'Tiếng hát xuân hòa vào mây nước và nỗi khắc khoải nhớ thương người chị tảo tần nơi quê cũ.',
        poeticImages: [
          { image: 'Tiếng ca vắt vẻo lưng chừng núi', meaning: 'Âm thanh được hữu hình hóa như một dải lụa mềm mại treo lơ lửng giữa sườn non.' },
          { image: 'Bờ sông trắng nắng chang chang', meaning: 'Không gian ký ức chói lòa ánh sáng, khắc họa dáng hình lao động nhọc nhằn mà thơ mộng của người chị.' },
        ],
        keyWords: [
          { word: 'Hổn hển', nuance: 'Nhịp thở gấp gáp, rạo rực của tình yêu và sức sống tuổi trẻ.' },
          { word: 'Sực nhớ', nuance: 'Ký ức bỗng nhiên ùa về bất chợt, đánh thức nỗi nhớ quê da diết.' },
        ],
        rhetoricalDevices: [
          { device: 'Ẩn dụ chuyển đổi cảm giác', effect: 'Biến âm thanh thính giác ("tiếng ca") thành hình ảnh thị giác ("vắt vẻo") và nhịp thở xúc giác ("hổn hển").' },
        ],
        roleInWork: 'Kết tinh chiều sâu nhân bản: từ vẻ đẹp thiên nhiên hướng về con người lao động quê hương.',
      },
    ],
    artisticFeatures: {
      prominentCraft: 'Sự kết hợp hài hòa giữa bút pháp cổ điển chấm phá và cảm thức tượng trưng Thơ Mới; nghệ thuật chuyển đổi cảm giác tài hoa.',
      language: 'Trong sáng, giàu từ láy tượng hình – tượng thanh (lấm tấm, sột soạt, vắt vẻo, hổn hển, thầm thĩ, bâng khuâng).',
      tone: 'Trong trẻo, say đắm chuyển dần sang trầm lắng, khắc khoải.',
      structureOrPointOfView: 'Ngắt nhịp linh hoạt (đặc biệt là dấu chấm giữa câu 4 khổ 1), đan xen lời trần thuật và độc thoại nội tâm.',
      imageryOrRhetoric: 'Nắng ửng, khói mơ, sóng cỏ, tiếng ca vắt vẻo, bờ sông trắng.',
      distinctiveDevices: [
        { name: 'Ẩn dụ chuyển đổi cảm giác', description: 'Tạo nên thế giới nghệ thuật đa thanh, đa sắc và sống động.' },
        { name: 'Tương phản thời gian', description: 'Đối sánh hiện tại viên mãn với ngày mai phai tàn và quá khứ hoài niệm.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-bo-song-trang',
        detailName: 'Hình ảnh "Chị ấy năm nay còn gánh thóc / Dọc bờ sông trắng nắng chang chang?"',
        excerptOrContext: 'Khách xa gặp lúc mùa xuân chín... Chị ấy, năm nay còn gánh thóc / Dọc bờ sông trắng nắng chang chang?',
        directMeaning: 'Ký ức về người chị quê nhà tần tảo gánh thóc giữa trưa nắng bên bờ sông.',
        symbolicMeaning: 'Điểm tựa tâm hồn trần thế níu giữ nhà thơ với cuộc đời bình dị, nghĩa tình.',
        thematicConnection: 'Mở rộng biên độ bài thơ từ bức tranh phong cảnh sang nỗi niềm nhân thế sâu nặng.',
      },
    ],
    literaryValues: {
      humanitarianValue: 'Tình yêu tha thiết với vẻ đẹp làng quê, tuổi trẻ và lòng trắc ẩn với người lao động.',
      artisticValue: 'Một trong những thi phẩm mùa xuân toàn bích nhất của phong trào Thơ Mới.',
      message: 'Hãy trân trọng từng khoảnh khắc tươi đẹp của tuổi trẻ và luôn giữ trọn nghĩa tình với quê hương nguồn cội.',
      modernRelevance: 'Đánh thức khả năng rung cảm thẩm mỹ tinh tế trước thiên nhiên và vẻ đẹp văn hóa làng quê Việt Nam.',
    },
    quick60s: {
      author: 'Hàn Mặc Tử',
      genre: 'Thơ bảy chữ (Thơ Mới)',
      context: 'Năm 1937, in trong tập "Đau thương".',
      theme: 'Bức tranh mùa xuân viên mãn và nỗi nhớ quê hương của người khách xa.',
      coreFigureOrCharacter: 'Cái tôi trữ tình "khách xa", các cô thôn nữ và người chị gánh thóc.',
      mainIdea: 'Ca ngợi vẻ đẹp căng tràn của mùa xuân, đồng thời gửi gắm niềm khắc khoải giao cảm với cuộc đời.',
      keyArt: 'Ẩn dụ chuyển đổi cảm giác, ngôn từ giàu nhạc tính, dấu câu sáng tạo.',
      goldenKeywords: ['Nắng ửng khói mơ', 'Lấm tấm vàng', 'Sóng cỏ xanh tươi', 'Tiếng ca vắt vẻo', 'Bờ sông trắng nắng chang chang'],
      takeaway: 'Khúc ca mùa xuân vừa rạo rực ánh sáng vừa lắng đọng tình quê.',
    },
  },

  /* ======================================================================== */
  /* KHỐI LỚP 11 (BỔ SUNG): TRÀNG GIANG, VỘI VÀNG, HAI ĐỨA TRẺ, SÔNG HƯƠNG    */
  /* ======================================================================== */

  'trang-giang': {
    slug: 'trang-giang',
    title: 'Tràng giang',
    authorId: 'huy-can',
    authorName: 'Huy Cận',
    grade: 11,
    genre: 'Thơ',
    textbook: 'Ngữ văn 11 (Chương trình THPT)',
    year: '1939',
    origin: 'In trong tập "Lửa thiêng" (1940) – tập thơ đầu tay của Huy Cận.',
    topic: 'Nỗi sầu vạn cổ của cái tôi cô đơn trước vũ trụ mênh mông và lòng yêu nước thầm kín.',
    centralTheme:
      'Qua bức tranh thiên nhiên sông dài trời rộng mang vẻ đẹp cổ điển mà hiu quạnh, bài thơ bộc lộ nỗi cô đơn, bơ vơ của cái tôi Thơ Mới và niềm khát khao giao cảm với con người, với quê hương đất nước.',
    keywords: ['Huy Cận', 'Tràng giang', 'Lửa thiêng', 'Bâng khuâng trời rộng nhớ sông dài', 'Củi một cành khô', 'Không khói hoàng hôn'],
    hookIntro:
      'Một dòng sông dài mênh mang vừa chảy trên mặt đất vừa chảy trong tâm tưởng: nơi cánh củi khô lạc loài giữa sóng nước điệp điệp và nỗi nhớ quê hương thức dậy ngay cả khi không thấy khói hoàng hôn.',
    coverImage: WORK_IMAGES['trang-giang'],
    historicContext: {
      timeframe: 'Mùa thu năm 1939, trước thềm Đại chiến thế giới thứ II.',
      historicalBackground:
        'Thế hệ thanh niên trí thức Việt Nam đương thời rơi vào tâm trạng bi kịch, bế tắc trước thực tại mất nước, tìm đến thiên nhiên vũ trụ để giải tỏa nỗi sầu nhân thế.',
      personalCircumstance:
        'Được gợi cảm hứng khi Huy Cận đứng ngắm cảnh sông Hồng mênh mang sóng nước tại bến Chèm (Hà Nội) vào những chiều thu.',
      impactOnWork:
        'Kết tinh vẻ đẹp "cổ điển mà hiện đại": hình thức Đường thi trang nhã ôm chứa nỗi cô đơn hiện sinh của thời đại mới.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Lời đề từ: "Bâng khuâng trời rộng nhớ sông dài"', content: 'Thâu tóm toàn bộ thần thái bài thơ: cái đẹp hùng vĩ của vũ trụ và nỗi sầu bâng khuâng của lòng người.' },
        { part: 'Khổ 1: Bức tranh sóng nước tràng giang và hình ảnh cành củi khô lạc dòng', content: 'Sóng gợn điệp điệp, thuyền – nước song song mà chia ly, một cành củi khô lạc mấy dòng.' },
        { part: 'Khổ 2: Không gian cồn nhỏ lơ thơ, bến cô liêu và vũ trụ ba chiều cao – sâu – rộng', content: 'Cồn nhỏ gió đìu hiu, chợ chiều đã vãn, nắng xuống – trời lên sâu chót vót.' },
        { part: 'Khổ 3: Nỗi khát khao giao cảm giữa cảnh bèo dạt và bờ xanh tiếp bãi vàng', content: 'Không một chuyến đò ngang, không cầu nối, chỉ có bèo dạt hàng nối hàng.' },
        { part: 'Khổ 4: Cảnh hoàng hôn hùng vĩ và nỗi nhớ quê hương da diết', content: 'Mây cao đùn núi bạc, cánh chim nhỏ nghiêng bóng chiều và lòng quê dợn dợn vời con nước.' },
      ],
      shortSummary:
        'Trước dòng sông Hồng mênh mang buổi chiều tà, nhà thơ cảm nhận sâu sắc sự chia lìa, cô quạnh của vạn vật: từ con thuyền, cành củi khô, cánh bèo dạt đến cánh chim chiều. Không gian càng mở rộng lên cao ("sâu chót vót") và trải dài ("bờ xanh tiếp bãi vàng"), con người càng thấy mình nhỏ bé và dâng trào nỗi nhớ quê hương tha thiết.',
      emotionalArc: 'Buồn điệp điệp -> Cô liêu, rợn ngợp trước vũ trụ -> Khát khao giao cảm -> Nhớ quê hương sâu thẳm.',
    },
    mainContentPoints: [
      'Âm hưởng "sầu vạn cổ" qua hình ảnh sông nước mênh mang và biểu tượng hiện đại "Củi một cành khô lạc mấy dòng".',
      'Nghệ thuật tạo hình không gian ba chiều (sông dài – trời rộng – sâu chót vót) làm nổi bật cái tôi nhỏ bé, cô liêu.',
      'Phủ định liên tiếp ("Đâu tiếng làng xa", "Không một chuyến đò", "Không cầu") khắc sâu sự thiếu vắng hơi ấm con người.',
      'Vẻ đẹp Đường thi tráng lệ ở khổ cuối và sự thăng hoa của tình yêu quê hương đất nước ("Không khói hoàng hôn cũng nhớ nhà").',
    ],
    analysisLevels: {
      basic:
        'Bài thơ miêu tả cảnh sông Hồng rộng lớn, vắng lặng vào buổi chiều tà. Qua cảnh thiên nhiên đượm buồn, Huy Cận bộc lộ nỗi cô đơn của con người trước vũ trụ và tình yêu quê hương đất nước sâu sắc.',
      detailed:
        'Sự kết hợp giữa chất cổ điển và hiện đại làm nên sức hấp dẫn độc đáo của "Tràng giang": nếu mây đùn núi bạc, chim nghiêng cánh nhỏ mang bóng dáng thơ Đỗ Phủ, Vương Duy, thì hình ảnh "Củi một cành khô lạc mấy dòng" và cụm từ "sâu chót vót" lại là sáng tạo táo bạo của Thơ Mới, biểu đạt cảm giác bơ vơ của thế hệ thanh niên mất nước.',
      advanced:
        'Xét trên bình diện thi pháp không gian, "Tràng giang" là cuộc đối thoại bất cân xứng giữa cái Vô cùng của vũ trụ và cái Hữu hạn của kiếp người. Đặc biệt, hai câu kết đối thoại trực tiếp với thơ Thôi Hiệu ("Yên ba giang thượng sử nhân sầu"): người xưa nhìn khói sóng mới nhớ nhà, còn Huy Cận không cần khói hoàng hôn mà nỗi nhớ quê hương vẫn luôn thường trực, dợn dợn trong tim — nỗi nhớ nước ngay khi đang đứng trên đất mẹ.',
    },
    poetryAnalysis: [
      {
        id: 'tg-k1-2',
        stanzaNumber: 1,
        title: 'Khổ 1 & 2: Sóng nước điệp điệp và không gian "sâu chót vót"',
        excerpt:
          'Sóng gợn tràng giang buồn điệp điệp,\nCon thuyền xuôi mái nước song song.\nThuyền về nước lại, sầu trăm ngả;\nCủi một cành khô lạc mấy dòng.\n\nLơ thơ cồn nhỏ gió đìu hiu,\nĐâu tiếng làng xa vãn chợ chiều.\nNắng xuống, trời lên sâu chót vót;\nSông dài, trời rộng, bến cô liêu.',
        contentSummary: 'Sự chia lìa giữa thuyền và nước, kiếp người lạc loài như cành củi khô và sự rợn ngợp trước không gian vũ trụ mở rộng đến vô cực.',
        poeticImages: [
          { image: 'Củi một cành khô lạc mấy dòng', meaning: 'Hình ảnh thực đầy góc cạnh của Thơ Mới, biểu tượng cho thân phận con người nhỏ bé, khô héo, trôi nổi vô định giữa dòng đời.' },
          { image: 'Nắng xuống, trời lên sâu chót vót', meaning: 'Cách dùng từ phi thường của Huy Cận: độ cao của bầu trời được cảm nhận như một vực sâu thăm thẳm lộn ngược trên đầu.' },
        ],
        keyWords: [
          { word: 'Tràng giang', nuance: 'Hai âm mở "ang" ngân dài gợi ra một dòng sông mênh mang cả về chiều rộng lẫn chiều dài lịch sử.' },
          { word: 'Điệp điệp', nuance: 'Nỗi buồn gối lên nhau như từng đợt sóng không bao giờ dứt.' },
        ],
        rhetoricalDevices: [
          { device: 'Tiểu đối cổ điển', effect: '"Thuyền về >< nước lại", "Nắng xuống >< trời lên", "Sông dài >< trời rộng": khắc sâu sự chia cắt và đối lập.' },
          { device: 'Đảo ngữ', effect: '"Củi một cành khô", "Lơ thơ cồn nhỏ": nhấn mạnh sự ít ỏi, trơ trọi.' },
        ],
        roleInWork: 'Thiết lập không gian vũ trụ rợn ngợp và tâm thức lạc loài của chủ thể trữ tình.',
      },
      {
        id: 'tg-k3-4',
        stanzaNumber: 2,
        title: 'Khổ 3 & 4: Khát khao giao cảm và nỗi nhớ quê hương thường trực',
        excerpt:
          'Bèo dạt về đâu, hàng nối hàng;\nMênh mông không một chuyến đò ngang.\nKhông cầu gợi chút niềm thân mật,\nLặng lẽ bờ xanh tiếp bãi vàng.\n\nLớp lớp mây cao đùn núi bạc,\nChim nghiêng cánh nhỏ: bóng chiều sa.\nLòng quê dợn dợn vời con nước,\nKhông khói hoàng hôn cũng nhớ nhà.',
        contentSummary: 'Sự phủ định tuyệt đối dấu vết giao lưu của con người và điểm kết lắng đọng tình yêu quê hương đất nước.',
        poeticImages: [
          { image: 'Chim nghiêng cánh nhỏ: bóng chiều sa', meaning: 'Một cánh chim nhỏ nhoi chao nghiêng như chở cả sức nặng của bóng hoàng hôn vũ trụ.' },
          { image: 'Lòng quê dợn dợn vời con nước', meaning: 'Nỗi nhớ quê hương cuộn trào thành từng đợt sóng lòng nối liền với sóng nước tràng giang.' },
        ],
        keyWords: [
          { word: 'Đùn', nuance: 'Động từ giàu sức tạo hình (kế thừa từ Đỗ Phủ), gợi những lớp mây trắng nở phồng lên thành núi bạc.' },
          { word: 'Dợn dợn', nuance: 'Trạng thái sóng lòng xao động, trào dâng âm ỉ mà mãnh liệt.' },
        ],
        rhetoricalDevices: [
          { device: 'Điệp từ phủ định (Không... Không...)', effect: 'Khước từ mọi kết nối bề mặt để làm bật dậy khát vọng giao cảm mãnh liệt.' },
        ],
        roleInWork: 'Nâng tầm bài thơ từ nỗi buồn cá nhân sang tâm sự yêu nước thầm kín mà thiết tha.',
      },
    ],
    artisticFeatures: {
      prominentCraft: 'Sự kết hợp hài hòa giữa vẻ đẹp cổ điển Đường thi và cảm xúc lãng mạn hiện đại của Thơ Mới.',
      language: 'Trang trọng, hàm súc, giàu hệ thống từ láy gợi hình và gợi cảm (điệp điệp, song song, lơ thơ, đìu hiu, chót vót, mênh mông, lặng lẽ, lớp lớp, dợn dợn).',
      tone: 'Trầm mặc, ngân nga, u hoài mà khoáng đạt.',
      structureOrPointOfView: 'Thể thơ thất ngôn trường thiên chia khổ 4 câu cổ kính.',
      imageryOrRhetoric: 'Sóng tràng giang, củi một cành khô, cồn nhỏ, bến cô liêu, mây đùn núi bạc, cánh chim chiều.',
      distinctiveDevices: [
        { name: 'Thủ pháp tương phản vũ trụ', description: 'Đặt cái nhỏ bé (cành củi, cánh chim) trước cái vô biên (trời sâu chót vót, núi bạc).' },
        { name: 'Đối thoại liên văn bản cổ điển', description: 'Sáng tạo mới mẻ từ thi liệu "Hoàng Hạc lâu" của Thôi Hiệu ở câu kết.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-cui-mot-canh-kho',
        detailName: 'Hình tượng "Củi một cành khô lạc mấy dòng"',
        excerptOrContext: 'Thuyền về nước lại, sầu trăm ngả; / Củi một cành khô lạc mấy dòng.',
        directMeaning: 'Một cành củi khô trôi dạt bơ vơ giữa nhiều luồng nước lớn.',
        symbolicMeaning: 'Phá vỡ quy phạm thẩm mỹ cổ điển (vốn chỉ dùng thuyền, hoa, lá) để đưa một vật thể thô mộc vào thơ, tượng trưng cho kiếp người cô đơn, mất hướng đi.',
        thematicConnection: 'Dấu ấn hiện đại sắc nét nhất của cái tôi Thơ Mới trong bức tranh cổ điển.',
      },
    ],
    literaryValues: {
      ideologicalValue: 'Tình yêu thiên nhiên gắn liền với lòng yêu nước thầm kín của người trí thức Việt Nam trước 1945.',
      artisticValue: 'Đỉnh cao của khuynh hướng cổ điển kết hợp hiện đại trong phong trào Thơ Mới.',
      message: 'Tình yêu quê hương đất nước luôn chảy tràn trong huyết quản, ngay cả giữa những phút giây cô đơn nhất.',
      modernRelevance: 'Bồi đắp tình yêu vẻ đẹp hùng vĩ, trầm mặc của thiên nhiên đất nước Việt Nam.',
    },
    quick60s: {
      author: 'Huy Cận',
      genre: 'Thơ bảy chữ (Thơ Mới)',
      context: 'Mùa thu năm 1939 tại bến Chèm (sông Hồng), in trong tập "Lửa thiêng".',
      theme: 'Nỗi sầu cô đơn trước vũ trụ rộng lớn và lòng yêu nước, nhớ quê thiết tha.',
      coreFigureOrCharacter: 'Cái tôi trữ tình đứng trước dòng sông dài trời rộng.',
      mainIdea: 'Bức tranh thiên nhiên "cổ điển mà hiện đại" thấm đẫm nỗi sầu nhân thế và tình quê.',
      keyArt: 'Tương phản không gian, hệ thống từ láy đặc sắc, thi liệu Đường thi cách tân.',
      goldenKeywords: ['Bâng khuâng trời rộng', 'Củi một cành khô', 'Sâu chót vót', 'Mây cao đùn núi bạc', 'Không khói hoàng hôn'],
      takeaway: 'Khúc tráng ca u hoài về vũ trụ và lòng quê bất diệt của hồn thơ Huy Cận.',
    },
  },

  'voi-vang': {
    slug: 'voi-vang',
    title: 'Vội vàng',
    authorId: 'xuan-dieu',
    authorName: 'Xuân Diệu',
    grade: 11,
    genre: 'Thơ',
    textbook: 'Ngữ văn 11 (Chương trình THPT)',
    year: '1938',
    origin: 'In trong tập "Thơ thơ" (1938) – tập thơ đầu tay của Xuân Diệu.',
    topic: 'Khát vọng sống mãnh liệt, chạy đua với thời gian để tận hưởng và tận hiến cho tuổi trẻ và tình yêu.',
    centralTheme:
      'Tuyên ngôn nghệ thuật và nhân sinh quan mới mẻ của Xuân Diệu: phát hiện thiên đường ngay trên mặt đất, lo âu trước sự trôi chảy một chiều của thời gian và cuồng nhiệt giao cảm với sự sống đang độ xuân thì.',
    keywords: ['Xuân Diệu', 'Vội vàng', 'Tắt nắng buộc gió', 'Tháng giêng ngon như một cặp môi gần', 'Xuân đi xuân lại', 'Hỡi xuân hồng'],
    hookIntro:
      'Bắt đầu bằng ước muốn đoạt quyền tạo hóa ("Tôi muốn tắt nắng đi... Tôi muốn buộc gió lại") và khép lại bằng nụ hôn cuồng nhiệt ngoạm vào trái xuân hồng — bản giao hưởng rực rỡ nhất của tuổi trẻ trong thi ca Việt Nam.',
    coverImage: WORK_IMAGES['voi-vang'],
    historicContext: {
      timeframe: 'Năm 1938, giai đoạn cực thịnh của phong trào Thơ Mới.',
      historicalBackground:
        'Sự thức tỉnh của ý thức cá nhân phương Tây giúp người thanh niên thoát khỏi quan niệm khổ hạnh trung đại để khẳng định giá trị của hạnh phúc trần thế.',
      personalCircumstance:
        'Xuân Diệu bước vào làng thơ với một nguồn sinh lực trẻ trung, đắm say tình yêu và ám ảnh sâu sắc về thời gian.',
      impactOnWork:
        'Đem lại một mỹ học hoàn toàn mới: lấy con người đang yêu làm thước đo cho vẻ đẹp của tự nhiên.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Đoạn 1 (13 câu đầu): Bức tranh thiên đường trên mặt đất và tình yêu cuộc sống tha thiết', content: 'Ước muốn tắt nắng buộc gió để giữ lại khu vườn xuân đầy ong bướm, hoa lá, ánh sáng và tháng giêng ngon như một cặp môi gần.' },
        { part: 'Đoạn 2 (16 câu tiếp): Nỗi băn khoăn, bi phẫn trước sự trôi chảy của thời gian và tuổi trẻ', content: 'Quan niệm thời gian tuyến tính "Xuân đương tới nghĩa là xuân đương qua", tuổi trẻ một đi không trở lại khiến vạn vật nhuốm màu chia phôi.' },
        { part: 'Đoạn 3 (9 câu cuối): Lời giục giã sống vội vàng, cuồng nhiệt tận hưởng sự sống', content: 'Điệp khúc "Ta muốn ôm... Ta muốn riết... Ta muốn say... Ta muốn thâu" và khát vọng cắn vào xuân hồng.' },
      ],
      shortSummary:
        'Bài thơ mở đầu bằng khát vọng níu giữ hương sắc trần gian bởi cuộc đời hiện lên như một bữa tiệc tình ái ngọt ngào. Nhưng ngay giữa đỉnh cao hạnh phúc, nhà thơ giật mình nhận ra thời gian và tuổi trẻ một đi không trở lại. Từ nỗi lo âu ấy, Xuân Diệu bật lên lời giục giã "Mau đi thôi!", hối hả ôm trọn vạn vật bằng tất cả các giác quan.',
      emotionalArc: 'Say đắm, ngất ngây -> Ngỡ ngàng, tiếc nuối, hờn giận thời gian -> Cuồng nhiệt, vội vàng tận hiến.',
    },
    mainContentPoints: [
      'Khát vọng kỳ vĩ muốn "tắt nắng", "buộc gió" để vĩnh cửu hóa vẻ đẹp trần thế.',
      'Mỹ học lấy con người làm chuẩn mực: "Tháng giêng ngon như một cặp môi gần".',
      'Quan niệm thời gian tuyến tính hiện đại đối lập với thời gian tuần hoàn cổ điển: tuổi trẻ chỉ nở một lần.',
      'Cái tôi trữ tình khổng lồ ôm riết sự sống với nhịp thơ dồn dập, điệp ngữ tăng tiến.',
    ],
    analysisLevels: {
      basic:
        'Bài thơ thể hiện tình yêu cuộc sống trần thế tha thiết của Xuân Diệu. Vì nhận ra thời gian trôi nhanh và tuổi trẻ ngắn ngủi, nhà thơ khuyên mọi người hãy sống vội vàng, trân trọng từng giây phút của tuổi thanh xuân.',
      detailed:
        'Điểm cách tân vĩ đại nhất của "Vội vàng" là sự đảo ngược chuẩn mực thẩm mỹ: nếu thơ cổ lấy thiên nhiên làm chuẩn cho con người (mặt hoa, mày liễu), thì Xuân Diệu lấy vẻ đẹp tình tứ của con người làm chuẩn mực cho thiên nhiên ("Ánh sáng chớp hàng mi", "Tháng giêng ngon như một cặp môi gần"). Sống "vội vàng" ở đây không phải là sống gấp thực dụng mà là sống hết mình, nâng niu từng khoảnh khắc.',
      advanced:
        'Về mặt triết học thời gian, Xuân Diệu đã đập vỡ vòng tuần hoàn "xuân - hạ - thu - đông" của người xưa bằng thước đo tuổi trẻ cá nhân ("Xuân còn mãi nghĩa là tôi sẽ mất"). Chính ý thức hiện sinh về sự hữu hạn của đời người đã sinh ra mỹ học của tốc độ và cường độ cảm xúc ở đoạn kết với chuỗi động từ leo thang: ôm -> riết -> say -> thâu -> cắn.',
    },
    poetryAnalysis: [
      {
        id: 'vv-d1',
        stanzaNumber: 1,
        title: 'Đoạn 1: Thiên đường trên mặt đất và cái nhìn tình tứ',
        excerpt:
          'Tôi muốn tắt nắng đi\nCho màu đừng nhạt mất;\nTôi muốn buộc gió lại\nCho hương đừng bay đi.\nCủa ong bướm này đây tuần tháng mật;\nNày đây hoa của đồng nội xanh rì;\nNày đây lá của cành tơ phơ phất;\nCủa yến anh này đây khúc tình si;\nVà này đây ánh sáng chớp hàng mi,\nMỗi buổi sáng, thần Vui hằng gõ cửa;\nTháng giêng ngon như một cặp môi gần;',
        contentSummary: 'Ước muốn ngông cuồng mà đáng yêu nhằm giữ lại hương sắc cuộc đời và bức tranh khu vườn xuân tràn ngập tình yêu.',
        poeticImages: [
          { image: 'Tháng giêng ngon như một cặp môi gần', meaning: 'Câu thơ táo bạo bậc nhất Thơ Mới: biến khái niệm thời gian trừu tượng (tháng giêng) thành thực thể hữu hình, quyến rũ, ngọt ngào của tình yêu đôi lứa.' },
          { image: 'Ánh sáng chớp hàng mi', meaning: 'Bình minh rạng rỡ như ánh mắt người thiếu nữ vừa thức giấc.' },
        ],
        keyWords: [
          { word: 'Này đây (lặp 5 lần)', nuance: 'Tiếng reo vui hân hoan chỉ tay vào vô vàn của cải phong phú bày sẵn ngay trên mặt đất.' },
        ],
        rhetoricalDevices: [
          { device: 'Điệp cấu trúc & So sánh chuyển đổi cảm giác', effect: 'Tạo nhịp điệu dồn dập, quyến rũ và đánh thức mọi giác quan người đọc.' },
        ],
        roleInWork: 'Xây dựng tiền đề mỹ học: cuộc đời đẹp như một thiên đường nên mới đáng để vội vàng níu giữ.',
      },
      {
        id: 'vv-d2-3',
        stanzaNumber: 2,
        title: 'Đoạn 2 & 3: Triết lý thời gian tuyến tính và khát vọng giao cảm tột cùng',
        excerpt:
          'Xuân đương tới, nghĩa là xuân đương qua,\nXuân còn non, nghĩa là xuân sẽ già,\nMà xuân hết, nghĩa là tôi cũng mất.\nLòng tôi rộng, nhưng lượng trời cứ chật,\nKhông cho dài thời trẻ của nhân gian...\n\nTa muốn ôm\nCả sự sống mới bắt đầu mơn mởn;\nTa muốn riết mây đưa và gió lượn,\nTa muốn say cánh bướm với tình yêu,\nTa muốn thâu trong một cái hôn nhiều\nVà non nước, và cây, và cỏ rạng,\nCho chếnh choáng mùi thơm, cho đã đầy ánh sáng,\nCho no nê thanh sắc của thời tươi;\n– Hỡi xuân hồng, ta muốn cắn vào ngươi!',
        contentSummary: 'Sự thức nhận đau đớn về quy luật tuổi trẻ một đi không trở lại và màn đại hợp xướng tận hưởng sự sống.',
        poeticImages: [
          { image: 'Hỡi xuân hồng, ta muốn cắn vào ngươi!', meaning: 'Mùa xuân hiện lên như một trái chín hồng hào, căng mọng mà thi nhân muốn ngoạm lấy bằng tất cả niềm đam mê sống.' },
        ],
        keyWords: [
          { word: 'Ôm – Riết – Say – Thâu – Cắn', nuance: 'Chuỗi động từ tình yêu tăng tiến mãnh liệt, xóa nhòa khoảng cách giữa con người và vũ trụ.' },
        ],
        rhetoricalDevices: [
          { device: 'Điệp từ "Ta muốn..." & Liên từ "Và..."', effect: 'Mở rộng biên độ câu thơ để dung nạp toàn bộ hương sắc đất trời vào lồng ngực thi nhân.' },
        ],
        roleInWork: 'Đỉnh cao cảm xúc và tư tưởng nhân văn của toàn bộ thi phẩm.',
      },
    ],
    artisticFeatures: {
      prominentCraft: 'Thể thơ tự do kết hợp câu ngũ ngôn và tám chữ linh hoạt; nghệ thuật tương giao các giác quan; giọng điệu vừa triết luận sắc sảo vừa sôi nổi đắm say.',
      language: 'Táo bạo, hiện đại, giàu động từ mạnh và tính từ chỉ sắc thái xuân tình.',
      tone: 'Cuồng nhiệt, gấp gáp, say đắm và tha thiết.',
      structureOrPointOfView: 'Mạch thơ vận động theo logic cảm xúc – triết lý chặt chẽ (Yêu đời -> Sợ thời gian -> Vội vàng sống).',
      imageryOrRhetoric: 'Tắt nắng buộc gió, cặp môi gần, phần ngon nhất, cái hôn nhiều, xuân hồng.',
      distinctiveDevices: [
        { name: 'Ẩn dụ chuyển đổi cảm giác (Tương giao)', description: 'Kết hợp vị giác, xúc giác, thị giác và thính giác trong cùng một hình ảnh thơ.' },
        { name: 'Thủ pháp tăng tiến', description: 'Đẩy nhịp điệu và cường độ khát vọng sống lên đến tột đỉnh ở đoạn kết.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-cap-moi-gan',
        detailName: 'Hình ảnh "Tháng giêng ngon như một cặp môi gần"',
        excerptOrContext: 'Mỗi buổi sáng, thần Vui hằng gõ cửa; / Tháng giêng ngon như một cặp môi gần;',
        directMeaning: 'So sánh tháng đầu tiên của mùa xuân với làn môi quyến rũ của người tình.',
        symbolicMeaning: 'Tuyên ngôn mỹ học nhân bản: con người giữa tuổi trẻ và tình yêu là chuẩn mực tối cao của mọi cái đẹp trong vũ trụ.',
        thematicConnection: 'Đánh dấu bước ngoặt hiện đại hóa của thơ ca Việt Nam thế kỷ XX.',
      },
    ],
    literaryValues: {
      humanitarianValue: 'Thức tỉnh ý thức trân trọng sự sống, tuổi trẻ và hạnh phúc hiện hữu trên mặt đất.',
      artisticValue: 'Kiệt tác tiêu biểu nhất cho phong cách thơ Xuân Diệu và thành tựu cách tân của Thơ Mới.',
      message: 'Thời gian và tuổi trẻ không chờ đợi ai; hãy sống trọn vẹn, nồng nhiệt và có ý nghĩa trong từng khoảnh khắc.',
      modernRelevance: 'Truyền nguồn năng lượng sống tích cực, nhiệt huyết và sáng tạo cho thế hệ trẻ hôm nay.',
    },
    quick60s: {
      author: 'Xuân Diệu',
      genre: 'Thơ tự do (Ngũ ngôn chuyển sang tám chữ)',
      context: 'Năm 1938, in trong tập "Thơ thơ".',
      theme: 'Tình yêu sự sống trần thế và khát vọng chạy đua với thời gian.',
      coreFigureOrCharacter: 'Cái "Tôi" chuyển hóa thành cái "Ta" cuồng nhiệt yêu đời.',
      mainIdea: 'Sống vội vàng là sống mãnh liệt, trân quý từng giây phút của tuổi xuân trước thời gian tuyến tính.',
      keyArt: 'So sánh tương giao giác quan, điệp cấu trúc tăng tiến, động từ mạnh táo bạo.',
      goldenKeywords: ['Tắt nắng buộc gió', 'Này đây', 'Một cặp môi gần', 'Xuân đương tới', 'Ta muốn cắn vào ngươi'],
      takeaway: 'Bản tình ca bất hủ tôn vinh tuổi trẻ và vẻ đẹp thiên đường trên mặt đất.',
    },
  },

  'hai-dua-tre': {
    slug: 'hai-dua-tre',
    title: 'Hai đứa trẻ',
    authorId: 'thach-lam',
    authorName: 'Thạch Lam',
    grade: 11,
    genre: 'Truyện ngắn',
    textbook: 'Ngữ văn 11 (Chương trình THPT)',
    year: '1938',
    origin: 'In trong tập truyện ngắn "Nắng trong vườn" (1938).',
    topic: 'Cuộc sống tù đọng nơi phố huyện nghèo và ước mơ vươn tới ánh sáng của những kiếp người nhỏ bé.',
    centralTheme:
      'Qua tâm trạng của chị em Liên và An từ lúc chiều tà đến đêm khuya khi đợi chuyến tàu đêm từ Hà Nội chạy qua, tác phẩm thể hiện niềm xót thương sâu sắc đối với những kiếp người tàn lụi và trân trọng khát vọng vươn tới một thế giới tươi sáng hơn.',
    keywords: ['Thạch Lam', 'Hai đứa trẻ', 'Phố huyện Cẩm Giàng', 'Chị em Liên và An', 'Ngọn đèn chị Tí', 'Chuyến tàu đêm Hà Nội'],
    hookIntro:
      'Một truyện ngắn nhẹ như một bài thơ buồn: nơi phố huyện chìm dần vào bóng tối mênh mông, chỉ còn ngọn đèn hạt đậu leo lét và đôi mắt trẻ thơ cố thức đợi chuyến tàu rực rỡ ánh sáng vụt qua lúc nửa đêm.',
    coverImage: WORK_IMAGES['hai-dua-tre'],
    historicContext: {
      timeframe: 'Trước Cách mạng tháng Tám năm 1945 (sáng tác năm 1938).',
      historicalBackground:
        'Những thị trấn, phố huyện nhỏ vùng đồng bằng Bắc Bộ chìm trong sự nghèo đói, quẩn quanh và tù đọng dưới ách thực dân – phong kiến.',
      personalCircumstance:
        'Gắn liền với ký ức tuổi thơ sâu đậm của Thạch Lam cùng chị gái tại phố ga Cẩm Giàng (Hải Dương).',
      impactOnWork:
        'Tạo nên chất liệu hiện thực sống động hòa quyện trong bầu không khí trữ tình đượm buồn, man mác.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Phần 1: Bức tranh phố huyện lúc chiều tà', content: 'Tiếng trống thu không, phương tây đỏ rực như lửa cháy, chợ chiều đã vãn và nỗi buồn thấm thía trong tâm hồn Liên.' },
        { part: 'Phần 2: Phố huyện khi đêm xuống và những kiếp người trong bóng tối', content: 'Bóng tối ngập đầy, chõng hàng nước của mẹ con chị Tí, gánh phở bác Siêu, gia đình bác Xẩm và quầng sáng nhỏ quanh ngọn đèn chị Tí.' },
        { part: 'Phần 3: Chuyến tàu đêm từ Hà Nội đi qua và ước mơ của hai đứa trẻ', content: 'Chị em Liên cố thức đợi đoàn tàu rực sáng vụt qua mang theo ký ức Hà Nội xa xăm, rồi phố huyện lại chìm vào tĩnh mịch.' },
      ],
      shortSummary:
        'Tại một phố huyện nghèo ven đường sắt, hai chị em Liên và An trông coi một cửa hàng tạp hóa nhỏ. Khi chiều buông và đêm xuống, Liên lặng lẽ quan sát những kiếp người nghèo khổ (mẹ con chị Tí, bà cụ Thi điên, bác Siêu, gia đình bác Xẩm) kiếm sống lay lắt trong bóng tối. Đêm nào hai chị em cũng cố thức đến khuya chỉ để nhìn ngắm đoàn tàu đêm từ Hà Nội rực rỡ ánh đèn chạy qua — biểu tượng của một thế giới tươi sáng mà các em hằng mơ ước.',
      centralConflict: 'Sự tương phản gay gắt giữa Bóng tối mênh mông, tù đọng của phố huyện và Ánh sáng nhỏ nhoi cùng Chuyến tàu rực rỡ.',
    },
    mainContentPoints: [
      'Bức tranh chiều quê và chợ vãn gợi nỗi buồn man mác cùng lòng trắc ẩn của Liên trước những đứa trẻ nhặt nhạnh rác chợ.',
      'Nghệ thuật tương phản Ánh sáng >< Bóng tối khắc họa kiếp sống leo lét, quẩn quanh của cư dân phố huyện.',
      'Hình tượng chuyến tàu đêm Hà Nội: điểm hội tụ của ký ức hạnh phúc và khát vọng đổi đời, vươn tới ánh sáng.',
    ],
    analysisLevels: {
      basic:
        'Truyện kể về một buổi chiều và đêm của hai chị em Liên, An ở phố huyện nghèo. Qua cảnh sống nghèo khổ, đơn điệu của người dân nơi đây và việc hai đứa trẻ cố thức đợi tàu đêm, Thạch Lam thể hiện lòng thương cảm và sự trân trọng ước mơ hướng về tương lai tươi sáng.',
      detailed:
        'Không cần những xung đột kịch tính, Thạch Lam dẫn người đọc đi vào thế giới nội tâm tinh tế của nhân vật Liên. Bóng tối trong tác phẩm mang tính biểu tượng cho cuộc đời bế tắc, nghèo nàn, trong khi ngọn đèn con của chị Tí chỉ chiếu sáng một vùng đất nhỏ — biểu tượng cho những kiếp người nhỏ bé nhưng vẫn bền bỉ giữ ngọn lửa hy vọng.',
      advanced:
        'Trên bình diện thi pháp truyện ngắn trữ tình, "Hai đứa trẻ" được dệt nên bởi nhịp điệu chậm buồn và thủ pháp đối lập ánh sáng – bóng tối mang tầm triết lý nhân sinh. Chuyến tàu đêm không phải là ảo ảnh thoát ly của chủ nghĩa lãng mạn tiêu cực, mà là lời thức tỉnh nhân đạo: con người dù sống trong hoàn cảnh tăm tối đến đâu cũng không được đánh mất khát vọng về một cuộc sống xứng đáng hơn.',
    },
    characters: [
      {
        id: 'nhan-vat-lien',
        name: 'Cô bé Liên',
        role: 'Nhân vật trung tâm – Điểm nhìn trần thuật',
        appearance: 'Cô bé mới lớn, đảm đang thay mẹ trông coi gian hàng tạp hóa nhỏ cùng em trai là An.',
        situation: 'Gia đình từng sống sung túc ở Hà Nội nhưng vì thầy Liên mất việc nên phải về phố huyện nghèo.',
        speechAndActions: 'Kiểm hàng, đếm tiền chiều tối, rót rượu cho cụ Thi, quạt cho em ngủ và đánh thức em dậy khi đoàn tàu đến.',
        innerPsychology: 'Tâm hồn nhạy cảm, tinh tế trước vẻ đẹp thiên nhiên, giàu lòng trắc ẩn với người nghèo và luôn khắc khoải nhớ Hà Nội.',
        symbolicMeaning: 'Hiện thân cho vẻ đẹp nhân hậu, trong sáng và khát vọng vươn tới ánh sáng của tâm hồn con người.',
      },
      {
        id: 'cu-dan-pho-huyen',
        name: 'Mẹ con chị Tí, Bác Siêu, Vợ chồng bác Xẩm, Cụ Thi điên',
        role: 'Nhóm nhân vật bức tranh đời sống phố huyện',
        appearance: 'Lam lũ, nghèo khổ, xuất hiện lặp đi lặp lại mỗi đêm như những cái bóng.',
        situation: 'Bán hàng nước chè tươi, bán phở (món quà xa xỉ), hát xẩm trên manh chiếu rách.',
        speechAndActions: 'Trò chuyện bâng quơ, thở dài "Chả kiếm được bao nhiêu" nhưng đêm nào cũng dọn hàng ra.',
        innerPsychology: 'Nhẫn nại, cam chịu nhưng vẫn mong đợi "một cái gì tươi sáng cho sự sống nghèo khổ hằng ngày".',
        symbolicMeaning: 'Bức chân dung tập thể về những kiếp người mòn mỏi, tù đọng trong xã hội Việt Nam trước 1945.',
      },
    ],
    artisticFeatures: {
      prominentCraft: 'Truyện ngắn trữ tình giàu chất thơ; cốt truyện tâm lý tinh vi; nghệ thuật tương phản giữa ánh sáng và bóng tối.',
      language: 'Nhẹ nhàng, trong trẻo, giàu nhịp điệu êm dịu như lời ru.',
      tone: 'Trầm buồn, xót thương, nhân hậu.',
      structureOrPointOfView: 'Trần thuật ngôi thứ ba nhưng đặt điểm nhìn nội tâm vào nhân vật Liên.',
      imageryOrRhetoric: 'Tiếng trống thu không, bóng tối ngập đầy, ngọn đèn chị Tí, đoàn tàu đêm rực sáng.',
      distinctiveDevices: [
        { name: 'Thủ pháp tương phản Ánh sáng – Bóng tối', description: 'Bóng tối dày đặc bao vây những chấm sáng nhỏ nhoi, leo lét.' },
        { name: 'Bút pháp độc thoại và cảm giác nội tâm', description: 'Miêu tả những biến thái tinh vi nhất của mùi vị quê hương và tâm hồn trẻ thơ.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-ngon-den-chi-ti',
        detailName: 'Ngọn đèn con của chị Tí',
        excerptOrContext: 'Ngọn đèn của chị Tí, và cái bếp lửa của bác Siêu, chiếu sáng một vùng đất cát; trong cửa hàng, ngọn đèn của Liên, vặn nhỏ, thưa thớt từng hột sáng lọt qua phên nứa...',
        directMeaning: 'Nguồn sáng nhỏ bé chiếu rọi chõng hàng nước giữa đêm tối phố huyện.',
        symbolicMeaning: 'Biểu tượng cho những kiếp người nhỏ nhoi, leo lét, mong manh giữa bóng đêm cuộc đời nhưng vẫn ấm áp tình người.',
        thematicConnection: 'Trở thành leitmotiv (hình ảnh xuyên suốt) xuất hiện 7 lần trong tác phẩm.',
      },
      {
        id: 'chi-tiet-chuyen-tau-dem',
        detailName: 'Chuyến tàu đêm từ Hà Nội chạy qua phố huyện',
        excerptOrContext: 'Các toa đèn sáng trưng, chiếu cả xuống đường... đồng và kền lấp lánh, và các cửa kính sáng.',
        directMeaning: 'Đoàn tàu hỏa chạy tuyến Hà Nội về qua ga phố huyện lúc đêm khuya.',
        symbolicMeaning: 'Biểu tượng của thế giới rực rỡ ánh sáng, của ký ức tuổi thơ êm đềm và ước mơ vượt thoát khỏi sự tù đọng.',
        thematicConnection: 'Gói trọn thông điệp nhân đạo sâu sắc của Thạch Lam.',
      },
    ],
    literaryValues: {
      realisticValue: 'Phản ánh chân thực bức tranh đời sống nghèo khổ, quẩn quanh của phố huyện Việt Nam trước Cách mạng.',
      humanitarianValue: 'Đánh thức lòng trắc ẩn và nâng niu ước mơ hướng thiện, hướng sáng của con người.',
      artisticValue: 'Đỉnh cao của dòng truyện ngắn trữ tình Việt Nam hiện đại.',
      message: 'Dù sống trong hoàn cảnh tăm tối, nghèo khổ đến đâu, con người vẫn luôn cần một ngọn lửa ước mơ để giữ gìn phẩm giá và hy vọng.',
      modernRelevance: 'Giáo dục lòng nhân ái, sự đồng cảm với những mảnh đời bất hạnh quanh ta.',
    },
    quick60s: {
      author: 'Thạch Lam',
      genre: 'Truyện ngắn trữ tình',
      context: 'Năm 1938, in trong tập "Nắng trong vườn".',
      theme: 'Kiếp sống tù đọng nơi phố huyện nghèo và ước mơ vươn tới ánh sáng.',
      coreFigureOrCharacter: 'Hai chị em Liên, An và những cư dân phố huyện (chị Tí, bác Siêu, cụ Thi).',
      mainIdea: 'Xót thương những kiếp người nhỏ bé trong bóng tối và trân trọng khát vọng hướng về ánh sáng của họ.',
      keyArt: 'Cốt truyện tâm lý giàu chất thơ, tương phản Ánh sáng >< Bóng tối, ngôn từ tinh tế.',
      goldenKeywords: ['Tiếng trống thu không', 'Phố huyện', 'Ngọn đèn chị Tí', 'Chuyến tàu đêm', 'Hà Nội xa xăm'],
      takeaway: 'Bài thơ văn xuôi thấm đẫm tình thương và ánh sáng nhân đạo của Thạch Lam.',
    },
  },

  'ai-da-dat-ten-cho-dong-song': {
    slug: 'ai-da-dat-ten-cho-dong-song',
    title: 'Ai đã đặt tên cho dòng sông?',
    authorId: 'hoang-phu-ngoc-tuong',
    authorName: 'Hoàng Phủ Ngọc Tường',
    grade: 11,
    genre: 'Tùy bút / Ký',
    textbook: 'Ngữ văn 11 (Chương trình GDPT 2018 & Hiện hành)',
    year: '1981',
    origin: 'Viết tại Huế ngày 4/1/1981, in trong tập bút ký cùng tên (1986).',
    topic: 'Vẻ đẹp thiên nhiên, lịch sử, văn hóa và thi ca của dòng sông Hương xứ Huế.',
    centralTheme:
      'Khám phá dòng sông Hương như một sinh thể có tâm hồn, một người con gái tài hoa, dịu dàng mà kiên cường — biểu tượng cho vẻ đẹp văn hóa cố đô Huế và tình yêu đất nước đắm say của tác giả.',
    keywords: ['Hoàng Phủ Ngọc Tường', 'Sông Hương', 'Cô gái Di-gan', 'Hành trình tìm kiếm tình yêu', 'Người tài nữ đánh đàn', 'Huế'],
    hookIntro:
      'Nếu Nguyễn Tuân tạc tượng đài Sông Đà hùng vĩ miền Tây Bắc, thì Hoàng Phủ Ngọc Tường đã dệt nên một bản giao hưởng trữ tình – uyên bác về Sông Hương: từ cô gái Di-gan phóng khoáng giữa rừng già Trường Sơn đến người tình dịu dàng ôm lấy cố đô Huế.',
    coverImage: WORK_IMAGES['ai-da-dat-ten-cho-dong-song'],
    historicContext: {
      timeframe: 'Ngày 4 tháng 1 năm 1981 tại thành phố Huế.',
      historicalBackground:
        'Đất nước sau ngày thống nhất, các nhà văn hướng ngòi bút về việc khám phá chiều sâu văn hóa, lịch sử và vẻ đẹp non sông.',
      personalCircumstance:
        'Hoàng Phủ Ngọc Tường gắn bó cả cuộc đời và tâm huyết với mảnh đất cố đô Huế.',
      impactOnWork:
        'Hội tụ tri thức uyên bác về địa lý, lịch sử, âm nhạc, hội họa, văn chương trong một giọng văn mê đắm.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Phần 1: Thủy trình của sông Hương (Góc nhìn Địa lý – Thẩm mỹ)', content: 'Sông Hương ở thượng nguồn Trường Sơn (cô gái Di-gan phóng khoáng), ở ngoại vi thành phố, khi chảy vào lòng thành phố Huế và lúc lưu luyến chia tay Huế ra biển.' },
        { part: 'Phần 2: Sông Hương trong chiều sâu Lịch sử và Thi ca', content: 'Dòng sông biên thùy anh dũng qua các thế kỷ, dòng sông sinh thành nền âm nhạc cổ điển Huế và nguồn cảm hứng bất tận của các thi nhân.' },
        { part: 'Phần 3: Huyền thoại về tên gọi "Sông Hương"', content: 'Câu hỏi tu từ đầy chất thơ và huyền thoại dân gian làng Thành Trung nấu nước trăm hoa đổ xuống dòng sông.' },
      ],
      shortSummary:
        'Đoạn trích dõi theo hành trình của sông Hương từ cội nguồn rừng già Trường Sơn hùng vĩ, vượt qua những thác ghềnh để hóa thành người thiếu nữ dịu dàng tìm đến thành phố Huế tình nhân. Tác giả còn khắc họa sông Hương như một chứng nhân lịch sử kiên cường, một người mẹ văn hóa nuôi dưỡng ca Huế và lý giải tên gọi dòng sông bằng huyền thoại nước thơm trăm hoa.',
      emotionalArc: 'Mạnh mẽ, phóng khoáng -> Dịu dàng, say đắm -> Trầm mặc, lưu luyến -> Tự hào, ngưỡng vọng.',
    },
    mainContentPoints: [
      'Thủy trình sông Hương được nhân hóa như hành trình tìm kiếm có ý thức của người con gái trong một câu chuyện tình yêu nhuốm màu cổ tích.',
      'Vẻ đẹp đa diện: thượng nguồn là cô gái Di-gan man dại; về đồng bằng là người gái đẹp ngủ mơ màng; vào Huế là người tài nữ đánh đàn lúc đêm khuya.',
      'Khúc quanh lưu luyến "chút lẳng lơ kín đáo của tình yêu" tại vòm cung Cồn Hến – làng Vĩ Dạ trước khi ra biển.',
      'Chiều sâu lịch sử (dòng sông sử thi) và chiều sâu văn hóa – thi ca cố đô Huế.',
    ],
    analysisLevels: {
      basic:
        'Bài bút ký miêu tả vẻ đẹp phong phú, thơ mộng của dòng sông Hương từ thượng nguồn Trường Sơn đến khi chảy qua thành phố Huế và đổ ra biển, đồng thời ca ngợi giá trị lịch sử, văn hóa của dòng sông.',
      detailed:
        'Nét độc đáo nhất của Hoàng Phủ Ngọc Tường là nhân hóa sông Hương thành một "cái tôi" nữ tính đầy quyến rũ. Tác giả phát hiện ra rằng trước khi trở thành người tình dịu dàng của Huế, sông Hương đã sống một nửa cuộc đời như cô gái Di-gan phóng khoáng giữa rừng già. Khi vào Huế, dòng sông uốn mình theo những đường cong mềm mại và chảy cực chậm như một điệu slow tình cảm dành riêng cho Huế.',
      advanced:
        'Xét về thi pháp thể loại bút ký, tác phẩm là sự giao thoa kỳ diệu giữa Trí tuệ (tri thức địa lý, lịch sử, âm nhạc học, triết học Heraclitus) và Trữ tình (liên tưởng lãng mạn, ngôn từ giàu nhịp điệu). Nếu Sông Đà của Nguyễn Tuân mang vẻ đẹp dương tính hùng tráng, thì Sông Hương của Hoàng Phủ Ngọc Tường là biểu tượng của vẻ đẹp âm tính, thâm trầm, nội tâm và văn hiến.',
    },
    artisticFeatures: {
      prominentCraft: 'Kết hợp nhuần nhuyễn giữa chất trí tuệ uyên bác và chất thơ trữ tình đằm thắm; nghệ thuật nhân hóa và liên tưởng tài hoa.',
      language: 'Phong phú, tinh tế, sang trọng, câu văn dài nhiều vế nhịp nhàng như sóng nước.',
      tone: 'Đắm say, ngưỡng mộ, trầm tư và giàu chất triết lý.',
      structureOrPointOfView: 'Mạch văn trôi chảy tự nhiên theo thủy trình địa lý song hành với dòng chảy lịch sử – văn hóa.',
      imageryOrRhetoric: 'Cô gái Di-gan, bản trường ca rừng già, điệu slow tình cảm, người tài nữ đánh đàn, chút lẳng lơ kín đáo.',
      distinctiveDevices: [
        { name: 'Nhân hóa xuyên suốt theo mô-típ Tình yêu', description: 'Biến hành trình địa lý của sông Hương thành cuộc tìm kiếm tình nhân đầy chủ động.' },
        { name: 'Liên ngành nghệ thuật', description: 'Dùng thuật ngữ âm nhạc (điệu slow, Tứ đại cảnh), hội họa (sớm xanh trưa vàng chiều tím) và triết học để khắc họa dòng sông.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-co-gai-di-gan',
        detailName: 'Hình ảnh "Cô gái Di-gan phóng khoáng và man dại"',
        excerptOrContext: 'Rừng già đã hun đúc cho nó một bản lĩnh gan dạ, một tâm hồn tự do và trong sáng...',
        directMeaning: 'Vẻ đẹp dữ dội, hùng vĩ của sông Hương khi chảy giữa đại ngàn Trường Sơn.',
        symbolicMeaning: 'Khám phá sức mạnh tiềm ẩn bên dưới vẻ dịu dàng bề ngoài của thiên nhiên và con người xứ Huế.',
        thematicConnection: 'Giúp người đọc hiểu trọn vẹn bản tính kiên cường của dòng sông trong lịch sử giữ nước.',
      },
      {
        id: 'chi-tiet-chut-lang-lo-kin-dao',
        detailName: 'Khúc quanh "Chút lẳng lơ kín đáo của tình yêu"',
        excerptOrContext: 'Rồi như sực nhớ lại một điều gì chưa kịp nói, nó đột ngột đổi dòng, rẽ ngoặt sang hướng đông tây để gặp lại thành phố lần cuối ở góc thị trấn Bao Vinh cổ xưa.',
        directMeaning: 'Đặc điểm địa lý sông Hương đổi hướng đột ngột trước khi đổ ra phá Tam Giang.',
        symbolicMeaning: 'Nỗi vương vấn, chung tình của dòng sông với mảnh đất cố đô như nàng Kiều chí tình trở lại tìm Kim Trọng.',
        thematicConnection: 'Đỉnh cao của bút pháp nhân hóa trữ tình trong văn xuôi hiện đại.',
      },
    ],
    literaryValues: {
      ideologicalValue: 'Tôn vinh vẻ đẹp thiên nhiên và bề dày văn hiến, lịch sử của cố đô Huế nói riêng và Tổ quốc Việt Nam nói chung.',
      artisticValue: 'Kiệt tác mẫu mực của thể loại bút ký văn học hiện đại sau 1975.',
      message: 'Mỗi dòng sông, mỗi tấc đất quê hương đều kết tinh tâm hồn, lịch sử và văn hóa ngàn đời của dân tộc.',
      modernRelevance: 'Khơi dậy ý thức gìn giữ di sản văn hóa và cảnh quan thiên nhiên đất nước.',
    },
    quick60s: {
      author: 'Hoàng Phủ Ngọc Tường',
      genre: 'Bút ký trữ tình',
      context: 'Viết tại Huế ngày 4/1/1981.',
      theme: 'Vẻ đẹp đa diện của sông Hương (Địa lý – Lịch sử – Văn hóa – Thi ca).',
      coreFigureOrCharacter: 'Hình tượng dòng sông Hương được nhân hóa như người con gái xứ Huế.',
      mainIdea: 'Ca ngợi vẻ đẹp phóng khoáng mà dịu dàng, thâm trầm của sông Hương và văn hóa Huế.',
      keyArt: 'Văn phong trí tuệ – trữ tình, nhân hóa theo mô-típ hành trình tình yêu, liên tưởng uyên bác.',
      goldenKeywords: ['Cô gái Di-gan', 'Bản trường ca rừng già', 'Điệu slow tình cảm', 'Người tài nữ đánh đàn', 'Lẳng lơ kín đáo'],
      takeaway: 'Bức tượng đài bằng ngôn từ tuyệt mỹ về dòng sông Hương và tâm hồn xứ Huế.',
    },
  },

  /* ======================================================================== */
  /* KHỐI LỚP 12 (BỔ SUNG): VIỆT BẮC, ĐẤT NƯỚC, VỢ CHỒNG A PHỦ               */
  /* ======================================================================== */

  'viet-bac': {
    slug: 'viet-bac',
    title: 'Việt Bắc',
    authorId: 'to-huu',
    authorName: 'Tố Hữu',
    grade: 12,
    genre: 'Thơ',
    textbook: 'Ngữ văn 12 (Chương trình THPT)',
    year: '1954',
    origin: 'Sáng tác tháng 10/1954, in trong tập thơ "Việt Bắc" (1954).',
    topic: 'Khúc tình ca và khúc hùng ca về cuộc kháng chiến chống Pháp và nghĩa tình quân dân sâu nặng.',
    centralTheme:
      'Qua cuộc đối đáp tâm tình giữa kẻ ở (nhân dân Việt Bắc) và người đi (cán bộ kháng chiến về xuôi), bài thơ tái hiện bức tranh thiên nhiên, con người Việt Bắc ân tình và khí thế hào hùng của cuộc kháng chiến chống Pháp.',
    keywords: ['Tố Hữu', 'Việt Bắc', 'Mình – Ta', 'Bức tranh tứ bình', 'Những đường Việt Bắc của ta', 'Mười lăm năm ấy'],
    hookIntro:
      'Đỉnh cao của thơ ca kháng chiến chống Pháp: nơi sự kiện chính trị trọng đại của lịch sử dân tộc được hóa thân thành lời giã bạn tâm tình "Mình – Ta" ngọt ngào theo điệu lục bát ca dao ngàn đời.',
    coverImage: WORK_IMAGES['viet-bac'],
    historicContext: {
      timeframe: 'Tháng 10 năm 1954, sau chiến thắng Điện Biên Phủ và Hiệp định Giơ-ne-vơ.',
      historicalBackground:
        'Trung ương Đảng và Chính phủ rời chiến khu Việt Bắc (thủ đô kháng chiến suốt 15 năm) để trở về tiếp quản Thủ đô Hà Nội.',
      personalCircumstance:
        'Tố Hữu là người cán bộ gắn bó máu thịt với núi rừng và đồng bào Việt Bắc, trực tiếp trải qua giây phút chia tay lịch sử ấy.',
      impactOnWork:
        'Tạo nên sự hòa quyện tuyệt vời giữa chất Trữ tình và chất Chính trị, giữa tình cảm riêng tư và lý tưởng cách mạng.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Phần 1 (20 câu đầu): Lời ướm hỏi của người ở lại và tiếng lòng bồn chồn của người ra đi', content: 'Khơi nguồn kỷ niệm 15 năm gắn bó ("Mình về mình có nhớ ta") và sự bịn rịn "Bâng khuâng trong dạ, bồn chồn bước đi".' },
        { part: 'Phần 2 (32 câu tiếp): Nỗi nhớ thiên nhiên và con người Việt Bắc ân tình (Bức tranh Tứ bình)', content: 'Kỷ niệm chia ngọt sẻ bùi ("Miếng cơm chấm muối, mối thù nặng vai") và bức tranh bốn mùa Đông – Xuân – Hạ – Thu rực rỡ.' },
        { part: 'Phần 3 (38 câu cuối đoạn trích): Khung cảnh Việt Bắc ra trận hào hùng và niềm tin hướng về Đảng, Bác Hồ', content: 'Khí thế toàn dân kháng chiến ("Những đường Việt Bắc của ta / Đêm đêm rầm rập như là đất rung") và hình ảnh trung tâm kháng chiến.' },
      ],
      shortSummary:
        'Nhân buổi chia tay lịch sử giữa người cán bộ về xuôi và đồng bào chiến khu Việt Bắc sau chiến thắng năm 1954, hai bên cùng ôn lại mười lăm năm kháng chiến gian khổ mà nghĩa tình. Trong nỗi nhớ của người ra đi, Việt Bắc hiện lên vừa thơ mộng qua bức tranh Tứ bình bốn mùa, vừa ấm áp tình quân dân, vừa hùng tráng trong những chiến dịch lớn đi đến toàn thắng.',
      emotionalArc: 'Bâng khuâng, lưu luyến -> Thiết tha, ân tình -> Hào hùng, tự hào -> Tin tưởng sắt son.',
    },
    mainContentPoints: [
      'Kết cấu đối đáp "Mình – Ta" mang đậm phong vị ca dao dân ca, biến chuyện chính trị thành chuyện ân tình thủy chung.',
      'Vẻ đẹp con người Việt Bắc tần tảo, giàu tình nghĩa ("Thương nhau chia củ sắn lùi / Bát cơm sẻ nửa, chăn sui đắp cùng").',
      'Bức tranh Tứ bình tuyệt mỹ hòa quyện giữa thiên nhiên bốn mùa (hoa chuối đỏ tươi, mơ nở trắng rừng, rừng phách đổ vàng) và con người lao động.',
      'Khúc hùng ca kháng chiến với nhịp điệu dồn dập, phóng đại sử thi tái hiện sức mạnh toàn dân tộc.',
    ],
    analysisLevels: {
      basic:
        'Bài thơ là lời chia tay đầy lưu luyến giữa cán bộ kháng chiến và nhân dân Việt Bắc. Tác phẩm ca ngợi vẻ đẹp thiên nhiên bốn mùa, tấm lòng thủy chung của đồng bào Việt Bắc và sức mạnh hào hùng của cuộc kháng chiến chống Pháp.',
      detailed:
        'Thành công lớn nhất của Tố Hữu là dân tộc hóa sâu sắc thơ ca cách mạng: sử dụng thể thơ lục bát truyền thống và cặp đại từ "Mình – Ta" biến hóa linh hoạt. Đặc biệt, đoạn thơ 10 câu "Bức tranh Tứ bình" là kiệt tác hội họa bằng ngôn từ: mỗi mùa một sắc màu đặc trưng của núi rừng gắn liền với một dáng hình con người Việt Bắc cần cù, thơ mộng.',
      advanced:
        'Trên bình diện thi pháp khuynh hướng sử thi và cảm hứng lãng mạn, "Việt Bắc" đã giải quyết xuất sắc bài toán chuyển hóa lý tưởng cách mạng thành đạo lý "Uống nước nhớ nguồn" của dân tộc. Từ nhịp lục bát êm đềm ở phần đầu, bài thơ chuyển sang nhịp hành khúc dồn dập ("Đêm đêm rầm rập như là đất rung... Bước chân nát đá, muôn tàn lửa bay"), khắc tạc tầm vóc vĩ đại của chiến tranh nhân dân.',
    },
    poetryAnalysis: [
      {
        id: 'vb-k1',
        stanzaNumber: 1,
        title: 'Đoạn mở đầu: Khúc hát ân tình "Mình – Ta" trong buổi chia ly',
        excerpt:
          'Mình về mình có nhớ ta\nMười lăm năm ấy thiết tha mặn nồng.\nMình về mình có nhớ không\nNhìn cây nhớ núi, nhìn sông nhớ nguồn?\n\n– Tiếng ai tha thiết bên cồn\nBâng khuâng trong dạ, bồn chồn bước đi\nÁo chàm đưa buổi phân ly\nCầm tay nhau biết nói gì hôm nay...',
        contentSummary: 'Lời ướm hỏi tha thiết của người ở lại và sự xúc động nghẹn ngào của người ra đi trong buổi chia tay lịch sử.',
        poeticImages: [
          { image: 'Áo chàm đưa buổi phân ly', meaning: 'Hoán dụ giàu sức gợi: màu áo chàm mộc mạc, bền màu tượng trưng cho tấm lòng thủy chung son sắt của đồng bào Việt Bắc.' },
        ],
        keyWords: [
          { word: 'Mười lăm năm ấy', nuance: 'Khoảng thời gian từ khởi nghĩa Bắc Sơn (1940) đến chiến thắng 1954 — chiều dài của thử thách và nghĩa tình.' },
          { word: 'Bâng khuâng – Bồn chồn', nuance: 'Từ láy diễn tả trạng thái tâm lý vừa lưu luyến nhớ nhung vừa nôn nao xúc động.' },
        ],
        rhetoricalDevices: [
          { device: 'Kết cấu đối đáp Mình – Ta & Câu hỏi tu từ', effect: 'Gợi âm hưởng ca dao tình yêu đôi lứa đằm thắm, ngọt ngào.' },
          { device: 'Dấu chấm lửng cuối câu 8', effect: '"Cầm tay nhau biết nói gì hôm nay...": lời ít mà ý nhiều, tình cảm dâng trào đến nghẹn lời.' },
        ],
        roleInWork: 'Khơi mở mạch nguồn hồi tưởng và định hình giọng điệu tâm tình xuyên suốt toàn bài.',
      },
      {
        id: 'vb-k2',
        stanzaNumber: 2,
        title: 'Bức tranh Tứ bình: Thiên nhiên bốn mùa và con người Việt Bắc',
        excerpt:
          'Ta về, mình có nhớ ta\nTa về, ta nhớ những hoa cùng người.\nRừng xanh hoa chuối đỏ tươi\nĐèo cao nắng ánh dao gài thắt lưng.\nNgày xuân mơ nở trắng rừng\nNhớ người đan nón chuốt từng sợi giang.\nVe kêu rừng phách đổ vàng\nNhớ cô em gái hái măng một mình.\nRừng thu trăng rọi hòa bình\nNhớ ai tiếng hát ân tình thủy chung.',
        contentSummary: 'Sự hòa quyện tuyệt đẹp giữa bốn mùa thiên nhiên Việt Bắc (Đông – Xuân – Hạ – Thu) và hình bóng con người lao động.',
        poeticImages: [
          { image: 'Rừng xanh hoa chuối đỏ tươi / Đèo cao nắng ánh dao gài thắt lưng', meaning: 'Điểm nóng màu đỏ của hoa chuối giữa nền xanh đại ngàn và tia sáng mặt trời lấp lánh trên lưỡi dao đi rừng của người lao động làm chủ thiên nhiên.' },
          { image: 'Ve kêu rừng phách đổ vàng', meaning: 'Động từ "đổ" diễn tả sự chuyển màu đồng loạt, rực rỡ của cả cánh rừng phách ngay khi tiếng ve mùa hạ vừa cất lên.' },
        ],
        keyWords: [
          { word: 'Hoa cùng người', nuance: 'Thiên nhiên và con người song hành, tôn vinh vẻ đẹp của nhau trong từng cặp câu lục bát.' },
        ],
        rhetoricalDevices: [
          { device: 'Cấu trúc sóng đôi (Câu lục tả cảnh – Câu bát tả người)', effect: 'Tạo nên bức tranh tứ bình cổ điển mà tràn đầy sức sống mới.' },
        ],
        roleInWork: 'Đoạn thơ hoa mỹ và giàu chất hội họa bậc nhất của nền thơ ca kháng chiến.',
      },
    ],
    artisticFeatures: {
      prominentCraft: 'Tính dân tộc đậm đà cả trong thể thơ lục bát, kết cấu đối đáp Mình – Ta lẫn ngôn ngữ, giọng điệu.',
      language: 'Giản dị, trong sáng, giàu tính nhạc và màu sắc hội họa cổ điển kết hợp hiện đại.',
      tone: 'Ngọt ngào, tâm tình, tha thiết hòa quyện với âm hưởng hào hùng, sảng khoái.',
      structureOrPointOfView: 'Kết cấu đối đáp truyền thống dân gian mở rộng thành trường ca trữ tình – chính trị.',
      imageryOrRhetoric: 'Áo chàm, củ sắn lùi, chăn sui, bộ tranh Tứ bình, những đường Việt Bắc đêm đêm rầm rập.',
      distinctiveDevices: [
        { name: 'Chuyển hóa đại từ Mình – Ta', description: 'Tạo sự gắn bó khăng khít "Tuy hai mà một, tuy một mà hai" giữa quân và dân.' },
        { name: 'Nhịp điệu lục bát biến hóa', description: 'Vừa êm ái như lời ru trong cảnh nhớ thương, vừa dồn dập hào sảng trong cảnh ra trận.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-ao-cham',
        detailName: 'Hình ảnh hoán dụ "Áo chàm đưa buổi phân ly"',
        excerptOrContext: 'Áo chàm đưa buổi phân ly / Cầm tay nhau biết nói gì hôm nay...',
        directMeaning: 'Trang phục truyền thống nhuộm chàm của đồng bào các dân tộc vùng cao Việt Bắc trong buổi tiễn đưa.',
        symbolicMeaning: 'Biểu tượng cho vẻ đẹp mộc mạc, nghĩa tình sắt son không phai nhạt của nhân dân căn cứ địa cách mạng.',
        thematicConnection: 'Mở ra mạch cảm xúc tri ân sâu nặng với nhân dân lao động.',
      },
    ],
    literaryValues: {
      ideologicalValue: 'Khẳng định đạo lý "Uống nước nhớ nguồn", nghĩa tình quân dân cá nước và sức mạnh tất thắng của cuộc kháng chiến.',
      artisticValue: 'Đỉnh cao chói lọi của phong cách thơ trữ tình – chính trị Tố Hữu và thơ kháng chiến chống Pháp.',
      message: 'Mọi thắng lợi vĩ đại của dân tộc đều bắt nguồn từ sự hy sinh, đùm bọc và tấm lòng thủy chung của Nhân dân.',
      modernRelevance: 'Giáo dục truyền thống biết ơn cội nguồn và tinh thần đoàn kết dân tộc.',
    },
    quick60s: {
      author: 'Tố Hữu',
      genre: 'Thơ lục bát (Trữ tình – Chính trị)',
      context: 'Tháng 10/1954, Trung ương Đảng và Chính phủ rời Việt Bắc về Hà Nội.',
      theme: 'Nghĩa tình cách mạng gắn bó giữa cán bộ và nhân dân Việt Bắc.',
      coreFigureOrCharacter: 'Cặp nhân vật trữ tình "Mình" và "Ta".',
      mainIdea: 'Bản tình ca về đạo lý thủy chung và bản hùng ca về cuộc kháng chiến chống Pháp.',
      keyArt: 'Thể thơ lục bát hoàn hảo, kết cấu đối đáp dân gian, bức tranh Tứ bình, bút pháp sử thi.',
      goldenKeywords: ['Mười lăm năm ấy', 'Áo chàm', 'Chăn sui đắp cùng', 'Bức tranh Tứ bình', 'Đêm đêm rầm rập'],
      takeaway: 'Khúc ca ân tình bất hủ kết tinh vẻ đẹp tâm hồn Việt Nam trong kháng chiến.',
    },
  },

  'dat-nuoc': {
    slug: 'dat-nuoc',
    title: 'Đất Nước (Trích trường ca Mặt đường khát vọng)',
    authorId: 'nguyen-khoa-diem',
    authorName: 'Nguyễn Khoa Điềm',
    grade: 12,
    genre: 'Thơ',
    textbook: 'Ngữ văn 12 (Chương trình THPT)',
    year: '1971',
    origin: 'Trích chương V của bản trường ca "Mặt đường khát vọng", viết tại chiến khu Trị – Thiên năm 1971.',
    topic: 'Cảm nhận mới mẻ về cội nguồn Đất Nước và tư tưởng cốt lõi "Đất Nước của Nhân dân".',
    centralTheme:
      'Đất Nước không phải là khái niệm trừu tượng xa xôi mà hiện hữu gần gũi trong đời sống văn hóa hằng ngày, được kiến tạo qua chiều dài thời gian – không gian – lịch sử bởi chính mồ hôi và máu xương của Nhân dân.',
    keywords: ['Nguyễn Khoa Điềm', 'Đất Nước', 'Mặt đường khát vọng', 'Đất Nước của Nhân dân', 'Miếng trầu bây giờ bà ăn', 'Hóa thân cho dáng hình xứ sở'],
    hookIntro:
      '“Khi ta lớn lên Đất Nước đã có rồi” — một lời tâm tình dịu dàng mà sâu lắng đưa ta trở về với cội nguồn văn hóa dân tộc: từ miếng trầu bà ăn, cái kèo cái cột đến hàng ngàn lớp người vô danh đã làm nên Đất Nước muôn đời.',
    coverImage: WORK_IMAGES['dat-nuoc'],
    historicContext: {
      timeframe: 'Cuối năm 1971 tại chiến khu Trị – Thiên giữa những năm tháng ác liệt của cuộc kháng chiến chống Mỹ.',
      historicalBackground:
        'Phong trào đấu tranh của thanh niên, học sinh, sinh viên các đô thị miền Nam đang dâng cao hướng về Tổ quốc.',
      personalCircumstance:
        'Nguyễn Khoa Điềm viết trường ca này để thức tỉnh thế hệ trẻ vùng tạm chiếm nhận rõ sứ mệnh của mình trước vận mệnh dân tộc.',
      impactOnWork:
        'Tạo nên giọng thơ trữ tình – chính luận sâu sắc, vừa như lời trò chuyện tâm tình với người yêu ("Em ơi em"), vừa mang tầm khái quát triết học lịch sử.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Phần 1 (42 câu đầu): Cảm nhận Đất Nước từ phương diện Văn hóa – Thời gian – Không gian', content: 'Đất Nước bắt đầu từ miếng trầu bà ăn, truyền thuyết Thánh Gióng, phong tục búi tóc, hạt gạo một nắng hai sương và trách nhiệm "Phải biết gắn bó và san sẻ".' },
        { part: 'Phần 2 (47 câu sau): Tư tưởng cốt lõi "Đất Nước của Nhân dân"', content: 'Nhân dân vô danh đã hóa thân làm nên danh thắng địa lý, viết nên bốn nghìn năm lịch sử và truyền lại bản sắc văn hóa cho muôn đời.' },
      ],
      shortSummary:
        'Đoạn trích lý giải một cách bình dị mà sâu sắc câu hỏi: Đất Nước có từ bao giờ và Đất Nước là gì? Từ những nét văn hóa phong tục thân thuộc (ăn trầu, bới tóc, trồng tre, giã gạo) đến chiều rộng không gian và chiều dài lịch sử, nhà thơ đi đến kết luận mang tính phát hiện: chính những con người Nhân dân bình dị, vô danh đã làm ra Đất Nước, truyền lửa và giữ nước qua hàng ngàn thế hệ.',
      emotionalArc: 'Thân thiết, gần gũi -> Suy tư, tự hào -> Trang trọng, thành kính và thức tỉnh trách nhiệm.',
    },
    mainContentPoints: [
      'Cội nguồn Đất Nước gắn liền với văn hóa dân gian, phong tục tập quán và đời sống gia đình bình dị.',
      'Định nghĩa Đất Nước toàn diện trên 3 chiều: Chiều rộng không gian địa lý, Chiều dài thời gian lịch sử và Chiều sâu tâm hồn văn hóa.',
      'Lời nhắn nhủ thế hệ trẻ: "Đất Nước là máu xương của mình / Phải biết gắn bó và san sẻ / Phải biết hóa thân cho dáng hình xứ sở".',
      'Tư tưởng "Đất Nước của Nhân dân": chính nhân dân đã tạc nên dáng hình sông núi (Vọng Phu, Trống Mái, núi Bút non Nghiên) và làm nên lịch sử.',
    ],
    analysisLevels: {
      basic:
        'Đoạn trích thể hiện cách nhìn mới mẻ của Nguyễn Khoa Điềm về Đất Nước: Đất Nước gắn liền với những gì gần gũi, thân thuộc nhất trong cuộc sống mỗi người và do chính Nhân dân tạo dựng, giữ gìn qua bốn nghìn năm lịch sử.',
      detailed:
        'Điểm độc đáo nhất của Nguyễn Khoa Điềm là vận dụng sáng tạo kho tàng văn hóa dân gian (cổ tích Trầu cau, truyền thuyết Lạc Long Quân – Âu Cơ, Thánh Gióng, ca dao "Muối ba năm...", "Cầm vàng..."). Khi nhìn ngắm bản đồ danh thắng Việt Nam, nhà thơ không nhìn thấy những khối đá vô tri mà nhìn thấy tâm hồn, số phận và khát vọng của Nhân dân đã hóa thân thành sông núi.',
      advanced:
        'Về mặt tư tưởng mỹ học, đoạn trích đánh dấu bước phát triển vượt bậc của quan niệm về Quốc gia – Dân tộc trong văn học Việt Nam: nếu văn học trung đại quan niệm "Nam quốc sơn hà Nam đế cư" (Đất nước của Vua, của các triều đại), thì Nguyễn Khoa Điềm khẳng định dứt khoát "Đất Nước này là Đất Nước Nhân dân / Đất Nước của Nhân dân, Đất Nước của ca dao thần thoại". Chính luận và trữ tình hòa làm một trong thể thơ tự do phóng khoáng.',
    },
    poetryAnalysis: [
      {
        id: 'dn-p1',
        stanzaNumber: 1,
        title: 'Phần 1: Cội nguồn Đất Nước trong văn hóa dân gian và máu xương mỗi người',
        excerpt:
          'Khi ta lớn lên Đất Nước đã có rồi\nĐất Nước có trong những cái “ngày xửa ngày xưa...” mẹ thường hay kể\nĐất Nước bắt đầu với miếng trầu bây giờ bà ăn\nĐất Nước lớn lên khi dân mình biết trồng tre mà đánh giặc\nTóc mẹ thì bới sau đầu\nCha mẹ thương nhau bằng gừng cay muối mặn\nCái kèo, cái cột thành tên\nHạt gạo phải một nắng hai sương xay, giã, giần, sàng\nĐất Nước có từ ngày đó...',
        contentSummary: 'Lý giải sự hình thành và lớn lên của Đất Nước qua những thuần phong mỹ tục và đời sống lao động nghĩa tình.',
        poeticImages: [
          { image: 'Miếng trầu bây giờ bà ăn', meaning: 'Biểu tượng văn hóa ngàn đời về tình nghĩa vợ chồng, anh em (Sự tích Trầu cau) vẫn sống động ngay trong hiện tại.' },
          { image: 'Hạt gạo phải một nắng hai sương xay, giã, giần, sàng', meaning: 'Bốn động từ liên tiếp khắc họa nền văn minh lúa nước nhọc nhằn, bền bỉ của người nông dân Việt Nam.' },
        ],
        keyWords: [
          { word: 'Đất Nước (viết hoa)', nuance: 'Cách viết hoa trang trọng biến Đất Nước thành một sinh thể thiêng liêng, tôn kính.' },
        ],
        rhetoricalDevices: [
          { device: 'Điệp cấu trúc (Đất Nước đã có... Đất Nước bắt đầu... Đất Nước lớn lên...)', effect: 'Tái hiện tiến trình trưởng thành của dân tộc từ thuở hồng hoang.' },
        ],
        roleInWork: 'Đưa khái niệm Đất Nước vĩ đại trở về gần gũi trong từng nếp nhà, từng phong tục Việt.',
      },
      {
        id: 'dn-p2',
        stanzaNumber: 2,
        title: 'Phần 2: Tư tưởng "Đất Nước của Nhân dân"',
        excerpt:
          'Những người vợ nhớ chồng còn góp cho Đất Nước những núi Vọng Phu\nCặp vợ chồng yêu nhau góp nên hòn Trống Mái\nGót ngựa của Thánh Gióng đi qua còn trăm ao đầm để lại\nChín mươi chín con voi góp mình dựng đất Tổ Hùng Vương...\n\nHọ giữ và truyền cho ta hạt lúa ta trồng\nHọ truyền lửa qua mỗi nhà, từ hòn than qua con cúi\nHọ truyền giọng điệu mình cho con tập nói\nHọ gánh theo tên xã, tên làng trong mỗi chuyến di dân\nHọ đắp đập be bờ cho người sau trồng cây hái trái\nĐể Đất Nước này là Đất Nước Nhân dân\nĐất Nước của Nhân dân, Đất Nước của ca dao thần thoại.',
        contentSummary: 'Nhân dân là người kiến tạo địa lý, lịch sử và văn hóa để làm nên Đất Nước muôn đời.',
        poeticImages: [
          { image: 'Núi Vọng Phu, hòn Trống Mái, trăm ao đầm, núi Bút non Nghiên', meaning: 'Thiên nhiên địa lý thực chất là sự kết tinh của tâm hồn, tình yêu thủy chung, ý chí chống giặc và truyền thống hiếu học của Nhân dân.' },
          { image: 'Họ gánh theo tên xã, tên làng trong mỗi chuyến di dân', meaning: 'Hình ảnh giàu sức gợi về hành trình mở cõi đầy nhọc nhằn nhưng luôn mang theo cội nguồn văn hóa.' },
        ],
        keyWords: [
          { word: 'Họ (điệp liên tiếp)', nuance: 'Chỉ đám đông hàng triệu con người Nhân dân bình dị, không ai nhớ mặt đặt tên nhưng là chủ nhân đích thực của lịch sử.' },
        ],
        rhetoricalDevices: [
          { device: 'Quy nạp nghệ thuật & Điệp cấu trúc', effect: 'Dẫn dắt từ hàng loạt dẫn chứng sinh động đến mệnh đề chân lý: "Đất Nước của Nhân dân".' },
        ],
        roleInWork: 'Đỉnh cao tư tưởng chính luận – trữ tình của toàn bộ chương thơ.',
      },
    ],
    artisticFeatures: {
      prominentCraft: 'Sự kết hợp nhuần nhuyễn giữa chất chính luận (suy tư triết học sâu sắc) và chất trữ tình (giọng tâm tình ngọt ngào); vận dụng sáng tạo chất liệu văn hóa dân gian.',
      language: 'Bình dị, giàu sức gợi, thấm đẫm hơi thở ca dao, tục ngữ, thần thoại, cổ tích.',
      tone: 'Trầm lắng, suy tư, tâm tình mà trang nghiêm, hào sảng.',
      structureOrPointOfView: 'Thể thơ tự do câu dài ngắn đan xen, lập luận quy nạp – diễn dịch chặt chẽ.',
      imageryOrRhetoric: 'Miếng trầu, gừng cay muối mặn, núi Vọng Phu, hòn Trống Mái, ca dao thần thoại.',
      distinctiveDevices: [
        { name: 'Vận dụng chất liệu Văn hóa Dân gian', description: 'Không trích dẫn nguyên văn mà lấy ý, lấy hồn ca dao cổ tích hòa vào mạch thơ hiện đại.' },
        { name: 'Chiết tự nghệ thuật', description: 'Tách từ ghép "Đất Nước" thành "Đất là nơi...", "Nước là nơi..." rồi hợp nhất lại trong tình yêu đôi lứa.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-ca-dao-than-thoai',
        detailName: 'Mệnh đề "Đất Nước của Nhân dân, Đất Nước của ca dao thần thoại"',
        excerptOrContext: 'Để Đất Nước này là Đất Nước Nhân dân / Đất Nước của Nhân dân, Đất Nước của ca dao thần thoại.',
        directMeaning: 'Định nghĩa tổng kết về chủ nhân và bản sắc tâm hồn của Đất Nước.',
        symbolicMeaning: 'Nhân dân gửi gắm toàn bộ vẻ đẹp tâm hồn mình (biết yêu thương, quý trọng tình nghĩa và quyết liệt chống thù) vào kho tàng ca dao thần thoại.',
        thematicConnection: 'Hạt nhân tư tưởng sáng chói nhất của toàn bộ tác phẩm.',
      },
    ],
    literaryValues: {
      ideologicalValue: 'Làm sâu sắc thêm tinh thần yêu nước thông qua tư tưởng "Đất Nước của Nhân dân", thức tỉnh ý thức trách nhiệm công dân của thế hệ trẻ.',
      artisticValue: 'Một trong những chương thơ hay nhất về đề tài Tổ quốc trong thơ Việt Nam hiện đại.',
      message: 'Đất Nước kết tinh trong máu xương của mỗi người; yêu nước là biết gắn bó, san sẻ và cống hiến từ những điều bình dị nhất.',
      modernRelevance: 'Bồi đắp niềm tự hào về bản sắc văn hóa dân tộc và trách nhiệm xây dựng, bảo vệ Tổ quốc hôm nay.',
    },
    quick60s: {
      author: 'Nguyễn Khoa Điềm',
      genre: 'Trường ca (Thơ tự do trữ tình – chính luận)',
      context: 'Cuối năm 1971 tại chiến khu Trị – Thiên.',
      theme: 'Cội nguồn Đất Nước và tư tưởng "Đất Nước của Nhân dân".',
      coreFigureOrCharacter: 'Hình tượng Đất Nước và Nhân dân vô danh.',
      mainIdea: 'Đất Nước gần gũi trong đời sống văn hóa hằng ngày và do chính Nhân dân kiến tạo, giữ gìn.',
      keyArt: 'Chất liệu văn hóa dân gian đậm đặc, giọng thơ trữ tình – chính luận, chiết tự nghệ thuật.',
      goldenKeywords: ['Khi ta lớn lên', 'Miếng trầu bà ăn', 'Gừng cay muối mặn', 'Máu xương của mình', 'Đất Nước của Nhân dân'],
      takeaway: 'Bản tuyên ngôn bằng thơ sâu sắc và bình dị nhất về tư tưởng Đất Nước của Nhân dân.',
    },
  },

  'vo-chong-a-phu': {
    slug: 'vo-chong-a-phu',
    title: 'Vợ chồng A Phủ',
    authorId: 'to-hoai',
    authorName: 'Tô Hoài',
    grade: 12,
    genre: 'Truyện ngắn',
    textbook: 'Ngữ văn 12 (Chương trình THPT)',
    year: '1952',
    origin: 'In trong tập "Truyện Tây Bắc" (1953) – Giải Nhất Giải thưởng Hội Văn nghệ Việt Nam 1954–1955.',
    topic: 'Số phận bi thảm dưới ách thống trị của chúa đất phong kiến miền núi và sức sống tiềm tàng, hành trình tự giải phóng của người dân Tây Bắc.',
    centralTheme:
      'Qua cuộc đời đau khổ và sự trỗi dậy mãnh liệt của Mị và A Phủ tại Hồng Ngài, tác phẩm tố cáo đanh thép chế độ phong kiến – thần quyền tàn bạo, đồng thời ngợi ca sức sống tiềm tàng bất diệt và con đường đến với ánh sáng cách mạng của đồng bào vùng cao.',
    keywords: ['Tô Hoài', 'Vợ chồng A Phủ', 'Truyện Tây Bắc', 'Nhân vật Mị', 'Đêm tình mùa xuân', 'Giọt nước mắt của A Phủ'],
    hookIntro:
      'Từ một cô gái trẻ đẹp thổi sáo giỏi bị biến thành con rùa nuôi trong xó cửa nhà thống lý Pá Tra, ngọn lửa sự sống trong Mị đã bùng cháy trở lại qua tiếng sáo đêm tình mùa xuân và giọt nước mắt của A Phủ trong đêm đông cắt dây trói.',
    coverImage: WORK_IMAGES['vo-chong-a-phu'],
    historicContext: {
      timeframe: 'Năm 1952, sau chuyến đi thực tế 8 tháng của Tô Hoài cùng bộ đội giải phóng Tây Bắc.',
      historicalBackground:
        'Chiến dịch Tây Bắc giải phóng đồng bào các dân tộc miền núi khỏi ách áp bức kép của thực dân Pháp và bọn chúa đất thống lý phong kiến.',
      personalCircumstance:
        'Tô Hoài cùng ăn, cùng ở, cùng làm với đồng bào H’Mông, Thái, Mường, thấu hiểu sâu sắc nỗi thống khổ và vẻ đẹp tâm hồn của họ.',
      impactOnWork:
        'Đem lại những trang văn đậm đặc bản sắc văn hóa vùng cao Tây Bắc và chiều sâu phân tích tâm lý bậc thầy.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Phần 1: Cuộc đời làm dâu gạt nợ của Mị tại nhà thống lý Pá Tra', content: 'Từ cô gái tài hoa, hiếu thảo bị bắt về cúng trình ma nhà Pá Tra, sống lầm lũi như con rùa nuôi trong xó cửa với căn buồng tối có ô cửa sổ bằng bàn tay.' },
        { part: 'Phần 2: Sự hồi sinh của tâm hồn Mị trong Đêm tình mùa xuân ở Hồng Ngài', content: 'Tiếng sáo gọi bạn tình và men rượu ngày Tết đánh thức ý thức sống của Mị; dù bị A Sử trói đứng vào cột nhà, tâm hồn Mị vẫn bay theo tiếng sáo.' },
        { part: 'Phần 3: Cuộc đời A Phủ và hành động Mị cắt dây trói cứu A Phủ trong đêm đông', content: 'A Phủ vì đánh A Sử mà phải ở đợ trừ nợ rồi bị trói đứng chờ chết vì hổ ăn mất bò; giọt nước mắt của A Phủ thức tỉnh Mị cắt dây trói và cả hai cùng chạy trốn sang Phiềng Sa theo cách mạng.' },
      ],
      shortSummary:
        'Vì món nợ truyền kiếp của cha mẹ, Mị — một cô gái H’Mông xinh đẹp, thổi sáo giỏi — bị A Sử bắt cóc về làm dâu gạt nợ nhà thống lý Pá Tra. Quãng đời đọa đày khiến Mị tê liệt sức phản kháng, cho đến đêm tình mùa xuân tiếng sáo gọi bạn làm tâm hồn cô sống dậy. Sau đó, khi chứng kiến chàng trai gan góc A Phủ bị trói đứng sắp chết và rơi dòng nước mắt tuyệt vọng, lòng thương người và khát vọng tự do đã thôi thúc Mị rút dao cắt dây trói cho A Phủ rồi cùng anh vùng chạy khỏi Hồng Ngài, tìm đến ánh sáng cách mạng ở Phiềng Sa.',
      centralConflict: 'Xung đột gay gắt giữa Ách áp bức cường quyền – thần quyền nhà thống lý Pá Tra và Sức sống tiềm tàng, khát vọng tự do của Mị và A Phủ.',
    },
    mainContentPoints: [
      'Bi kịch làm dâu gạt nợ: sự hủy hoại con người cả về thể xác (làm việc quần quật hơn trâu ngựa) lẫn tinh thần (con ma nhà thống lý nhận mặt, căn buồng như ngục thất).',
      'Diễn biến tâm lý kỳ diệu của Mị trong Đêm tình mùa xuân: Tiếng sáo -> Uống rượu -> Nhận thức "Mị trẻ lắm" -> Muốn đi chơi -> Bị trói nhưng hồn vẫn sống.',
      'Hình tượng A Phủ khỏe mạnh, gan góc, tự do của núi rừng bị biến thành nô lệ vì phạt vạ bất công.',
      'Đêm mùa đông cứu A Phủ: từ sự vô cảm ban đầu đến khoảnh khắc nhìn thấy dòng nước mắt của A Phủ, Mị tự cởi trói cho cả A Phủ và cuộc đời mình.',
    ],
    analysisLevels: {
      basic:
        'Truyện kể về cuộc đời đau khổ của hai người dân miền núi là Mị và A Phủ dưới sự thống trị tàn bạo của cha con thống lý Pá Tra. Nhờ sức sống tiềm tàng và tình thương yêu đồng cảnh ngộ, Mị đã cứu A Phủ và cả hai cùng trốn đi theo cách mạng.',
      detailed:
        'Tô Hoài thể hiện nghệ thuật miêu tả tâm lý nhân vật xuất sắc qua hai đêm thức tỉnh của Mị: Đêm tình mùa xuân là sự trỗi dậy của khát vọng hạnh phúc cá nhân (nhờ tiếng sáo và hơi rượu), còn Đêm mùa đông là sự bùng nổ của hành động tự giải phóng (nhờ giọt nước mắt của A Phủ và lòng nhân ái giai cấp).',
      advanced:
        'Ở tầng sâu thi pháp chủ nghĩa nhân đạo cách mạng, "Vợ chồng A Phủ" không dừng lại ở việc thương xót nạn nhân như văn học hiện thực trước 1945 (Chí Phèo chết trên ngưỡng cửa hoàn lương), mà phát hiện ra quy luật tất yếu: áp bức càng nặng nề thì sức phản kháng càng mãnh liệt. Hành động Mị cắt dây trói rồi vụt chạy theo A Phủ là bước nhảy vọt biện chứng từ tự phát sang tự giác, mở đường cho người lao động tự làm chủ vận mệnh mình.',
    },
    characters: [
      {
        id: 'nhan-vat-mi',
        name: 'Nhân vật Mị',
        role: 'Nhân vật trung tâm',
        appearance: 'Cô gái H’Mông trẻ đẹp, thổi sáo giỏi, chăm chỉ, hiếu thảo ("Con gái nhà giàu thường hay xấu, nhưng Mị thì đẹp").',
        situation: 'Bị bắt làm con dâu gạt nợ và bị cầm tù tinh thần bởi thần quyền "con ma nhà thống lý".',
        speechAndActions: 'Lầm lũi cúi mặt suốt ngày, nhưng đêm xuân đã lén uống rượu ực từng bát, xắn mỡ bỏ vào đĩa đèn, và đêm đông dứt khoát lấy dao cắt dây mây cứu A Phủ.',
        innerPsychology: 'Ẩn dưới lớp tro tàn tê liệt là ngọn lửa sức sống tiềm tàng mãnh liệt, khao khát yêu thương và tự do.',
        symbolicMeaning: 'Biểu tượng cho vẻ đẹp tâm hồn và sức sống bất diệt của người phụ nữ miền núi Tây Bắc.',
        quote: 'Mị trẻ lắm. Mị vẫn còn trẻ. Mị muốn đi chơi. Bao nhiêu người có chồng cũng đi chơi ngày Tết.',
      },
      {
        id: 'nhan-vat-a-phu',
        name: 'Nhân vật A Phủ',
        role: 'Nhân vật chính song hành',
        appearance: 'Chàng trai khỏe mạnh, chạy nhanh như ngựa, biết đúc lưỡi cày, đục cuốc, săn bò tót rất bạo.',
        situation: 'Mồ côi từ nhỏ, vì trừng trị sự ngang ngược của A Sử mà bị phạt vạ 100 bạc trắng, trở thành đầy tớ gạt nợ suốt đời.',
        speechAndActions: 'Gan góc không khuất phục trước đòn roi, tự đi lấy cọc và cuộn dây mây về chịu trói, nhai đứt hai vòng dây mây và vùng chạy đưa Mị thoát khỏi Hồng Ngài.',
        innerPsychology: 'Kiêu hãnh, dũng cảm, yêu tự do nhưng cũng có phút giây tuyệt vọng rơi nước mắt khi đối diện cái chết oan ức.',
        symbolicMeaning: 'Hiện thân cho sức mạnh nguyên sơ, bất khuất của con người đại ngàn Tây Bắc.',
      },
    ],
    artisticFeatures: {
      prominentCraft: 'Nghệ thuật miêu tả tâm lý nhân vật tinh tế (đặc biệt là nhân vật Mị) kết hợp với bút pháp khắc họa tính cách qua hành động (nhân vật A Phủ); bức tranh phong tục Tây Bắc đậm đà bản sắc.',
      language: 'Giàu chất thơ, tự nhiên, sinh động, sử dụng nhuần nhuyễn lời nửa trực tiếp.',
      tone: 'Trầm buồn, xót xa ở phần đầu; rạo rực, hồi hộp và sảng khoái ở phần sau.',
      structureOrPointOfView: 'Trần thuật linh hoạt, dịch chuyển điểm nhìn vào sâu trong tâm thức của Mị.',
      imageryOrRhetoric: 'Tảng đá trước cửa, căn buồng có lỗ vuông bằng bàn tay, tiếng sáo gọi bạn tình, dòng nước mắt của A Phủ.',
      distinctiveDevices: [
        { name: 'Thủ pháp vật hóa & Biểu tượng không gian', description: 'Hình ảnh con rùa nuôi trong xó cửa và căn buồng tối có ô cửa sổ mờ trắng.' },
        { name: 'Nghệ thuật dẫn dắt xung đột tâm lý', description: 'Biến tiếng sáo và giọt nước mắt thành hai tác nhân kích hoạt sự hồi sinh và hành động giải phóng.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-tieng-sao',
        detailName: 'Âm thanh "Tiếng sáo gọi bạn tình" đêm mùa xuân',
        excerptOrContext: 'Ngoài đầu núi lấp ló đã có tiếng ai thổi sáo rủ bạn đi chơi: Mày có con trai con gái rồi / Mày đi làm nương / Ta không có con trai con gái / Ta đi tìm người yêu...',
        directMeaning: 'Tiếng sáo tỏ tình truyền thống của trai gái H’Mông trong dịp Tết vùng cao.',
        symbolicMeaning: 'Biểu tượng của tình yêu, tuổi trẻ và khát vọng tự do đánh thức tâm hồn Mị khỏi trạng thái tê liệt.',
        thematicConnection: 'Xuất hiện theo từng nấc thang tâm lý của Mị: từ ngoài đầu núi đến lửng lơ bay trong đầu Mị ngay cả khi bị trói.',
      },
      {
        id: 'chi-tiet-giot-nuoc-mat-a-phu',
        detailName: 'Chi tiết "Dòng nước mắt lấp lánh bò xuống hai hõm má đã xám đen lại" của A Phủ',
        excerptOrContext: 'Trời ơi, nó bắt trói đứng người ta đến chết, nó bắt mình chết cũng thôi, nó bắt trói đến chết người đàn bà ngày trước cũng ở cái nhà này...',
        directMeaning: 'Giọt nước mắt bất lực, căm uất của một chàng trai gan góc khi cận kề cái chết.',
        symbolicMeaning: 'Tia lửa nhân đạo đốt cháy sự vô cảm cuối cùng trong lòng Mị, kết nối hai người cùng khổ thành đồng chí giải phóng cho nhau.',
        thematicConnection: 'Nút thắt quyết định tạo nên bước ngoặt hành động cắt dây trói của Mị.',
      },
    ],
    literaryValues: {
      realisticValue: 'Bản cáo trạng đanh thép tố cáo tội ác tày trời của giai cấp thống trị phong kiến miền núi cấu kết với thực dân.',
      humanitarianValue: 'Khẳng định niềm tin mãnh liệt vào sức sống tiềm tàng và khả năng tự giải phóng của người lao động.',
      artisticValue: 'Kiệt tác tiêu biểu nhất của văn xuôi kháng chiến chống Pháp.',
      message: 'Không một thế lực bạo tàn nào có thể dập tắt được khát vọng sống, khát vọng tự do và tình thương yêu giữa những con người cùng cảnh ngộ.',
      modernRelevance: 'Tôn vinh quyền con người, quyền tự do hôn nhân và bình đẳng giới của phụ nữ vùng cao.',
    },
    quick60s: {
      author: 'Tô Hoài',
      genre: 'Truyện ngắn hiện đại',
      context: 'Năm 1952, sau chuyến đi thực tế cùng bộ đội giải phóng Tây Bắc.',
      theme: 'Số phận đọa đày và sức sống tiềm tàng, hành trình tự giải phóng của người dân miền núi.',
      coreFigureOrCharacter: 'Mị và A Phủ.',
      mainIdea: 'Ca ngợi sức sống tiềm tàng bất diệt và con đường từ bóng tối nô lệ đến ánh sáng cách mạng.',
      keyArt: 'Phân tích tâm lý bậc thầy, không gian biểu tượng, đậm sắc màu văn hóa Tây Bắc.',
      goldenKeywords: ['Con rùa nuôi trong xó cửa', 'Ô cửa sổ bằng bàn tay', 'Tiếng sáo đêm xuân', 'Giọt nước mắt A Phủ', 'Cắt dây trói'],
      takeaway: 'Khúc ca hồi sinh mãnh liệt của sức sống con người Tây Bắc giữa đêm tối cường quyền.',
    },
  },

  /* ======================================================================== */
  /* CHƯƠNG TRÌNH GDPT 2018 MỚI – KHỐI LỚP 10 (BỔ SUNG TOÀN DIỆN)             */
  /* ======================================================================== */

  'than-tru-troi': {
    slug: 'than-tru-troi',
    title: 'Thần Trụ Trời',
    authorId: 'dan-gian-viet-thai',
    authorName: 'Tác giả Dân gian Việt – Thái',
    grade: 10,
    genre: 'Thần thoại',
    textbook: 'Ngữ văn 10 (Kết nối tri thức & Chân trời sáng tạo – GDPT 2018)',
    year: 'Thời kỳ nguyên thủy cổ đại',
    origin: 'Trích từ kho tàng Thần thoại suy nguyên Việt Nam (Bài 1: Sức hấp dẫn của truyện kể).',
    topic: 'Giải thích nguồn gốc hình thành trời – đất, núi non, biển cả theo nhận thức của người Việt cổ.',
    centralTheme:
      'Khắc họa tầm vóc kỳ vĩ của vị thần sáng tạo vũ trụ trong buổi hồng hoang, qua đó gửi gắm khát vọng chinh phục tự nhiên và giải thích nguồn gốc thế giới của người Việt cổ.',
    keywords: ['Thần thoại suy nguyên', 'Thần Trụ Trời', 'Cột chống trời', 'Núi Không Lộ', 'Khai thiên lập địa', 'GDPT 2018'],
    hookIntro:
      'Thuở vũ trụ còn hỗn độn tối tăm, một vị thần khổng lồ vươn vai đứng dậy đội trời lên cao rồi tự tay đào đất, đắp đá dựng cột chống trời — khúc mở đầu kỳ vĩ nhất trong kho tàng thần thoại suy nguyên Việt Nam.',
    coverImage: WORK_IMAGES['than-tru-troi'],
    historicContext: {
      timeframe: 'Buổi bình minh của lịch sử loài người (thời kỳ công xã nguyên thủy).',
      historicalBackground:
        'Khi khoa học chưa phát triển, người nguyên thủy dùng trí tưởng tượng hồn nhiên, bay bổng để lý giải các hiện tượng tự nhiên và nguồn gốc vạn vật bằng hình tượng các vị thần.',
      personalCircumstance:
        'Được lưu truyền truyền miệng trong dân gian Việt Nam, có nét tương đồng thú vị với thần thoại Bàn Cổ trong khu vực Đông Á.',
      impactOnWork:
        'Đặt nền móng cho cảm hứng kỳ vĩ và tư duy nghệ thuật cổ sơ của văn học dân gian Việt Nam.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Phần 1: Bối cảnh vũ trụ thuở hỗn mang và sự xuất hiện của Thần Trụ Trời', content: 'Trời đất chỉ là một đám hỗn độn tối tăm, lạnh lẽo; vị thần khổng lồ xuất hiện với vóc dáng kỳ vĩ.' },
        { part: 'Phần 2: Hành động đội trời và đắp cột chống trời của vị thần', content: 'Thần ngẩng đầu đội trời lên rồi tự mình đào đất, đập đá đắp thành một cái cột vừa cao vừa to để chống trời.' },
        { part: 'Phần 3: Phá cột chống trời và sự hình thành địa hình núi, đảo, biển cả', content: 'Khi trời đã cao và khô cứng, thần phá cột ném đất đá đi khắp nơi tạo thành núi đồi, hố đào đất biến thành biển rộng.' },
      ],
      shortSummary:
        'Thuở chưa có muôn vật và loài người, trời đất còn dính liền trong khối hỗn độn mờ mịt. Thần Trụ Trời khổng lồ đứng dậy dùng đầu đội trời lên cao, rồi một mình đào đất đắp đá thành cột chống trời. Khi trời đất đã phân đôi vững chắc, thần phá cột ném đá khắp bốn phương tạo nên núi non, gò đống, còn chỗ thần đào đất trở thành biển cả mênh mông.',
      centralConflict: 'Sự đối kháng giữa sức mạnh sáng tạo của vị thần và trạng thái hỗn mang, tối tăm của vũ trụ nguyên sơ.',
    },
    mainContentPoints: [
      'Không gian vũ trụ nguyên sơ hỗn độn và thời gian phiếm chỉ đặc trưng của thể loại thần thoại.',
      'Hình tượng Thần Trụ Trời mang tầm vóc vũ trụ và sức mạnh lao động đơn độc mà vĩ đại.',
      'Cách cắt nghĩa hồn nhiên, giàu chất thơ về nguồn gốc núi non, biển cả và di tích núi Không Lộ.',
    ],
    analysisLevels: {
      basic:
        'Truyện Thần Trụ Trời giải thích sự hình thành của bầu trời, mặt đất, núi đồi và biển cả thông qua công lao của một vị thần khổng lồ. Truyện thể hiện trí tưởng tượng phong phú của người xưa.',
      detailed:
        'Điểm đặc sắc nhất của Thần Trụ Trời là hình tượng vị thần mang bóng dáng của người lao động cổ đại: thần cũng đào đất, vác đá, đắp cột, đổ mồ hôi kiên trì. Qua đó, người Việt cổ vừa thần thánh hóa tự nhiên, vừa tôn vinh sức mạnh cải tạo thế giới của chính con người.',
      advanced:
        'Xét theo thi pháp thể loại thần thoại suy nguyên trong chương trình GDPT 2018, "Thần Trụ Trời" hội tụ đầy đủ bộ tứ đặc trưng: không gian vũ trụ đang tạo lập, thời gian cổ sơ phiếm chỉ, nhân vật thần linh có năng lực siêu nhiên và cốt truyện đơn tuyến xoay quanh hành trạng sáng tạo văn hóa.',
    },
    characters: [
      {
        id: 'than-tru-troi-char',
        name: 'Thần Trụ Trời',
        role: 'Vị thần tối cổ khai thiên lập địa',
        appearance: 'Thân thể to lớn không biết bao nhiêu mà kể, chân thần bước một bước cứ như từ đỉnh núi này sang đỉnh núi khác.',
        situation: 'Sống trong đám mờ mịt hỗn độn khi trời đất chưa phân.',
        speechAndActions: 'Đứng dậy dùng đầu đội trời lên, đào đất, đập đá đắp cột chống trời cao chót vót, sau đó phá cột ném đất đá khắp nơi.',
        innerPsychology: 'Kiên cường, bền bỉ, quyết tâm tách biệt trời đất để mở ra không gian sinh tồn.',
        symbolicMeaning: 'Biểu tượng cho khát vọng khám phá, chinh phục thiên nhiên và sức lao động kiến tạo của người Việt cổ.',
      },
    ],
    artisticFeatures: {
      prominentCraft: 'Thủ pháp phóng đại kỳ vĩ kết hợp với trí tưởng tượng hồn nhiên, trực quan của tư duy thần thoại nguyên thủy.',
      language: 'Ngắn gọn, mộc mạc, giàu nhịp điệu kể chuyện dân gian; kết thúc có vè dân gian liệt kê các vị thần.',
      tone: 'Trang trọng, kỳ vĩ và hồn nhiên.',
      structureOrPointOfView: 'Ngôi kể thứ ba toàn tri với cốt truyện đơn tuyến 3 chặng (Trước khi dựng cột – Dựng cột – Sau khi phá cột).',
      imageryOrRhetoric: 'Bước chân từ đỉnh núi này sang đỉnh núi khác, cột đá cao nối trời đất, hố sâu thành biển rộng.',
      distinctiveDevices: [
        { name: 'Phóng đại kích thước vũ trụ', description: 'Đo lường vóc dáng và bước chân của thần bằng kích thước của núi non, bầu trời.' },
        { name: 'Hư cấu suy nguyên', description: 'Gắn kết hành động phá cột của thần với địa hình thực tế (núi đồi, biển cả, núi Không Lộ).' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-cot-chong-troi',
        detailName: 'Hình ảnh "Cột chống trời" và hành động phá cột ném đá',
        excerptOrContext: 'Thần cứ một mình cầy cục đắp, cột đá càng cao chót vót càng đẩy trời lên mãi phía mây xanh... Sau đó thần phá cột đi, ném vung đá và đất đi khắp mọi nơi.',
        directMeaning: 'Lý giải vì sao bầu trời cao vợi và vì sao mặt đất chỗ cao chỗ thấp (núi, đảo, biển).',
        symbolicMeaning: 'Tượng trưng cho công cuộc khai phá đất đai, dựng xây cõi sống của tổ tiên.',
        thematicConnection: 'Hạt nhân nghệ thuật trung tâm của thần thoại suy nguyên Việt Nam.',
      },
    ],
    literaryValues: {
      ideologicalValue: 'Thể hiện thế giới quan duy vật chất phác và khát vọng làm chủ tự nhiên của người Việt cổ.',
      artisticValue: 'Tác phẩm mở đầu tiêu biểu nhất cho thể loại thần thoại Việt Nam trong SGK Ngữ văn 10 mới.',
      message: 'Thế giới tươi đẹp được kiến tạo từ ý chí kiên cường và bàn tay lao động không ngừng nghỉ.',
      modernRelevance: 'Nuôi dưỡng trí tưởng tượng sáng tạo và ý thức trân trọng cội nguồn văn hóa dân gian.',
    },
    quick60s: {
      author: 'Dân gian Việt Nam',
      genre: 'Thần thoại suy nguyên',
      context: 'Thời kỳ nguyên thủy, khi con người lý giải nguồn gốc vũ trụ.',
      theme: 'Quá trình phân tách trời – đất và hình thành địa hình tự nhiên.',
      coreFigureOrCharacter: 'Thần Trụ Trời khổng lồ.',
      mainIdea: 'Giải thích nguồn gốc thế giới và ca ngợi sức mạnh khai thiên lập địa.',
      keyArt: 'Không gian vũ trụ, thời gian cổ sơ, phóng đại kỳ vĩ.',
      goldenKeywords: ['Hỗn độn', 'Đội trời', 'Đắp cột chống trời', 'Phá cột thành núi biển', 'Núi Không Lộ'],
      takeaway: 'Khúc ca khai thiên lập địa mở đầu kho tàng văn học dân gian Việt Nam.',
    },
  },

  'chuyen-chuc-phan-su-den-tan-vien': {
    slug: 'chuyen-chuc-phan-su-den-tan-vien',
    title: 'Chuyện chức phán sự đền Tản Viên',
    authorId: 'nguyen-du-truyen-ky',
    authorName: 'Nguyễn Dữ',
    grade: 10,
    genre: 'Truyện ngắn',
    textbook: 'Ngữ văn 10 (Kết nối tri thức, Chân trời sáng tạo, Cánh diều – GDPT 2018)',
    year: 'Thế kỷ XVI',
    origin: 'Trích trong tập "Truyền kỳ mạn lục" (tác phẩm thứ 8 trên tổng số 20 truyện).',
    topic: 'Khí phách cương trực, dũng cảm trừ hại cho dân của kẻ sĩ Ngô Tử Văn và sự chiến thắng của chính nghĩa.',
    centralTheme:
      'Đề cao tinh thần khảng khái, chính trực, dám đấu tranh chống lại cái ác và thế lực ngoại xâm tàn bạo của trí thức Đại Việt thông qua hình tượng Ngô Tử Văn.',
    keywords: ['Truyền kỳ mạn lục', 'Ngô Tử Văn', 'Đốt đền tà', 'Minh ti', 'Chức phán sự', 'Kẻ sĩ cứng cỏi'],
    hookIntro:
      'Giữa ban ngày, chàng nho sĩ Ngô Tử Văn châm lửa đốt cháy ngôi đền của tên tướng giặc phương Bắc tác oai tác quái, rồi hiên ngang bước xuống cõi Minh ti đối chất trước Diêm Vương — thiên truyền kỳ hào sảng bậc nhất thế kỷ XVI.',
    coverImage: WORK_IMAGES['chuyen-chuc-phan-su-den-tan-vien'],
    historicContext: {
      timeframe: 'Thế kỷ XVI, thời kỳ chế độ phong kiến Đại Việt bắt đầu suy thoái, nhiều quan lại tham nhũng.',
      historicalBackground:
        'Nguyễn Dữ rời bỏ chốn quan trường về ẩn cư, viết Truyền kỳ mạn lục để gửi gắm nỗi ưu thời mẫn thế và khát vọng công lý.',
      personalCircumstance:
        'Lấy bối cảnh cuối đời nhà Hồ – đầu thời kháng chiến chống quân Minh xâm lược.',
      impactOnWork:
        'Dùng thế giới cõi âm (Minh ti) có phần bị bưng bít để phơi bày hiện thực quan trường cõi trần và khẳng định niềm tin "tà không thể thắng chính".',
    },
    structureAndSummary: {
      layout: [
        { part: 'Phần 1: Giới thiệu nhân vật Ngô Tử Văn và hành động đốt đền tà', content: 'Tử Văn tính tình khảng khái, nóng nảy, thấy sự gian tà thì không chịu được nên đã tắm gội châm lửa đốt đền tên tướng giặc họ Thôi.' },
        { part: 'Phần 2: Cuộc đối đầu với hồn ma tướng giặc, Thổ công và phiên tòa nơi Minh ti', content: 'Tử Văn không hề khiếp sợ trước lời đe dọa của hồn ma, biết rõ chân tướng nhờ Thổ công và thắng kiện vẻ vang trước mặt Diêm Vương.' },
        { part: 'Phần 3: Tử Văn nhận chức Phán sự đền Tản Viên và Lời bình của tác giả', content: 'Trở về trần gian rồi hóa, nhậm chức Phán sự giữ việc xử án ở đền Tản Viên; lời bình tôn vinh kẻ sĩ "cứng cỏi".' },
      ],
      shortSummary:
        'Ngô Tử Văn (tên là Soạn), người huyện Yên Dũng, vốn khảng khái chính trực. Tức giận trước việc hồn ma tên tướng giặc bại trận họ Thôi chiếm đền Thổ công làm yêu làm quái trong dân gian, Tử Văn châm lửa đốt đền. Bị bắt xuống Minh ti, chàng kiên cường vạch mặt tên tướng giặc và bọn phán quan ăn hối lộ trước Diêm Vương. Thắng kiện, Tử Văn được tiến cử giữ chức Phán sự đền Tản Viên.',
      centralConflict: 'Cuộc đấu tranh không khoan nhượng giữa chính nghĩa dân tộc (Ngô Tử Văn – Thổ công) và tà tâm xâm lược, tham nhũng (tên tướng họ Thôi – phán quan hối lộ).',
    },
    mainContentPoints: [
      'Hành động châm lửa đốt đền: biểu hiện của lòng yêu nước, thương dân và bản lĩnh kẻ sĩ Đại Việt.',
      'Cuộc đấu lý đanh thép tại tòa án Minh ti: khí phách bất khuất "chết cũng không chịu nhún nhường".',
      'Nghệ thuật kết hợp yếu tố kỳ ảo (cõi âm, quỷ sứ, Diêm Vương) với hiện thực xã hội thối nát đương thời.',
      'Ý nghĩa lời bình cuối truyện: bài học nhân sinh về bản lĩnh "cứng cỏi" của người trí thức.',
    ],
    analysisLevels: {
      basic:
        'Truyện kể về Ngô Tử Văn dũng cảm đốt đền của tên tướng giặc hung ác để trừ hại cho dân. Dù bị kiện xuống âm phủ, chàng vẫn kiên cường đấu tranh và giành chiến thắng, sau đó được làm quan phán sự ở đền Tản Viên.',
      detailed:
        'Nguyễn Dữ xây dựng nhân vật Ngô Tử Văn vừa mang cốt cách nho sĩ cương trực vừa giàu tinh thần dân tộc: việc đốt đền tên tướng giặc họ Thôi và giúp vị Thổ thần Việt Nam (tướng của Lý Nam Đế) lấy lại ngôi đền là cuộc kháng chiến tâm linh bảo vệ chủ quyền văn hóa đất Việt.',
      advanced:
        'Xét theo đặc trưng thể loại truyện truyền kỳ, "cõi âm" trong tác phẩm chính là tấm gương phóng chiếu "cõi trần": ngay cả nơi Minh ti của Diêm Vương cũng có cảnh "trên vì đút lót mà bao che, dưới vì sợ uy mà hùa theo". Nhờ vậy, tác phẩm vượt lên khuôn khổ khuyến thiện trừng ác thông thường để trở thành bản hùng ca phê phán hiện thực sắc bén.',
    },
    characters: [
      {
        id: 'ngo-tu-van-char',
        name: 'Ngô Tử Văn (Ngô Soạn)',
        role: 'Nhân vật trung tâm – Kẻ sĩ chính trực',
        appearance: 'Chàng nho sĩ đất Lạng Giang, dáng ngồi ngất ngưởng, tự nhiên.',
        situation: 'Chứng kiến ngôi đền bị hồn ma tướng giặc phương Bắc chiếm cứ gây tai họa cho dân làng.',
        speechAndActions: 'Tắm gội sạch sẽ, khấn trời rồi châm lửa đốt đền; ngồi ngất ngưởng trước hồn ma; kêu oan đanh thép trước Diêm Vương; xin đem tư giấy đến đền Tản Viên đối chứng.',
        innerPsychology: 'Khảng khái, nóng nảy, trọng công lý hơn mạng sống, tuyệt đối tin vào chính nghĩa.',
        symbolicMeaning: 'Biểu tượng cho khí tiết cứng cỏi của kẻ sĩ và tinh thần quật cường của dân tộc Việt Nam.',
      },
      {
        id: 'tuong-giac-ho-thoi',
        name: 'Hồn ma Bách hộ họ Thôi',
        role: 'Nhân vật phản diện',
        appearance: 'Khôi ngô, cao lớn, đầu đội mũ trụ nhưng thực chất là kẻ tử trận ở gần đền.',
        situation: 'Tướng giặc nhà Minh bại trận bỏ mạng trên đất Việt, cướp đền Thổ công và đút lót thần xung quanh.',
        speechAndActions: 'Trách mắng, đe dọa Tử Văn; xuống Minh ti lại giả bộ đáng thương vu cáo Tử Văn trước mặt Diêm Vương.',
        innerPsychology: 'Xảo quyệt, tham lam, hèn hạ khi bị vạch trần.',
        symbolicMeaning: 'Hiện thân của tà quyền ngoại xâm và thói đạo đức giả lừa bịp.',
      },
    ],
    artisticFeatures: {
      prominentCraft: 'Sự đan bện nhuần nhuyễn giữa yếu tố kỳ ảo (ảo) và yếu tố hiện thực (thực); kịch tính dẫn dắt qua từng nút thắt.',
      language: 'Ngôn ngữ đối thoại sắc sảo, giàu tính luận chiến; lời bình cuối truyện cô đọng hàm súc.',
      tone: 'Hào sảng, trang nghiêm mà giàu sức châm biếm hiện thực.',
      structureOrPointOfView: 'Kết cấu truyền kỳ kinh điển: Giới thiệu nhân vật -> Biến cố kỳ ảo -> Cao trào xử kiện -> Kết thúc có hậu & Lời bình.',
      imageryOrRhetoric: 'Ngọn lửa đốt đền, sông lớn cầu dài gió tanh sóng xám nơi Minh ti, lồng sắt chụp đầu kẻ gian.',
      distinctiveDevices: [
        { name: 'Bút pháp Kỳ – Thực đan xen', description: 'Địa danh, thời gian lịch sử hoàn toàn có thật kết hợp với không gian âm phủ kỳ ảo.' },
        { name: 'Nghệ thuật xây dựng cao trào kịch tính', description: 'Phiên tòa nơi Minh ti đảo chiều ngoạn mục nhờ sự mưu trí và dũng cảm của Tử Văn.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-dot-den',
        detailName: 'Hành động "Tắm gội sạch sẽ, khấn trời rồi châm lửa đốt đền"',
        excerptOrContext: 'Tử Văn rất tức giận, một hôm tắm gội sạch sẽ, khấn trời, rồi châm lửa đốt đền. Mọi người đều lắc đầu lè lưỡi, lo sợ thay cho Tử Văn, nhưng chàng vẫn vung tay không cần gì cả.',
        directMeaning: 'Sự chuẩn bị trang trọng, tỉnh táo chứ không phải hành động bột phát nông nổi.',
        symbolicMeaning: 'Ngọn lửa của chính nghĩa và lòng yêu nước thiêu rụi sự mê tín và tàn dư giặc ngoại xâm.',
        thematicConnection: 'Mở màn cho chuỗi xung đột giữa cái Thiện và cái Ác xuyên suốt tác phẩm.',
      },
    ],
    literaryValues: {
      realisticValue: 'Phơi bày nạn tham nhũng, ăn của đút lót và sự bất công trong bộ máy quan lại phong kiến thế kỷ XVI.',
      humanitarianValue: 'Cổ vũ con người sống ngay thẳng, dũng cảm bảo vệ lẽ phải và nhân dân.',
      artisticValue: 'Kiệt tác tiêu biểu nhất của tập "Truyền kỳ mạn lục" – Thiên cổ kỳ bút.',
      message: 'Tà không bao giờ thắng được chính; người trí thức chân chính phải giữ vững khí tiết cứng cỏi trước mọi cường quyền.',
      modernRelevance: 'Truyền cảm hứng về tinh thần thượng tôn công lý và dũng khí đấu tranh chống tiêu cực.',
    },
    quick60s: {
      author: 'Nguyễn Dữ',
      genre: 'Truyện truyền kỳ (Chữ Hán)',
      context: 'Thế kỷ XVI, in trong tập "Truyền kỳ mạn lục".',
      theme: 'Khí phách kẻ sĩ Ngô Tử Văn đốt đền tà và thắng kiện nơi Minh ti.',
      coreFigureOrCharacter: 'Ngô Tử Văn, Thổ công và hồn ma tướng giặc họ Thôi.',
      mainIdea: 'Ca ngợi chính nghĩa dân tộc và bản lĩnh cứng cỏi không khuất phục trước cái ác.',
      keyArt: 'Kết hợp kỳ ảo và hiện thực, cốt truyện giàu kịch tính, lời bình triết lý.',
      goldenKeywords: ['Ngô Tử Văn', 'Đốt đền', 'Tướng giặc họ Thôi', 'Phiên tòa Minh ti', 'Phán sự đền Tản Viên'],
      takeaway: 'Kẻ sĩ chỉ lo không cứng cỏi được, còn gãy hay không là việc của trời.',
    },
  },

  'duc-thuy-son': {
    slug: 'duc-thuy-son',
    title: 'Dục Thúy sơn & Bảo kính cảnh giới (Bài 43)',
    authorId: 'nguyen-trai',
    authorName: 'Nguyễn Trãi',
    grade: 10,
    genre: 'Thơ',
    textbook: 'Ngữ văn 10 (Kết nối tri thức, Chân trời sáng tạo, Cánh diều – GDPT 2018)',
    year: 'Thế kỷ XV',
    origin: 'Trích trong "Ức Trai thi tập" (chữ Hán) và "Quốc âm thi tập" (chữ Nôm) – Chuyên đề Tác gia Nguyễn Trãi.',
    topic: 'Vẻ đẹp thiên nhiên đất nước hòa quyện cùng tâm hồn ưu quốc ái dân thanh cao của Ức Trai.',
    centralTheme:
      'Qua bức tranh non nước Dục Thúy thần tiên và cảnh ngày hè thôn dã rộn rã sức sống, Nguyễn Trãi bộc lộ tâm hồn nghệ sĩ tinh tế, tình yêu thiên nhiên nồng hậu và khát vọng "Dân giàu đủ khắp đòi phương".',
    keywords: ['Nguyễn Trãi', 'Dục Thúy sơn', 'Bảo kính cảnh giới 43', 'Liên hoa phù thủy thượng', 'Ngu cầm', 'Dân giàu đủ'],
    hookIntro:
      'Một bên là dáng núi Dục Thúy hóa đóa sen nổi trên mặt nước biếc và bóng tháp tựa trâm ngọc cài mái tóc xanh; một bên là sắc đỏ hoa lựu, tiếng ve ngân và ước vọng muôn dân ấm no — hai viên ngọc song bích chữ Hán và chữ Nôm của thiên tài Nguyễn Trãi.',
    coverImage: WORK_IMAGES['duc-thuy-son'],
    historicContext: {
      timeframe: 'Đầu thế kỷ XV (trước và sau cuộc khởi nghĩa Lam Sơn).',
      historicalBackground:
        'Nguyễn Trãi vừa là nhà quân sự – chính trị kiệt xuất vừa là thi nhân lớn mở đường cho thơ chữ Hán và thơ Nôm Đường luật Việt Nam.',
      personalCircumstance:
        'Sáng tác trong những phút giây "nhàn" hiếm hoi khi ngắm non nước Ninh Bình (núi Non Nước) và khi về ẩn cư tại Côn Sơn.',
      impactOnWork:
        'Thể hiện sự thống nhất trọn vẹn giữa con người hành đạo (ưu dân, ái quốc) và con người nghệ sĩ (giao hòa tuyệt đối với thiên nhiên).',
    },
    structureAndSummary: {
      layout: [
        { part: 'Thi phẩm chữ Hán "Dục Thúy sơn" (Núi Dục Thúy)', content: 'Vẻ đẹp kỳ ảo của núi Dục Thúy nơi cửa biển như đóa sen nổi trên mặt nước, bóng tháp như chiếc trâm ngọc xanh và nỗi hoài niệm Trương Thiếu bảo.' },
        { part: 'Thi phẩm chữ Nôm "Bảo kính cảnh giới" (Bài 43 – Cảnh ngày hè)', content: 'Bức tranh ngày hè tràn ngập sức sống (hòe lục, thạch lựu, hồng liên, tiếng chợ cá) và tấm lòng ước có đàn Ngu cầm gảy khúc Nam phong cho dân giàu đủ.' },
      ],
      shortSummary:
        'Chùm hai bài thơ tiêu biểu cho di sản thơ chữ Hán và chữ Nôm của Nguyễn Trãi trong chương trình Ngữ văn 10 mới: "Dục Thúy sơn" khắc họa vẻ đẹp thanh tân, thoát tục của danh thắng núi Non Nước gắn với chiều sâu lịch sử; còn "Bảo kính cảnh giới (Bài 43)" mở ra bức tranh mùa hè rực rỡ sắc màu, âm thanh đời thường và kết lại bằng lý tưởng nhân nghĩa "Dân giàu đủ khắp đòi phương".',
      emotionalArc: 'Thanh tao,超 thoát trước thiên nhiên -> Rạo rực, đắm say nhịp sống -> Trăn trở vì hạnh phúc nhân dân.',
    },
    mainContentPoints: [
      'Mỹ cảm tinh tế, độc đáo trong "Dục Thúy sơn": so sánh núi như đóa sen trên nước ("Liên hoa phù thủy thượng") và bóng tháp như trâm ngọc ("Tháp ảnh trâm thanh ngọc").',
      'Bức tranh thiên nhiên và đời sống ngày hè sinh động trong "Bảo kính cảnh giới 43" qua hệ thống động từ mạnh (đùn đùn, giương, phun, tiễn).',
      'Vẻ đẹp tâm hồn Nguyễn Trãi: dù thưởng ngoạn non nước hay "rồi hóng mát thuở ngày trường", trái tim vẫn luôn hướng về nhân dân ("Lẻ có một lòng ưu ái cũ").',
      'Sự cách tân thể thơ Đường luật bằng câu lục ngôn (6 chữ) thuần Việt trong "Quốc âm thi tập".',
    ],
    analysisLevels: {
      basic:
        'Hai bài thơ ca ngợi vẻ đẹp của thiên nhiên đất nước (núi Dục Thúy và cảnh mùa hè thôn quê), đồng thời thể hiện tình yêu quê hương và lòng thương dân sâu sắc của Nguyễn Trãi.',
      detailed:
        'Nếu ở "Dục Thúy sơn", Nguyễn Trãi dùng bút pháp mỹ lệ hóa để biến ngọn núi đá thành đóa sen thanh khiết và mái tóc thiếu nữ cài trâm ngọc, thì ở "Bảo kính cảnh giới 43", ông lại đưa hơi thở cuộc sống lao động bình dị ("Lao xao chợ cá làng ngư phủ") vào thơ Đường luật cùng nhịp câu lục ngôn rắn rỏi.',
      advanced:
        'Sự đối sánh giữa "Dục Thúy sơn" và "Bảo kính cảnh giới 43" làm sáng tỏ toàn diện chân dung văn hóa Nguyễn Trãi: dù ở cõi "Tiên cảnh trụy trần gian" hay nơi thôn dã, mỹ học của Ức Trai không bao giờ là sự thoát ly vị kỷ mà luôn quy tụ về "Nhân nghĩa" — lấy cuộc sống ấm no của muôn dân làm thước đo cao nhất của cái Đẹp.',
    },
    poetryAnalysis: [
      {
        id: 'dts-1',
        stanzaNumber: 1,
        title: 'Tuyệt tác chữ Hán: Dục Thúy sơn (Núi Dục Thúy)',
        excerpt:
          'Hải khẩu hữu tiên san,\nTiền niên lũ vãng hoàn.\nLiên hoa phù thủy thượng,\nTiên cảnh trụy trần gian.\nTháp ảnh trâm thanh ngọc,\nBa quang kính thúy hoàn.\nHữu hoài Trương Thiếu bảo,\nBi khắc tiển hoa ban.',
        contentSummary: 'Ngọn núi tiên nơi cửa biển hiện lên như đóa hoa sen nổi trên mặt nước, bóng tháp tựa trâm ngọc xanh cài lên mái tóc biếc, gợi nỗi hoài niệm tiền nhân Trương Hán Siêu.',
        poeticImages: [
          { image: 'Liên hoa phù thủy thượng (Hoa sen nổi trên mặt nước)', meaning: 'Hình ảnh ẩn dụ tuyệt mỹ biến khối đá vôi sừng sững thành đóa sen thanh cao, thoát tục.' },
          { image: 'Tháp ảnh trâm thanh ngọc / Ba quang kính thúy hoàn', meaning: 'Liên tưởng trẻ trung, tài hoa: bóng tháp trên núi như chiếc trâm ngọc xanh, ánh sóng nước như gương soi mái tóc biếc của giai nhân.' },
        ],
        keyWords: [
          { word: 'Trụy (rơi xuống)', nuance: 'Cõi tiên trên trời rơi xuống trần gian, tôn vinh vẻ đẹp kỳ tuyệt của non sông Đại Việt.' },
        ],
        rhetoricalDevices: [
          { device: 'Đối chuẩn mực Đường luật', effect: 'Câu 3 – 4 và câu 5 – 6 đối xứng hoàn hảo về thanh điệu, từ loại và hình ảnh.' },
        ],
        roleInWork: 'Khẳng định tài năng hội họa ngôn từ và cảm thức lịch sử sâu sắc trong thơ chữ Hán Nguyễn Trãi.',
      },
      {
        id: 'bkcg-43',
        stanzaNumber: 2,
        title: 'Tuyệt tác chữ Nôm: Bảo kính cảnh giới (Bài 43)',
        excerpt:
          'Rồi hóng mát thuở ngày trường,\nHòe lục đùn đùn tán rợp giương.\nThạch lựu hiên còn phun thức đỏ,\nHồng liên trì đã tiễn mùi hương.\nLao xao chợ cá làng ngư phủ,\nDắng dỏi cầm ve lầu tịch dương.\nDẽ có Ngu cầm đàn một tiếng,\nDân giàu đủ khắp đòi phương.',
        contentSummary: 'Phút giây thư nhàn ngắm cảnh ngày hè căng tràn nhựa sống và ước nguyện gảy đàn vua Thuấn cho muôn dân khắp mọi miền được ấm no.',
        poeticImages: [
          { image: 'Hòe lục đùn đùn / Thạch lựu phun thức đỏ', meaning: 'Sức sống nội lực của thiên nhiên mùa hè trào dâng mãnh liệt.' },
          { image: 'Dân giàu đủ khắp đòi phương', meaning: 'Câu kết 6 chữ cô đọng lý tưởng nhân nghĩa trọn đời vì dân của Nguyễn Trãi.' },
        ],
        keyWords: [
          { word: 'Đùn đùn, phun, tiễn', nuance: 'Chuỗi động từ mạnh diễn tả sự vận động khỏe khoắn từ bên trong của tạo vật.' },
        ],
        rhetoricalDevices: [
          { device: 'Đảo ngữ & Từ láy tượng thanh', effect: '"Lao xao chợ cá", "Dắng dỏi cầm ve": đưa âm thanh rộn rã của đời sống dân dã vào thơ.' },
        ],
        roleInWork: 'Minh chứng tiêu biểu cho sự Việt hóa thể thơ Đường luật (thất ngôn xen lục ngôn) trong Quốc âm thi tập.',
      },
    ],
    artisticFeatures: {
      prominentCraft: 'Kết hợp vẻ đẹp cổ điển trang nhã của thơ chữ Hán với sức sống dân dã, sáng tạo câu lục ngôn 6 chữ của thơ Nôm Đường luật.',
      language: 'Từ ngữ giàu tính tạo hình, màu sắc tươi tắn (lục, đỏ, hồng, thanh ngọc, thúy hoàn).',
      tone: 'Thư thái, đắm say mà trầm lắng ưu tư vì nước vì dân.',
      structureOrPointOfView: 'Điểm nhìn từ cảnh vật thiên nhiên chuyển hóa tự nhiên sang tâm sự hoài cổ và chí hướng "ưu dân".',
      imageryOrRhetoric: 'Đóa sen trên mặt nước, trâm ngọc – mái tóc biếc, hòe lục – thạch lựu – hồng liên, đàn Ngu cầm.',
      distinctiveDevices: [
        { name: 'Thể thơ Thất ngôn xen Lục ngôn', description: 'Câu 1 và câu 8 chỉ gồm 6 chữ tạo nhịp điệu dứt khoát, nhấn mạnh tư tưởng cốt lõi.' },
        { name: 'Bút pháp Mỹ lệ hóa thiên nhiên', description: 'So sánh thiên nhiên với vẻ đẹp thanh tân của người thiếu nữ và hoa sen.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-ngu-cam',
        detailName: 'Câu kết lục ngôn "Dân giàu đủ khắp đòi phương"',
        excerptOrContext: 'Dẽ có Ngu cầm đàn một tiếng / Dân giàu đủ khắp đòi phương.',
        directMeaning: 'Ước có cây đàn của vua Ngu Thuấn gảy khúc Nam phong để nhân dân bốn phương đều no ấm.',
        symbolicMeaning: 'Đỉnh cao của tư tưởng nhân nghĩa Nguyễn Trãi: cái đích cuối cùng của mọi vẻ đẹp trên đời là hạnh phúc của nhân dân.',
        thematicConnection: 'Kết nối mạch tư tưởng xuyên suốt từ "Bình Ngô đại cáo" ("Việc nhân nghĩa cốt ở yên dân") sang thơ trữ tình.',
      },
    ],
    literaryValues: {
      ideologicalValue: 'Tôn vinh tình yêu thiên nhiên đất nước gắn liền với tấm lòng ưu quốc ái dân cao cả.',
      artisticValue: 'Đặt nền móng vững chắc cho nền thơ cổ điển Việt Nam trên cả hai dòng chữ Hán và chữ Nôm.',
      message: 'Người trí thức chân chính luôn tìm thấy sự thanh cao trong thiên nhiên nhưng không bao giờ quên trách nhiệm với cuộc sống của nhân dân.',
      modernRelevance: 'Bồi đắp tình yêu danh thắng quê hương và lý tưởng sống cống hiến vì cộng đồng.',
    },
    quick60s: {
      author: 'Nguyễn Trãi (Ức Trai)',
      genre: 'Thơ Đường luật chữ Hán & Thơ Nôm thất ngôn xen lục ngôn',
      context: 'Thế kỷ XV, rút từ "Ức Trai thi tập" và "Quốc âm thi tập".',
      theme: 'Vẻ đẹp thiên nhiên đất nước và tấm lòng yêu nước thương dân của Nguyễn Trãi.',
      coreFigureOrCharacter: 'Chủ thể trữ tình Ức Trai.',
      mainIdea: 'Giao cảm tinh tế với thiên nhiên và luôn khắc khoải khát vọng "Dân giàu đủ khắp đòi phương".',
      keyArt: 'Ẩn dụ mỹ lệ (hoa sen, trâm ngọc), động từ mạnh, câu lục ngôn 6 chữ độc đáo.',
      goldenKeywords: ['Dục Thúy sơn', 'Liên hoa phù thủy thượng', 'Hòe lục đùn đùn', 'Lao xao chợ cá', 'Dân giàu đủ khắp đòi phương'],
      takeaway: 'Tâm hồn nghệ sĩ tinh tế hòa làm một với trái tim nhân nghĩa vì dân của Anh hùng dân tộc Nguyễn Trãi.',
    },
  },

  'duoi-bong-hoang-lan': {
    slug: 'duoi-bong-hoang-lan',
    title: 'Dưới bóng hoàng lan',
    authorId: 'thach-lam',
    authorName: 'Thạch Lam',
    grade: 10,
    genre: 'Truyện ngắn',
    textbook: 'Ngữ văn 10 (Kết nối tri thức & Cánh diều – GDPT 2018)',
    year: '1942',
    origin: 'In trong tập truyện ngắn "Sợi tóc" (1942) của Thạch Lam.',
    topic: 'Vẻ đẹp thanh bình của khu vườn quê, tình bà cháu ấm áp và mối tình đầu trong trẻo dưới bóng cây hoàng lan.',
    centralTheme:
      'Ca ngợi vẻ đẹp bình dị, thanh khiết của tình cảm gia đình, quê hương và những rung động đầu đời êm dịu như hương hoa hoàng lan, giúp thanh lọc tâm hồn con người.',
    keywords: ['Thạch Lam', 'Dưới bóng hoàng lan', 'Truyện không cốt truyện', 'Thanh', 'Nga', 'Hương hoàng lan'],
    hookIntro:
      'Bước qua cánh cổng gỗ vào khu vườn rợp bóng cây và ngập tràn hương hoa hoàng lan thoang thoảng, mọi ồn ào bụi bặm ngoài phố thị bỗng dừng lại — một truyện ngắn trong vắt như sương mai của Thạch Lam.',
    coverImage: WORK_IMAGES['duoi-bong-hoang-lan'],
    historicContext: {
      timeframe: 'Đầu thập niên 1940, in trong tập "Sợi tóc" (1942).',
      historicalBackground:
        'Giữa nhịp sống đô thị hóa xô bồ, Thạch Lam hướng ngòi bút về những giá trị truyền thống bền vững của gia đình Việt Nam.',
      personalCircumstance:
        'Kết tinh phong cách "truyện ngắn trữ tình không có cốt truyện" đạt độ chín muồi của Thạch Lam trước khi ông qua đời.',
      impactOnWork:
        'Mỗi trang viết thấm đẫm chất thơ, đánh thức những rung cảm vi tế nhất của giác quan và tâm hồn.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Phần 1: Thanh trở về ngôi nhà của bà và cảm nhận sự bình yên nơi khu vườn quê', content: 'Thanh từ tỉnh trở về, bước qua cổng vườn gặp lại hình ảnh người bà hiền từ và cây hoàng lan cao vút.' },
        { part: 'Phần 2: Cuộc hội ngộ dịu dàng giữa Thanh và Nga dưới bóng cây hoàng lan', content: 'Thanh gặp lại Nga – cô hàng xóm thuở nhỏ nay đã thành thiếu nữ; hai người cùng nhặt hoa hoàng lan và trò chuyện e ấp.' },
        { part: 'Phần 3: Thanh lên đường trở lại tỉnh với dư âm hương hoàng lan trong tâm hồn', content: 'Sáng hôm sau Thanh đi làm lại nhưng trong lòng đã mang theo hương thơm hoàng lan và niềm tin về ngày trở về.' },
      ],
      shortSummary:
        'Thanh là chàng trai mồ côi cha mẹ, lớn lên trong vòng tay yêu thương của bà ngoại. Mỗi lần từ tỉnh trở về ngôi nhà nhỏ có khu vườn rợp bóng cây hoàng lan, Thanh luôn tìm thấy sự bình yên tuyệt đối. Trong lần về thăm này, bên cạnh tình thương ấm áp của bà, Thanh còn rung động trước vẻ đẹp dịu dàng của Nga – cô bạn hàng xóm cùng nhặt hoa hoàng lan dưới gốc cây già.',
      centralConflict: 'Không có xung đột gay gắt; chỉ là sự đối sánh nhẹ nhàng giữa phố thị nắng gắt ồn ào bên ngoài và không gian tĩnh lặng, nhân hậu bên trong khu vườn của bà.',
    },
    mainContentPoints: [
      'Không gian nghệ thuật khu vườn quê và mái nhà cổ: biểu tượng của sự bình yên, che chở tâm hồn.',
      'Hình ảnh người bà tần tảo, hiền từ — cội nguồn của tình mẫu tử, gia đình thiêng liêng.',
      'Tình cảm trong sáng, e ấp giữa Thanh và Nga gắn liền với hương sắc hoa hoàng lan.',
      'Nghệ thuật viết "truyện không có cốt truyện", đi sâu vào dòng cảm giác và tâm trạng nhân vật.',
    ],
    analysisLevels: {
      basic:
        'Truyện kể về chuyến về thăm bà của Thanh và cuộc gặp gỡ đầy kỷ niệm với cô hàng xóm tên Nga dưới bóng cây hoàng lan. Qua đó ca ngợi tình bà cháu sâu nặng và tình yêu đầu đời trong sáng.',
      detailed:
        'Thạch Lam không tạo dựng những biến cố kịch tính mà dẫn người đọc đi vào thế giới nội tâm của Thanh qua các giác quan: tiếng bước chân trên gạch rêu, cái mát rượi của gian nhà cổ, ánh nắng lọt qua kẽ lá và đặc biệt là mùi hương hoàng lan man mác xuyên suốt từ đầu đến cuối tác phẩm.',
      advanced:
        'Trong chương trình GDPT 2018, "Dưới bóng hoàng lan" là văn bản mẫu mực để phân tích điểm nhìn ngôi thứ ba hạn tri (gắn liền với cảm nhận của nhân vật Thanh) và hình tượng nghệ thuật đa nghĩa: cây hoàng lan vừa là chứng nhân thời gian (lớn lên cùng Thanh và Nga), vừa là chất xúc tác kết nối quá khứ với hiện tại, tình thân gia đình với tình yêu đôi lứa.',
    },
    characters: [
      {
        id: 'thanh-char',
        name: 'Thanh',
        role: 'Nhân vật trung tâm (điểm nhìn cảm nhận)',
        appearance: 'Chàng thanh niên trẻ đi làm trên tỉnh, tâm hồn nhạy cảm, hiếu thảo.',
        situation: 'Mồ côi cha mẹ từ nhỏ, có người bà hết mực yêu thương nơi quê nhà.',
        speechAndActions: 'Xúc động khi bước vào cổng vườn, cảm thấy mình như đứa cháu nhỏ được bà che chở, nắm tay Nga dưới bóng hoàng lan.',
        innerPsychology: 'Tinh tế, trọng tình nghĩa, biết nâng niu vẻ đẹp bình dị của quê hương và những rung động đầu đời.',
        symbolicMeaning: 'Đại diện cho tâm hồn con người luôn tìm về điểm tựa tinh thần thanh sạch nơi gia đình, nguồn cội.',
      },
      {
        id: 'nga-va-ba-char',
        name: 'Người Bà & Thiếu nữ Nga',
        role: 'Hai điểm tựa yêu thương của khu vườn',
        appearance: 'Người bà tóc bạc phơ, lưng còng, hiền hậu; Nga trẻ trung, tà áo trắng vương cánh hoa hoàng lan.',
        situation: 'Gắn bó với ngôi nhà và khu vườn hoàng lan.',
        speechAndActions: 'Bà âu yếm giục cháu rửa mặt, sửa chiếu màn; Nga e ấp nhặt hoa, cài hoa hoàng lan lên mái tóc.',
        innerPsychology: 'Dịu dàng, đằm thắm, giàu đức hy sinh và tình thương yêu.',
        symbolicMeaning: 'Hiện thân của vẻ đẹp truyền thống, sự bình yên và hạnh phúc thuần khiết.',
      },
    ],
    artisticFeatures: {
      prominentCraft: 'Cốt truyện tâm lý giản tối đa sự kiện, tập trung khắc họa cảm giác tinh vi và chất thơ của đời sống thường nhật.',
      language: 'Trong sáng, nhẹ nhàng, giàu nhạc điệu và hương sắc.',
      tone: 'Êm dịu, ấm áp, man mác chất thơ.',
      structureOrPointOfView: 'Ngôi kể thứ ba với điểm nhìn bên trong gắn chặt với tâm thức nhân vật Thanh.',
      imageryOrRhetoric: 'Bóng cây hoàng lan, con mèo già trên bậc cửa, nắng xuyên qua lá, hương hoa hoàng lan.',
      distinctiveDevices: [
        { name: 'Biểu tượng đồng hành (Cây hoàng lan)', description: 'Xuất hiện ở nhan đề và mọi khoảnh khắc giao cảm giữa các nhân vật.' },
        { name: 'Bút pháp miêu tả cảm giác tinh tế', description: 'Đánh thức thị giác, thính giác, xúc giác và khứu giác của người đọc.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-huong-hoang-lan',
        detailName: 'Mùi hương hoa hoàng lan thoang thoảng trong gió và trên mái tóc Nga',
        excerptOrContext: 'Mùi hương thơm thoang thoảng đưa vào. Thanh nhắm mắt ngửi hương thơm và nhớ đến cái cây ấy chàng thường hay chơi dưới gốc nhặt hoa...',
        directMeaning: 'Mùi hương thanh khiết của loài hoa quen thuộc trong vườn bà.',
        symbolicMeaning: 'Biểu tượng của ký ức tuổi thơ, tình bà cháu ấm áp và tình yêu đầu đời trong sáng không bao giờ phai nhạt.',
        thematicConnection: 'Sợi dây vô hình nối kết con người với vẻ đẹp vĩnh cửu của quê hương.',
      },
    ],
    literaryValues: {
      humanitarianValue: 'Làm cho tâm hồn người đọc trở nên trong sạch, phong phú và biết trân trọng những điều bình dị quanh mình.',
      artisticValue: 'Đỉnh cao của thể loại truyện ngắn trữ tình hiện đại Việt Nam.',
      message: 'Gia đình, quê hương và những tình cảm chân thành chính là bóng mát bình yên nhất che chở con người trước mọi giông bão cuộc đời.',
      modernRelevance: 'Liều thuốc chữa lành tâm hồn cho con người hiện đại giữa nhịp sống hối hả.',
    },
    quick60s: {
      author: 'Thạch Lam',
      genre: 'Truyện ngắn trữ tình',
      context: 'In trong tập "Sợi tóc" (1942).',
      theme: 'Tình bà cháu ấm áp và tình yêu đầu đời trong sáng dưới bóng cây hoàng lan.',
      coreFigureOrCharacter: 'Thanh, người bà và cô hàng xóm Nga.',
      mainIdea: 'Ca ngợi vẻ đẹp bình yên của mái ấm gia đình và những rung động tâm hồn thanh khiết.',
      keyArt: 'Truyện không có cốt truyện kịch tính, điểm nhìn tâm lý tinh tế, giàu chất thơ.',
      goldenKeywords: ['Khu vườn quê', 'Người bà lưng còng', 'Hương hoàng lan', 'Thanh và Nga', 'Thanh lọc tâm hồn'],
      takeaway: 'Một bài thơ bằng văn xuôi về tình thân và mối tình đầu dưới bóng hoàng lan.',
    },
  },

  'nguoi-cam-quyen-khoi-phuc-uy-quyen': {
    slug: 'nguoi-cam-quyen-khoi-phuc-uy-quyen',
    title: 'Người cầm quyền khôi phục uy quyền (Trích Những người khốn khổ)',
    authorId: 'victor-hugo',
    authorName: 'Victor Hugo',
    grade: 10,
    genre: 'Truyện ngắn',
    textbook: 'Ngữ văn 10 (Kết nối tri thức với cuộc sống – GDPT 2018)',
    year: '1862',
    origin: 'Trích Phần thứ nhất (Fantine), Quyển tám, Chương IV trong tiểu thuyết "Những người khốn khổ" (Les Misérables).',
    topic: 'Sự đối lập giữa lòng nhân ái cao cả của Giăng Van-giăng và sự tàn nhẫn lạnh lùng của thanh tra Gia-ve trước cái chết của Phăng-tin.',
    centralTheme:
      'Khẳng định sức mạnh tối thượng của tình yêu thương và lương tri nhân phẩm: ngay cả khi bị tước đoạt quyền lực xã hội và bị còng tay, con người nhân ái (Giăng Van-giăng) vẫn mang uy quyền đạo đức làm khiếp sợ bạo quyền (Gia-ve).',
    keywords: ['Victor Hugo', 'Những người khốn khổ', 'Giăng Van-giăng', 'Phăng-tin', 'Gia-ve', 'Bút pháp tương phản'],
    hookIntro:
      'Bên giường bệnh của người mẹ khốn khổ Phăng-tin vừa trút hơi thở cuối cùng, người tù khổ sai Giăng Van-giăng bẻ gãy chiếc giường sắt chỉ bằng một cái nhìn đanh thép khiến thanh tra Gia-ve phải run sợ — chương văn kịch tính và nhân đạo bậc nhất văn học thế giới.',
    coverImage: WORK_IMAGES['nguoi-cam-quyen-khoi-phuc-uy-quyen'],
    historicContext: {
      timeframe: 'Xuất bản năm 1862 tại Pháp (thời kỳ Chủ nghĩa Lãng mạn thế kỷ XIX).',
      historicalBackground:
        'Xã hội Pháp nửa đầu thế kỷ XIX đầy rẫy bất công, nơi luật pháp hà khắc chà đạp lên những người nghèo khổ và phụ nữ sa cơ.',
      personalCircumstance:
        'Victor Hugo viết tác phẩm trong thời gian sống lưu vong để lên tiếng bảo vệ những người cùng khổ.',
      impactOnWork:
        'Tạo nên bút pháp tương phản lãng mạn hùng vĩ giữa Ánh sáng của tình thương và Bóng tối của cường quyền.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Phần 1: Gia-ve lộ mặt thật bắt giữ Giăng Van-giăng và cái chết bi thương của Phăng-tin', content: 'Thị trưởng Ma-đơ-len lộ thân phận tù khổ sai Giăng Van-giăng; Gia-ve tàn nhẫn quát tháo khiến Phăng-tin kinh hoàng tắt thở khi chưa kịp gặp con gái Cô-dét.' },
        { part: 'Phần 2: Giăng Van-giăng vùng dậy khôi phục uy quyền đạo đức và lời thì thầm với Phăng-tin', content: 'Giăng Van-giăng giật phăng thanh giường sắt khiến Gia-ve lùi bước, rồi quỳ xuống thì thầm lời hứa bảo vệ Cô-dét làm gương mặt Phăng-tin bừng sáng nụ cười.' },
      ],
      shortSummary:
        'Khi ông thị trưởng Ma-đơ-len tự thú mình chính là người tù khổ sai Giăng Van-giăng để cứu một người vô tội, thanh tra Gia-ve lập tức ập vào bệnh xá bắt ông. Trước sự hung bạo và lời tiết lộ phũ phàng của Gia-ve, người mẹ đáng thương Phăng-tin uất ức ngã xuống chết. Đau đớn và phẫn nộ, Giăng Van-giăng bẻ gãy thanh giường sắt buộc Gia-ve phải lùi lại, để ông kịp thì thầm lời hứa chăm sóc bé Cô-dét với linh hồn Phăng-tin.',
      centralConflict: 'Xung đột quyết liệt giữa Luật pháp vô cảm, giáo điều (Gia-ve) và Tình thương nhân đạo tối cao (Giăng Van-giăng).',
    },
    mainContentPoints: [
      'Nghệ thuật tương phản lãng mạn: Gia-ve như một con thú dữ cuồng tín >< Giăng Van-giăng điềm tĩnh, thánh thiện.',
      'Bi kịch của Phăng-tin và lời kết tội đanh thép của Giăng Van-giăng: "Chính ông đã giết chết người đàn bà này rồi đấy!".',
      'Sự đảo chiều của khái niệm "Người cầm quyền": từ quyền lực cảnh sát của Gia-ve sang uy quyền tinh thần tuyệt đối của Giăng Van-giăng.',
      'Chi tiết nụ cười kỳ diệu trên gương mặt người chết của Phăng-tin — ánh sáng thiên đường của tình mẫu tử và lòng nhân ái.',
    ],
    analysisLevels: {
      basic:
        'Đoạn trích kể lại cảnh thanh tra Gia-ve bắt giữ Giăng Van-giăng ngay bên giường bệnh của Phăng-tin khiến chị kinh hãi qua đời. Dù bị bắt, Giăng Van-giăng vẫn thể hiện lòng nhân từ cao cả khi hứa bảo vệ con gái của Phăng-tin.',
      detailed:
        'Nhan đề "Người cầm quyền khôi phục uy quyền" mang tính đa nghĩa sâu sắc: ở tầng bề mặt, đó là Gia-ve lấy lại quyền lực nhà nước trước người tù khổ sai; nhưng ở tầng bản chất, chính Giăng Van-giăng khi cầm thanh sắt giường bệnh bảo vệ phẩm giá người đã khuất mới thực sự là người khôi phục uy quyền tối thượng của Lương tri.',
      advanced:
        'Trong chương trình Ngữ văn 10 mới, đoạn trích là mẫu mực về ngôi kể thứ ba toàn tri của tiểu thuyết cổ điển phương Tây: người kể chuyện không chỉ quan sát hành động mà còn trực tiếp bình luận triết học ("Lòng thương người là một thứ uy quyền..."), nâng câu chuyện lên tầm khái quát nhân loại.',
    },
    characters: [
      {
        id: 'jean-valjean-char',
        name: 'Giăng Van-giăng (Ông Thị trưởng Ma-đơ-len)',
        role: 'Nhân vật chính diện – Hiện thân của Lòng Nhân ái',
        appearance: 'Điềm tĩnh, giọng nói dịu dàng, ánh mắt tràn đầy nỗi đau thương nhưng khi nổi giận lại có uy lực phi thường.',
        situation: 'Từ bỏ địa vị thị trưởng để nhận lại thân phận tù khổ sai, đồng thời lo lắng cho số phận của mẹ con Phăng-tin.',
        speechAndActions: 'Nhẫn nhịn cầu xin Gia-ve 3 ngày đi đón Cô-dét; giật gãy thanh giường sắt buộc Gia-ve đứng yên; thì thầm lời hứa thiêng liêng vào tai Phăng-tin.',
        innerPsychology: 'Vị tha, quên mình vì người khốn khổ, đặt đạo lý tình thương lên trên sự an nguy của bản thân.',
        symbolicMeaning: 'Biểu tượng bất tử của Chủ nghĩa Nhân đạo và sức mạnh cảm hóa của lương tâm.',
      },
      {
        id: 'javert-char',
        name: 'Thanh tra Gia-ve (Javert)',
        role: 'Nhân vật đối lập – Hiện thân của Bạo quyền vô cảm',
        appearance: 'Bộ mặt gớm ghiếc, cặp mắt nhìn như cái móc sắt, tiếng cười ghê rợn phô hàm răng như thú dữ.',
        situation: 'Đến bắt Giăng Van-giăng ngay trong phòng bệnh của Phăng-tin.',
        speechAndActions: 'Quát tháo thô bạo, túm cổ áo Giăng Van-giăng, đập chân, lạnh lùng dập tắt hy vọng cuối cùng của Phăng-tin; nhưng lại run sợ trước thanh sắt của Giăng Van-giăng.',
        innerPsychology: 'Cuồng tín luật pháp, tàn nhẫn, hoàn toàn trống rỗng tình thương con người.',
        symbolicMeaning: 'Biểu tượng cho cỗ máy cai trị lạnh lùng, phi nhân tính của xã hội tư sản.',
      },
    ],
    artisticFeatures: {
      prominentCraft: 'Thủ pháp tương phản – đối lập lãng mạn triệt để kết hợp với người kể chuyện ngôi thứ ba toàn tri giàu suy tư triết học.',
      language: 'Giàu kịch tính, giàu hình ảnh so sánh phóng đại và bình luận trữ tình ngoại đề.',
      tone: 'Bi thương, phẫn nộ chuyển sang trang nghiêm, thánh thiện.',
      structureOrPointOfView: 'Ngôi kể thứ ba toàn tri, dịch chuyển linh hoạt giữa điểm nhìn của các nhân vật và lời bình của tác giả.',
      imageryOrRhetoric: 'Cặp mắt như móc sắt của Gia-ve, thanh giường sắt gãy đôi, nụ cười rạng rỡ trên gương mặt tái nhợt của Phăng-tin.',
      distinctiveDevices: [
        { name: 'Thủ pháp Tương phản Lãng mạn', description: 'Đối lập Thiện – Ác, Ánh sáng – Bóng tối, Dịu dàng – Hung bạo trong cùng một khung cảnh.' },
        { name: 'Trữ tình ngoại đề của người kể chuyện', description: 'Tác giả trực tiếp đối thoại với độc giả về huyền nhiệm của cái chết và tình thương.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-loi-thi-tham',
        detailName: 'Chi tiết "Lời thì thầm của Giăng Van-giăng và nụ cười trên môi Phăng-tin đã khuất"',
        excerptOrContext: 'Giăng Van-giăng ghé sát tai Phăng-tin đang nằm bất động, nói thì thầm điều gì đó... Bỗng trên khuôn mặt tái nhợt của người chết hiện lên một nụ cười không sao tả xiết.',
        directMeaning: 'Lời hứa của Giăng Van-giăng sẽ tìm và nuôi dạy bé Cô-dét nên người.',
        symbolicMeaning: 'Phép màu của tình thương vượt qua ranh giới sự sống và cái chết, cứu rỗi linh hồn người mẹ khốn khổ.',
        thematicConnection: 'Đỉnh cao tư tưởng nhân đạo của toàn bộ bộ tiểu thuyết "Những người khốn khổ".',
      },
    ],
    literaryValues: {
      humanitarianValue: 'Khẳng định tình yêu thương con người là giá trị tối thượng có sức mạnh chiến thắng mọi cường quyền và cái chết.',
      artisticValue: 'Chương văn kinh điển của Chủ nghĩa Lãng mạn thế giới thế kỷ XIX.',
      message: 'Quyền lực đích thực không nằm ở xiềng xích bạo lực mà nằm ở lòng nhân ái và sự hy sinh vì tha nhân.',
      modernRelevance: 'Thức tỉnh lòng trắc ẩn và thái độ nhân văn trong ứng xử giữa con người với con người.',
    },
    quick60s: {
      author: 'Victor Hugo (Pháp)',
      genre: 'Tiểu thuyết lãng mạn (Trích đoạn)',
      context: 'Xuất bản năm 1862, trích từ kiệt tác "Những người khốn khổ".',
      theme: 'Cuộc đối đầu giữa Giăng Van-giăng và Gia-ve bên giường bệnh của Phăng-tin.',
      coreFigureOrCharacter: 'Giăng Van-giăng, Phăng-tin và thanh tra Gia-ve.',
      mainIdea: 'Tôn vinh uy quyền đạo đức và sức mạnh cứu rỗi của lòng yêu thương con người.',
      keyArt: 'Bút pháp tương phản lãng mạn, người kể chuyện toàn tri, chi tiết biểu tượng đắt giá.',
      goldenKeywords: ['Giăng Van-giăng', 'Phăng-tin', 'Gia-ve', 'Thanh giường sắt', 'Nụ cười trên mặt người chết'],
      takeaway: 'Trên đời này chỉ có một uy quyền cao cả nhất: đó là tình yêu thương con người.',
    },
  },

  /* ======================================================================== */
  /* CHƯƠNG TRÌNH GDPT 2018 MỚI – KHỐI LỚP 11 (BỔ SUNG TOÀN DIỆN)             */
  /* ======================================================================== */

  'loi-tieng-dan-bau': {
    slug: 'loi-tieng-dan-bau',
    title: 'Lời tiễn dặn (Trích Tiễn dặn người yêu – Xống chụ xôn xao)',
    authorId: 'dan-gian-viet-thai',
    authorName: 'Tác giả Dân gian Việt – Thái',
    grade: 11,
    genre: 'Thơ',
    textbook: 'Ngữ văn 11 (Kết nối tri thức & Chân trời sáng tạo – GDPT 2018)',
    year: 'Truyền khẩu lâu đời',
    origin: 'Trích từ truyện thơ dân gian dân tộc Thái "Tiễn dặn người yêu" (Xống chụ xôn xao – gồm 1846 câu thơ).',
    topic: 'Tình yêu chung thủy, sắt son vượt qua mọi rào cản hôn nhân ép duyên và cả cái chết của đôi trai gái người Thái.',
    centralTheme:
      'Khắc họa nỗi đau chia lìa xé lòng và lời thề nguyền thủy chung bất diệt của chàng trai dành cho cô gái trên đường tiễn đưa về nhà chồng, khẳng định khát vọng tự do yêu đương mãnh liệt.',
    keywords: ['Tiễn dặn người yêu', 'Xống chụ xôn xao', 'Truyện thơ dân tộc Thái', 'Vừa đi vừa ngoảnh lại', 'Chết thành cái nắp trầu', 'Lấy nhau khi góa bụa về già'],
    hookIntro:
      'Trên con đường rừng tiễn người yêu về nhà chồng theo tục ép duyên, từng bước chân ngoảnh lại làm rừng ớt rụng lá, rừng cà rụng hoa, và vang lên lời thề nguyền vượt qua cả cái chết — kiệt tác truyện thơ dân gian đẹp nhất vùng Tây Bắc.',
    coverImage: WORK_IMAGES['loi-tieng-dan-bau'],
    historicContext: {
      timeframe: 'Ra đời trong xã hội cổ truyền của đồng bào dân tộc Thái vùng Tây Bắc.',
      historicalBackground:
        'Chế độ hôn nhân买卖 (ép duyên vì của cải, môn đăng hộ đối) chia cắt biết bao đôi lứa yêu nhau tha thiết.',
      personalCircumstance:
        'Được đồng bào Thái hát truyền miệng qua nhiều thế hệ, trở thành cuốn sách gối đầu giường của thanh niên Tây Bắc.',
      impactOnWork:
        'Kết hợp hoàn hảo yếu tố tự sự (cốt truyện tiễn đưa) và yếu tố trữ tình (lời dặn dò đẫm nước mắt).',
    },
    structureAndSummary: {
      layout: [
        { part: 'Đoạn 1: Tâm trạng đau đớn của cô gái và sự ân cần tiễn đưa của chàng trai trên đường về nhà chồng', content: 'Cô gái vừa đi vừa ngoảnh lại, vừa đi vừa ngoặt trông; chàng trai âu yếm dặn dò và xin bồng đứa con thơ cho đỡ nhớ.' },
        { part: 'Đoạn 2: Cử chỉ chăm sóc của chàng trai khi cô gái bị nhà chồng đánh đập và lời thề thủy chung đến chết', content: 'Chàng trai chải tóc, lấy thuốc cho người yêu và thề nguyền "Chết ba năm hình còn treo đó", "Không lấy được nhau thời trẻ ta sẽ lấy nhau khi góa bụa về già".' },
      ],
      shortSummary:
        'Đôi trai gái người Thái yêu nhau tha thiết nhưng cha mẹ cô gái chê chàng nghèo, ép gả nàng cho nhà giàu trong lúc chàng đi xa. Khi chàng trở về thì đúng lúc nàng bị đưa về nhà chồng. Chàng trai đi theo tiễn người yêu, dặn dò từng lời đằm thắm, chăm sóc khi nàng bị nhà chồng hành hạ và thề nguyện dù đến già hay sang thế giới bên kia vẫn quyết đoàn tụ.',
      emotionalArc: 'Đau đớn, bịn rịn lúc chia ly -> Xót thương, che chở -> Mãnh liệt, sắt son trong lời thề nguyền bất tử.',
    },
    mainContentPoints: [
      'Nỗi đau chia biệt qua bước chân dùng dằng của cô gái: "Vừa đi vừa ngoảnh lại / Chân bước xa lòng càng đau càng nhớ".',
      'Tấm lòng bao dung, ân cần của chàng trai: đón nhận cả đứa con của nàng và chăm sóc nàng khi bị nhà chồng đánh đập.',
      'Lời thề nguyền thủy chung vượt thời gian ("mùa hạ – mùa đông", "thời trẻ – về già") và vượt cả cái chết.',
      'Ngôn ngữ giàu hình ảnh so sánh, ẩn dụ lấy từ thiên nhiên núi rừng Tây Bắc (lá ớt, lá cà, cây củi, chim tăng ló, hoa lau).',
    ],
    analysisLevels: {
      basic:
        'Đoạn trích ghi lại cảnh chàng trai tiễn người yêu về nhà chồng và chăm sóc cô khi cô bị nhà chồng đánh đập. Qua đó ca ngợi tình yêu thủy chung, tha thiết và lên án tục ép duyên cổ hủ.',
      detailed:
        'Nghệ thuật miêu tả tâm lý trong "Lời tiễn dặn" vô cùng tinh tế: thiên nhiên núi rừng (rừng ớt, rừng cà, rừng lá ngón) đều nhuốm màu tâm trạng của cô gái. Chàng trai hiện lên với vẻ đẹp nhân hậu phi thường: không hề oán trách mà chỉ một lòng xót thương, nâng niu từng sợi tóc rối và giọt nước mắt của người mình yêu.',
      advanced:
        'Trong chương trình GDPT 2018 (Bài Truyện thơ dân gian và truyện thơ Nôm), "Lời tiễn dặn" là đỉnh cao của sự giao thoa giữa tự sự và trữ tình. Hệ thống điệp cấu trúc trùng điệp ("Không lấy được nhau... ta sẽ lấy nhau...", "Chết thành...") tạo nên nhịp điệu lời thề vừa trang nghiêm như nghi lễ, vừa nồng nàn bất khuất của khát vọng tự do cá nhân.',
    },
    poetryAnalysis: [
      {
        id: 'ltd-1',
        stanzaNumber: 1,
        title: 'Đoạn 1: Bước chân ngoảnh lại trên đường tiễn đưa',
        excerpt:
          'Tiễn đưa em, thôi anh quay lại,\nEm chịu khó đi về nhà chồng.\nChắn đường anh chặt cây làm dấu,\nRừng ớt tối ngồi chờ,\nTới rừng cà ngồi đợi,\nTới rừng lá ngón ngóng trông!',
        contentSummary: 'Sự lưu luyến đứt ruột của đôi lứa trên con đường rừng từ bản mẹ sang nhà chồng.',
        poeticImages: [
          { image: 'Rừng ớt, rừng cà, rừng lá ngón', meaning: 'Những loài cây mang vị cay, vị đắng và độc tố chết người — ẩn dụ cho nỗi cay đắng, tuyệt vọng của cuộc hôn nhân cưỡng ép.' },
        ],
        keyWords: [
          { word: 'Ngoảnh lại, ngoặt trông', nuance: 'Thể xác buộc phải bước đi theo lễ giáo nhưng linh hồn và trái tim vẫn ngoái về phía người yêu.' },
        ],
        rhetoricalDevices: [
          { device: 'Điệp từ & Liệt kê tăng tiến', effect: 'Diễn tả hành trình tiễn đưa kéo dài bất tận theo từng bước chân đau đớn.' },
        ],
        roleInWork: 'Khắc họa bi kịch chia lìa của đôi lứa dưới ách hôn nhân ép duyên.',
      },
      {
        id: 'ltd-2',
        stanzaNumber: 2,
        title: 'Đoạn 2: Lời thề nguyền vượt thời gian và cái chết',
        excerpt:
          'Không lấy được nhau mùa hạ, ta sẽ lấy nhau mùa đông,\nKhông lấy được nhau thời trẻ, ta sẽ lấy nhau khi góa bụa về già...\nChết cùng chết một chiếu,\nChôn cùng chôn một quan tài,\nĐôi ta yêu nhau, tình Lú – Ủa mặn nồng,\nLời đã trao thương không lạc mất!',
        contentSummary: 'Khẳng định ý chí đoàn tụ bất diệt bất chấp thời gian tuổi tác và cái chết.',
        poeticImages: [
          { image: 'Lấy nhau khi góa bụa về già', meaning: 'Vẻ đẹp nhân văn mộc mạc mà kiên định: tình yêu không phai tàn theo nhan sắc hay tuổi trẻ.' },
        ],
        keyWords: [
          { word: 'Lời đã trao thương không lạc mất', nuance: 'Sự bất tử của lời thề nguyền tình yêu chân chính.' },
        ],
        rhetoricalDevices: [
          { device: 'Điệp cấu trúc tương phản (Không lấy được... ta sẽ lấy...)', effect: 'Biến nghịch cảnh thành động lực khẳng định tình yêu vĩnh cửu.' },
        ],
        roleInWork: 'Đẩy cảm hứng nhân đạo và khát vọng tự do yêu đương lên đỉnh điểm.',
      },
    ],
    artisticFeatures: {
      prominentCraft: 'Kết hợp hài hòa giữa cốt truyện tự sự và giọng điệu trữ tình tha thiết; sử dụng dày đặc hình ảnh tỉ hứng, so sánh mang đậm bản sắc văn hóa dân tộc Thái.',
      language: 'Mộc mạc, giàu nhạc điệu, giàu hình ảnh thiên nhiên miền núi (hoa lau, chim tăng ló, sông Đà, củi rừng).',
      tone: 'Thiết tha, xót xa nhưng tràn đầy niềm tin mãnh liệt.',
      structureOrPointOfView: 'Điểm nhìn trao qua lời độc thoại và đối thoại trực tiếp của chàng trai với cô gái.',
      imageryOrRhetoric: 'Rừng ớt – rừng cà – rừng lá ngón, đầu bạc răng long, tình Lú – Ủa.',
      distinctiveDevices: [
        { name: 'Thủ pháp Điệp liên hoàn & Tỉ hứng dân gian', description: 'Lấy cảnh vật núi rừng để nói tình người sắt son.' },
        { name: 'Xây dựng tâm lý qua hành động', description: 'Bước chân dùng dằng của cô gái và cử chỉ chải tóc của chàng trai.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-chai-toc',
        detailName: 'Hành động chàng trai vực người yêu dậy, phủi áo và chải mái tóc rối ở nhà chồng',
        excerptOrContext: 'Dậy đi em, dậy đi em ơi! Dậy giũ áo kẻo bọ, dậy phủi áo kẻo lấm! Đầu em bù anh chải cho, tóc em rối đưa anh búi hộ!',
        directMeaning: 'Sự chăm sóc tận tình của chàng trai khi cô gái bị nhà chồng đánh đập tàn nhẫn.',
        symbolicMeaning: 'Tình yêu chân chính nâng đỡ phẩm giá và xoa dịu mọi thương tích của người phụ nữ.',
        thematicConnection: 'Làm sáng bừng giá trị nhân đạo sâu sắc của truyện thơ dân tộc Thái.',
      },
    ],
    literaryValues: {
      humanitarianValue: 'Tố cáo hủ tục hôn nhân ép duyên và ca ngợi vẻ đẹp thủy chung, vị tha của tình yêu đôi lứa.',
      artisticValue: 'Đỉnh cao rực rỡ nhất của thể loại truyện thơ các dân tộc thiểu số Việt Nam.',
      message: 'Tình yêu chân thành và khát vọng hạnh phúc tự do luôn có sức mạnh chiến thắng mọi xiềng xích hủ tục.',
      modernRelevance: 'Góp phần tôn vinh sự đa dạng văn hóa của cộng đồng 54 dân tộc Việt Nam.',
    },
    quick60s: {
      author: 'Dân gian dân tộc Thái',
      genre: 'Truyện thơ dân gian',
      context: 'Lưu truyền ở vùng Tây Bắc, trích từ "Tiễn dặn người yêu" (Xống chụ xôn xao).',
      theme: 'Nỗi đau chia ly và lời thề thủy chung của đôi trai gái người Thái.',
      coreFigureOrCharacter: 'Chàng trai và cô gái trên đường về nhà chồng.',
      mainIdea: 'Ca ngợi tình yêu sắt son vượt qua thời gian, lễ giáo và cái chết.',
      keyArt: 'Kết hợp tự sự – trữ tình, điệp cấu trúc, hình ảnh tỉ hứng núi rừng.',
      goldenKeywords: ['Xống chụ xôn xao', 'Vừa đi vừa ngoảnh lại', 'Rừng ớt rừng cà', 'Chải tóc búi hộ', 'Lấy nhau khi góa bụa về già'],
      takeaway: 'Khúc ca tình yêu bất tử của núi rừng Tây Bắc.',
    },
  },

  'van-te-nghia-si-can-giuoc': {
    slug: 'van-te-nghia-si-can-giuoc',
    title: 'Văn tế nghĩa sĩ Cần Giuộc',
    authorId: 'nguyen-dinh-chieu',
    authorName: 'Nguyễn Đình Chiểu',
    grade: 11,
    genre: 'Văn chính luận',
    textbook: 'Ngữ văn 11 (Kết nối tri thức, Chân trời sáng tạo, Cánh diều – GDPT 2018)',
    year: '1861',
    origin: 'Viết theo yêu cầu của Tuần phủ Gia Định Đỗ Quang để tế các nghĩa sĩ nông dân hy sinh trong trận tập kích đồn Pháp tại Cần Giuộc đêm 16/12/1861.',
    topic: 'Bức tượng đài bi tráng, bất tử về người nông dân nghĩa sĩ Nam Bộ tự nguyện đứng lên đánh Pháp cứu nước.',
    centralTheme:
      'Khóc thương và ngợi ca vẻ đẹp bình dị mà anh hùng của những người nông dân áo vải lần đầu cầm vũ khí thô sơ xả thân vì nghĩa lớn, mở ra hình tượng trung tâm mới cho văn học yêu nước Việt Nam.',
    keywords: ['Nguyễn Đình Chiểu', 'Văn tế nghĩa sĩ Cần Giuộc', 'Nông dân áo vải', 'Cui cút làm ăn', 'Manh quần tấm áo', 'Sống đánh giặc thác cũng đánh giặc'],
    hookIntro:
      'Từ những người dân ấp dân lân suốt đời chỉ biết "cui cút làm ăn", khi Tổ quốc lâm nguy họ đã bừng dậy với manh áo vải, ngọn tầm vông, đạp rào lướt tới coi giặc cũng như không — khúc ca bi tráng bậc nhất lịch sử văn học chống ngoại xâm.',
    coverImage: WORK_IMAGES['van-te-nghia-si-can-giuoc'],
    historicContext: {
      timeframe: 'Cuối năm 1861, sau khi thực dân Pháp tấn công Gia Định và đánh chiếm các tỉnh Nam Kỳ.',
      historicalBackground:
        'Đêm 16/12/1861 (rằm tháng Mười một năm Tân Dậu), những người nông dân nghĩa sĩ Cần Giuộc đã dũng cảm tấn công đồn giặc Pháp, tiêu diệt tên quan hai và nhiều lính Pháp nhưng khoảng 20 nghĩa sĩ đã anh dũng hy sinh.',
      personalCircumstance:
        'Nguyễn Đình Chiểu đang dạy học và bốc thuốc gần đó, xúc động sâu sắc trước sự hy sinh của nghĩa quân nên đã viết bài văn tế này.',
      impactOnWork:
        'Được vua Tự Đức ra lệnh truyền đọc khắp cả nước; lần đầu tiên người nông dân trở thành nhân vật anh hùng trung tâm của văn học viết.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Phần 1: Lung khởi (Câu 1 – 2)', content: 'Tiếng súng giặc nổ vang làm chấn động đất trời và triết lý sống đục – thác trong của người nghĩa sĩ.' },
        { part: 'Phần 2: Thích thực (Câu 3 – 15)', content: 'Tái hiện nguồn gốc nông dân lam lũ, sự chuyển biến lòng yêu nước tự giác và trận công đồn Cần Giuộc hào hùng.' },
        { part: 'Phần 3: Ai vãn (Câu 16 – 25)', content: 'Tiếng khóc thương đau đớn của tác giả, gia đình (mẹ già, vợ yếu) và non sông trước sự hy sinh của nghĩa sĩ.' },
        { part: 'Phần 4: Kết (Câu 26 – 30)', content: 'Khẳng định sự bất tử của linh hồn nghĩa sĩ và ý chí tiếp tục chiến đấu trả thù nhà đền nợ nước.' },
      ],
      shortSummary:
        'Mở đầu bằng tiếng than "Hỡi ôi! Súng giặc đất rền; lòng dân trời tỏ", bài văn tế khắc họa chân thực hình ảnh những người nông dân Cần Giuộc vốn chỉ quen việc cày cuốc, nhưng trước họa mất nước đã tự nguyện đầu quân. Chỉ với manh áo vải, ngọn tầm vông, rơm con cúi, họ đã làm nên trận đánh oanh liệt rồi ngã xuống trong niềm tiếc thương vô hạn của nhân dân và lịch sử.',
      centralConflict: 'Cuộc đối đầu bất cân xứng về vũ khí nhưng vượt trội về chính nghĩa giữa người nông dân yêu nước và giặc Pháp xâm lược.',
    },
    mainContentPoints: [
      'Nguồn gốc xuất thân bình dị: "cui cút làm ăn; toan lo nghèo khó", chưa từng biết đến cung ngựa chiến trường.',
      'Lòng yêu nước mộc mạc mà quyết liệt: ghét thói mọi như nhà nông ghét cỏ, tự nguyện "mến nghĩa làm quân chiêu mộ".',
      'Vẻ đẹp hào hùng trong trận công đồn: vũ khí thô sơ (tầm vông, dao phay, rơm con cúi) đối chọi tàu sắt, tàu đồng, đạn nhỏ, đạn to.',
      'Tiếng khóc bi tráng mang tầm vóc thời đại: đau thương nhưng không bi lụy ("Sống đánh giặc, thác cũng đánh giặc").',
    ],
    analysisLevels: {
      basic:
        'Bài văn tế ca ngợi tinh thần dũng cảm, yêu nước của những người nông dân Cần Giuộc đã hy sinh trong trận đánh đồn Pháp năm 1861, đồng thời bày tỏ niềm tiếc thương sâu sắc của nhân dân đối với họ.',
      detailed:
        'Cái mới vĩ đại của Nguyễn Đình Chiểu là không lý tưởng hóa người anh hùng theo khuôn mẫu hiệp khách phong kiến mà giữ nguyên chất nông dân Nam Bộ của họ: từ lời ăn tiếng nói ("bữa thấy bòng bong che trắng lốp, muốn tới ăn gan") đến trang bị ("ngoài cật có một manh áo vải") và động tác chiến đấu ("đạp rào lướt tới", "đâm ngang, chém ngược").',
      advanced:
        'Như Thủ tướng Phạm Văn Đồng từng nhận định trong "Nguyễn Đình Chiểu, ngôi sao sáng trong văn nghệ của dân tộc": "Văn tế nghĩa sĩ Cần Giuộc" mang âm hưởng của "Bình Ngô đại cáo", dựng lên bức tượng đài nghệ thuật đầu tiên về người nông dân nghĩa sĩ trong lịch sử văn học dân tộc bằng thể văn biền ngẫu kết hợp ngôn ngữ dân dã Nam Bộ.',
    },
    characters: [
      {
        id: 'nghia-si-can-giuoc-char',
        name: 'Hình tượng Người Nông dân Nghĩa sĩ Cần Giuộc',
        role: 'Nhân vật tập thể anh hùng trung tâm',
        appearance: 'Ngoài cật có một manh áo vải, tay cầm ngọn tầm vông, lưỡi dao phay, đầu đội nón gõ.',
        situation: 'Vốn là dân ấp dân lân nghèo khổ, khi Pháp xâm lược Gia Định đã tự nguyện đứng lên đánh giặc.',
        speechAndActions: 'Chẳng đợi ai đòi ai bắt; đạp rào lướt tới, xô cửa xông vào, đâm ngang chém ngược làm ma rợn khiếp.',
        innerPsychology: 'Giàu lòng tự trọng dân tộc, trọng nghĩa khinh sinh, thà chết vinh còn hơn sống nhục.',
        symbolicMeaning: 'Tượng đài bất tử cho sức mạnh yêu nước quật khởi của nhân dân lao động Việt Nam.',
      },
    ],
    artisticFeatures: {
      prominentCraft: 'Thể văn tế cổ điển (biền ngẫu, đối xứng) được thổi luồng sinh khí mới bằng ngôn ngữ khẩu ngữ Nam Bộ góc cạnh, sống động.',
      language: 'Kết hợp từ Hán Việt trang trọng với phương ngữ Nam Bộ thuần chất (cui cút, bòng bong, xom rầm, đâm ngang chém ngược).',
      tone: 'Bi tráng, thống thiết, vừa nghẹn ngào nước mắt vừa rực lửa căm thù và tự hào.',
      structureOrPointOfView: 'Bố cục 4 phần chuẩn mực của thể loại văn tế (Lung khởi – Thích thực – Ai vãn – Kết).',
      imageryOrRhetoric: 'Mười năm công vỡ ruộng, mùi tinh chiên vấy vá, ngọn tầm vông – rơm con cúi, mẹ già ngồi khóc trẻ.',
      distinctiveDevices: [
        { name: 'Thủ pháp Tương phản – Đối lập', description: 'Vũ khí thô sơ của nghĩa quân >< Trang bị tối tân của giặc Pháp để tôn vinh tinh thần quả cảm.' },
        { name: 'Nhịp văn dồn dập và động từ mạnh', description: 'Tái hiện không khí trận đánh công đồn như một thước phim cận cảnh.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-manh-ao-vai',
        detailName: 'Chi tiết "Ngoài cật có một manh áo vải, nào đợi mang bao tấu, bầu ngòi"',
        excerptOrContext: 'Ngoài cật có một manh áo vải, nào đợi mang bao tấu, bầu ngòi; trong tay cầm một ngọn tầm vông, chi nài sắm mã tấu, gươm dài.',
        directMeaning: 'Sự thiếu thốn, thô sơ đến tột cùng về quân trang và vũ khí của nghĩa quân nông dân.',
        symbolicMeaning: 'Biến "manh áo vải" thành biểu tượng thẩm mỹ bất hủ cho chủ nghĩa anh hùng bình dị của dân tộc Việt Nam.',
        thematicConnection: 'Làm nổi bật tầm vóc vĩ đại của lòng yêu nước chiến thắng bạo lực thực dân.',
      },
    ],
    literaryValues: {
      ideologicalValue: 'Khẳng định vai trò lịch sử của nhân dân lao động trong sự nghiệp bảo vệ Tổ quốc.',
      artisticValue: 'Tuyệt tác số một của thể loại văn tế và văn học yêu nước nửa cuối thế kỷ XIX.',
      message: 'Khi Tổ quốc lâm nguy, mỗi người dân bình thường nhất đều có thể hóa thành bậc đại anh hùng.',
      modernRelevance: 'Giáo dục lòng biết ơn sâu sắc đối với sự hy sinh của các thế hệ cha anh vì độc lập dân tộc.',
    },
    quick60s: {
      author: 'Nguyễn Đình Chiểu (Đồ Chiểu)',
      genre: 'Văn tế (Biền ngẫu)',
      context: 'Cuối năm 1861, sau trận nghĩa quân Cần Giuộc tập kích đồn Pháp.',
      theme: 'Ca ngợi và khóc thương những người nông dân nghĩa sĩ Cần Giuộc.',
      coreFigureOrCharacter: 'Tập thể người nông dân nghĩa sĩ áo vải.',
      mainIdea: 'Dựng tượng đài bi tráng về người nông dân yêu nước lần đầu bước vào văn học viết.',
      keyArt: 'Bút pháp hiện thực kết hợp trữ tình bi tráng, tương phản đối lập, ngôn ngữ Nam Bộ.',
      goldenKeywords: ['Súng giặc đất rền', 'Cui cút làm ăn', 'Manh áo vải – Ngọn tầm vông', 'Đạp rào lướt tới', 'Sống đánh giặc thác cũng đánh giặc'],
      takeaway: 'Khúc ca bi tráng bất tử về người nông dân áo vải hóa anh hùng cứu nước.',
    },
  },

  'chieu-suong': {
    slug: 'chieu-suong',
    title: 'Chiều sương',
    authorId: 'bui-hien',
    authorName: 'Bùi Hiển',
    grade: 11,
    genre: 'Truyện ngắn',
    textbook: 'Ngữ văn 11 (Kết nối tri thức với cuộc sống – GDPT 2018)',
    year: '1941',
    origin: 'In trong tập truyện ngắn đầu tay "Nằm vạ" (1941) của nhà văn Bùi Hiển.',
    topic: 'Cuộc sống mưu sinh hiểm nguy trên biển khơi và vẻ đẹp bình dị, kiên cường của những người dân chài miền Trung.',
    centralTheme:
      'Qua câu chuyện về chiếc thuyền ma trong màn sương biển của lão Nhiệm Bình, tác phẩm ngợi ca lòng quả cảm, tình đồng류 sâu nặng và thái độ bình thản của người dân chài trước ranh giới sinh – tử.',
    keywords: ['Bùi Hiển', 'Chiều sương', 'Truyện lồng truyện', 'Lão Nhiệm Bình', 'Chàng trai họ Cao', 'Thuyền ma trên biển'],
    hookIntro:
      'Giữa buổi chiều sương muối giăng kín làng chài Xứ Nghệ, câu chuyện của lão Nhiệm Bình đưa người nghe lạc vào màn sương mù mịt ngoài khơi xa — nơi con thuyền đánh cá chạm trán một chiếc "thuyền ma" đầy những bóng người trầm lặng.',
    coverImage: WORK_IMAGES['chieu-suong'],
    historicContext: {
      timeframe: 'Năm 1941, giai đoạn văn xuôi Việt Nam khám phá sâu sắc đời sống phong tục các vùng miền.',
      historicalBackground:
        'Bùi Hiển gắn bó máu thịt với vùng biển Cửa Lò – Nghi Lộc (Nghệ An), thấu hiểu từng cơn bão biển và nỗi nhọc nhằn của ngư dân.',
      personalCircumstance:
        'Sáng tác khi nhà văn mới 22 tuổi, lập tức gây tiếng vang lớn bởi lối trần thuật độc đáo.',
      impactOnWork:
        'Đem lại cho văn học hiện đại một bức tranh chân thực, giàu chất thơ và huyền ảo về nghề đi biển.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Phần 1: Khung cảnh chiều sương nơi xóm chài và cuộc trò chuyện tại nhà lão Nhiệm Bình', content: 'Chàng trai trẻ ("chàng") đến thăm lão Nhiệm Bình vào buổi chiều mưa sương và nghe lão kể chuyện đi biển.' },
        { part: 'Phần 2: Câu chuyện trong quá khứ về chuyến ra khơi của phó Nước và cuộc gặp gỡ "thuyền ma"', content: 'Thuyền của phó Nước gặp bão trôi dạt trong sương mù, vớt được một người trên biển rồi gặp chiếc thuyền lạ cứu giúp dẫn đường về bờ.' },
        { part: 'Phần 3: Sự thật rùng mình khi cập bến và dư âm về kiếp sống dân chài', content: 'Khi vào bờ mới biết chiếc thuyền của chàng trai họ Cao đã bị đắm từ trước đó; kết lại bằng hình ảnh những đoàn thuyền vẫn bình thản ra khơi.' },
      ],
      shortSummary:
        'Vào một buổi chiều sương lạnh lẽo, nhân vật "chàng" đến nhà lão Nhiệm Bình nghe kể chuyện đời biển cả. Lão kể về chuyến đi biển năm xưa của ông phó Nước: giữa biển khơi mù sương sau trận bão, thuyền ông cứu được một người bám vào mảnh ván, rồi được một chiếc thuyền lạ khác (có anh trai họ Cao) cho gạo và dẫn đường vào bờ. Khi cập bến, mọi người bàng hoàng nhận ra chiếc thuyền của họ Cao đã bị sóng đánh chìm từ mấy hôm trước.',
      centralConflict: 'Sự đối mặt thường trực giữa con người lao động nhỏ bé nhưng kiên cường với thiên nhiên biển cả dữ dội và bí ẩn.',
    },
    mainContentPoints: [
      'Kết cấu "truyện lồng trong truyện" và sự dịch chuyển điểm nhìn linh hoạt (từ người kể chuyện ngôi thứ ba -> điểm nhìn của "chàng" -> lời kể của lão Nhiệm Bình).',
      'Màu sắc huyền ảo của chi tiết "thuyền ma" dẫn đường: biểu tượng cho sự gắn kết thiêng liêng giữa người sống và người đã khuất trên biển.',
      'Vẻ đẹp tâm hồn người dân chài: trọng tình nghĩa, sẵn sàng sẻ chia nắm gạo cuối cùng giữa cơn hoạn nạn và bình thản tiếp tục ra khơi.',
    ],
    analysisLevels: {
      basic:
        'Truyện kể lại câu chuyện kỳ lạ của lão Nhiệm Bình về những người dân chài gặp bão trên biển và được hồn ma những người bạn chài đã khuất dẫn đường về bến. Qua đó ca ngợi tình nghĩa và lòng dũng cảm của ngư dân.',
      detailed:
        'Yếu tố kỳ ảo trong "Chiều sương" không nhằm gây nỗi sợ hãi ma quái mà thấm đẫm tinh thần nhân văn: ngay cả khi đã chết dưới đáy biển, linh hồn những người dân chài (như chàng trai họ Cao) vẫn không rời bỏ đồng đội, vẫn cho gạo và dẫn thuyền bạn về bờ an toàn.',
      advanced:
        'Trong chương trình Ngữ văn 11 mới (Bài 1: Câu chuyện và điểm nhìn trong truyện kể), "Chiều sương" là văn bản điển hình để phân tích sự phối hợp điểm nhìn (điểm nhìn bên ngoài và bên trong, điểm nhìn của người trí thức trẻ và điểm nhìn giàu trải nghiệm của lão ngư dân) cùng nhịp điệu trần thuật giàu chất thơ.',
    },
    characters: [
      {
        id: 'lao-nhiem-binh-char',
        name: 'Lão Nhiệm Bình & Những người dân chài',
        role: 'Người kể chuyện đời biển cả & Tập thể ngư dân',
        appearance: 'Dáng vẻ từng trải, giọng kể trầm ấm bên ấm nước chè xanh giữa chiều sương.',
        situation: 'Gắn bó trọn đời với nghề đánh cá đầy bất trắc nơi biển miền Trung.',
        speechAndActions: 'Cứu người bị nạn giữa sóng dữ, chia sẻ từng bát gạo, bình thản kể về cái chết và những chuyến ra khơi.',
        innerPsychology: 'Điềm tĩnh, nhân hậu, coi cái chết trên biển nhẹ tựa giấc ngủ và luôn gắn bó keo sơn với bạn chài.',
        symbolicMeaning: 'Biểu tượng cho sức sống bền bỉ và vẻ đẹp tâm hồn của người lao động vùng biển Việt Nam.',
      },
    ],
    artisticFeatures: {
      prominentCraft: 'Nghệ thuật kết cấu "truyện lồng truyện" và dịch chuyển điểm nhìn trần thuật tinh tế; pha trộn hài hòa giữa hiện thực đời thường và màu sắc kỳ ảo.',
      language: 'Giàu phương ngữ miền Trung và từ vựng nghề biển sống động, giàu chất thơ.',
      tone: 'Trầm lắng, bâng khuâng như màn sương chiều nhưng ấm áp tình người.',
      structureOrPointOfView: 'Ngôi kể thứ ba kết hợp điểm nhìn của nhân vật "chàng" và lời kể trực tiếp của lão Nhiệm Bình.',
      imageryOrRhetoric: 'Màn sương biển trắng đục, chiếc thuyền lướt đi không tiếng động, ánh mắt trầm ngâm của những bóng người trên thuyền.',
      distinctiveDevices: [
        { name: 'Kết cấu Truyện lồng truyện', description: 'Khung cảnh chiều sương ở hiện tại mở ra câu chuyện biển sương trong quá khứ.' },
        { name: 'Yếu tố Kỳ ảo nhân văn', description: 'Chiếc thuyền ma xuất hiện để cứu giúp người sống, tôn vinh tình nghĩa đồng loại.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-thuyen-ma',
        detailName: 'Chi tiết "Chiếc thuyền ma" cho gạo và dẫn đường giữa biển sương mù',
        excerptOrContext: 'Trên chiếc thuyền kia, những bóng người cứ lặng lẽ đi lại, không ai nói một lời... Họ trao sang một ít gạo rồi đi trước dẫn đường về tận cửa lạch.',
        directMeaning: 'Sự kiện kỳ lạ mà thuyền ông phó Nước trải qua trong cơn mê mệt vì đói và lạnh trên biển.',
        symbolicMeaning: 'Tình đoàn kết, tương thân tương ái của người dân chài vượt qua cả ranh giới âm – dương.',
        thematicConnection: 'Làm sáng tỏ chủ đề nhân bản sâu sắc của tác phẩm về nghĩa tình con người trước thiên nhiên.',
      },
    ],
    literaryValues: {
      realisticValue: 'Phản ánh chân thực cuộc sống lao động cực nhọc, hiểm nguy của ngư dân Việt Nam trước năm 1945.',
      humanitarianValue: 'Ca ngợi lòng dũng cảm, sự lạc quan và tình yêu thương đùm bọc giữa những người lao động nghèo.',
      artisticValue: 'Truyện ngắn xuất sắc tiêu biểu cho nghệ thuật tổ chức điểm nhìn trong văn xuôi hiện đại.',
      message: 'Trước biển cả mênh mông và hiểm nguy, chính tình người và ý chí kiên cường là ngọn hải đăng dẫn lối con người trở về.',
      modernRelevance: 'Khơi dậy sự thấu cảm và trân trọng đối với những ngư dân ngày đêm bám biển quê hương.',
    },
    quick60s: {
      author: 'Bùi Hiển',
      genre: 'Truyện ngắn hiện đại',
      context: 'Năm 1941, trích từ tập truyện ngắn "Nằm vạ".',
      theme: 'Cuộc sống hiểm nguy và nghĩa tình sâu nặng của người dân chài miền Trung.',
      coreFigureOrCharacter: 'Nhân vật "chàng", lão Nhiệm Bình, ông phó Nước.',
      mainIdea: 'Ca ngợi vẻ đẹp tâm hồn nhân hậu và bản lĩnh can trường của ngư dân trước biển cả.',
      keyArt: 'Kết cấu truyện lồng truyện, dịch chuyển điểm nhìn, kết hợp hiện thực và kỳ ảo.',
      goldenKeywords: ['Chiều sương', 'Lão Nhiệm Bình', 'Ông phó Nước', 'Chiếc thuyền ma dẫn đường', 'Điểm nhìn trần thuật'],
      takeaway: 'Khúc ca trầm lắng mà ấm áp về tình nghĩa đồng loại giữa biển khơi mù sương.',
    },
  },

  'coi-la': {
    slug: 'coi-la',
    title: 'Cõi lá',
    authorId: 'do-phan',
    authorName: 'Đỗ Phấn',
    grade: 11,
    genre: 'Tùy bút',
    textbook: 'Ngữ văn 11 (Kết nối tri thức với cuộc sống – GDPT 2018)',
    year: '2014',
    origin: 'Trích trong tuyển tập tản văn – tùy bút viết về Hà Nội của nhà văn, họa sĩ Đỗ Phấn (Bài 6: Nguyễn Du và Tùy bút, Tản văn).',
    topic: 'Vẻ đẹp kỳ diệu của các mùa cây thay lá trên phố phường Hà Nội và tình yêu tha thiết dành cho Thủ đô.',
    centralTheme:
      'Qua sự quan sát tinh tế như một họa sĩ trước vòng tuần hoàn của lá cây Hà Nội (lá bàng, lá sấu, lá xà cừ, lá bằng lăng, lộc vừng), tác giả gửi gắm niềm tự hào về bản sắc sinh thái – văn hóa độc đáo và ký ức sâu nặng của người Hà Nội.',
    keywords: ['Đỗ Phấn', 'Cõi lá', 'Tản văn Hà Nội', 'Mùa lá rụng', 'Lộc non', 'Cái tôi trữ tình tùy bút'],
    hookIntro:
      'Mỗi khi gió xuân mang theo mưa bụi làm bung nở muôn triệu búp lộc non xanh biếc sau những ngày lá bàng đỏ rực, lá sấu vàng ươm trút xuống vỉa hè, Hà Nội lại bước vào một "Cõi lá" dịu dàng, quyến rũ đến nao lòng.',
    coverImage: WORK_IMAGES['coi-la'],
    historicContext: {
      timeframe: 'Sáng tác trong thời kỳ đương đại (thập niên 2010).',
      historicalBackground:
        'Trước tốc độ bê tông hóa đô thị nhanh chóng, những hàng cây cổ thụ và các mùa thay lá trở thành di sản thiên nhiên – văn hóa quý giá của Hà Nội.',
      personalCircumstance:
        'Đỗ Phấn là người con sinh ra, lớn lên ở Hà Nội, đồng thời là họa sĩ nên có cái nhìn đặc biệt nhạy cảm với sắc màu của cây lá phố cổ.',
      impactOnWork:
        'Kết hợp nhuần nhuyễn giữa chất hội họa tạo hình và chất trữ tình hoài niệm của thể loại tản văn, tùy bút.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Phần 1: Sự bừng thức của lộc non mùa xuân và cảm xúc xôn xao của lòng người', content: 'Từ những cành cây khẳng khiu mùa đông, chỉ sau vài hạt mưa bụi tháng Giêng – Hai, cả vòm trời Hà Nội bỗng xanh mướt màu lá non.' },
        { part: 'Phần 2: Bản giao hưởng sắc màu của các loài cây Hà Nội qua bốn mùa', content: 'Miêu tả chi tiết vẻ đẹp riêng của cây cơm nguội, cây bàng lá đỏ, cây xà cừ trút lá rào rạt, cây sấu, cây bằng lăng và cây lộc vừng bên hồ Gươm.' },
        { part: 'Phần 3: Sự gắn bó máu thịt giữa "cõi lá" và tâm hồn, ký ức người Hà Nội', content: 'Cõi lá làm dịu đi sự ngột ngạt của phố thị, trở thành nỗi nhớ da diết của bất kỳ ai từng sống và yêu Hà Nội.' },
      ],
      shortSummary:
        'Văn bản "Cõi lá" dẫn người đọc đi dọc các con phố Hà Nội để chiêm ngưỡng vòng tuần hoàn kỳ diệu của cây lá suốt bốn mùa: từ sắc đỏ đồng hun của lá bàng mùa đông, thảm lá sấu, lá xà cừ vàng rộm trải đầy vỉa hè cho đến khoảnh khắc lộc non bừng nở đầu xuân. Qua đó, tác giả khắc họa vẻ đẹp tâm hồn thanh lịch, nhạy cảm của người Hà Nội gắn liền với thiên nhiên phố phường.',
      emotionalArc: 'Ngỡ ngàng trước sức sống mùa xuân -> Đắm say từng sắc lá bốn mùa -> Lắng đọng suy tư về văn hóa đô thị.',
    },
    mainContentPoints: [
      'Hình tượng trung tâm "Cõi lá": không gian thiên nhiên đan quyện vào từng mái ngói, vỉa hè và nhịp sống Hà Nội.',
      'Con mắt hội họa tinh tường của Đỗ Phấn khi phân biệt từng sắc độ lá: xanh cốm của lộc sấu, đỏ thẫm của bàng, vàng rực của cơm nguội.',
      'Sự kết hợp giữa yếu tố tự sự, miêu tả và trữ tình trong thể loại tản văn – tùy bút hiện đại.',
      'Thông điệp sinh thái nhân văn: gìn giữ cây xanh chính là gìn giữ linh hồn và ký ức của thành phố.',
    ],
    analysisLevels: {
      basic:
        'Tác phẩm miêu tả vẻ đẹp của các loài cây và những mùa lá thay đổi trên đường phố Hà Nội. Qua đó thể hiện tình yêu thiên nhiên và tình yêu Hà Nội sâu sắc của tác giả Đỗ Phấn.',
      detailed:
        'Cái "tôi" tác giả trong "Cõi lá" hiện lên như một người tình si mê của phố phường: ông thuộc nằm lòng thời điểm từng loài cây trút lá, nảy mầm và nhận ra sự tương giao kỳ diệu giữa cảnh sắc "cõi lá" với tâm trạng con người ("Những chiếc lá non đu đưa trong gió như những đốm lửa xanh").',
      advanced:
        'Trong chương trình GDPT 2018 (Bài Tùy bút, Tản văn), "Cõi lá" là minh chứng tiêu biểu cho sự giao thoa giữa văn chương và hội họa. Ngôn ngữ giàu chất tạo hình cùng nhịp văn thong thả, giàu suy tư đã nâng những chiếc lá bình thường trên phố thành biểu tượng thẩm mỹ của căn cước văn hóa Thăng Long – Hà Nội.',
    },
    artisticFeatures: {
      prominentCraft: 'Sự kết hợp nhuần nhuyễn giữa bút pháp miêu tả hội họa (màu sắc, ánh sáng) và cảm xúc trữ tình, suy tưởng sâu lắng.',
      language: 'Giàu tính từ chỉ màu sắc, trạng thái tinh tế; câu văn mềm mại, uyển chuyển như nét cọ màu nước.',
      tone: 'Trầm ấm, thiết tha, giàu chất thơ và hoài niệm.',
      structureOrPointOfView: 'Mạch liên tưởng tự do xoay quanh chủ đề "Cõi lá" theo dòng chảy bốn mùa của Hà Nội.',
      imageryOrRhetoric: 'Lá bàng đỏ như đồng hun, thảm lá sấu vàng trên phố Phan Đình Phùng, lộc vừng đỏ góc hồ Gươm.',
      distinctiveDevices: [
        { name: 'Liên tưởng Hội họa – Văn hóa', description: 'Mỗi loài cây được khắc họa như một bức tranh sơn dầu sống động gắn với từng con phố cụ thể.' },
        { name: 'Nhân hóa & Ẩn dụ không gian ("Cõi lá")', description: 'Nâng thế giới cây lá thành một cõi sống có linh hồn, đối thoại với con người.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-mua-loc-non',
        detailName: 'Khoảnh khắc "Lộc non bừng nở" biến phố phường thành cõi lá thần tiên',
        excerptOrContext: 'Chỉ sau một vài đêm mưa bụi tháng Giêng, tháng Hai, sáng ra mở cửa đã thấy cả một vòm trời xanh mướt lá non...',
        directMeaning: 'Sự hồi sinh kỳ diệu của cây cối Hà Nội vào dịp đầu xuân.',
        symbolicMeaning: 'Biểu tượng cho sức sống trẻ trung, vĩnh cửu của mảnh đất ngàn năm văn hiến.',
        thematicConnection: 'Khơi dậy niềm yêu đời và sự gắn bó máu thịt giữa con người với thiên nhiên đô thị.',
      },
    ],
    literaryValues: {
      ideologicalValue: 'Nuôi dưỡng tình yêu quê hương, phố phường và ý thức bảo vệ không gian xanh của đô thị.',
      artisticValue: 'Tác phẩm tản văn – tùy bút đương đại đặc sắc nhất viết về thiên nhiên Hà Nội trong SGK Ngữ văn 11 mới.',
      message: 'Hãy mở rộng tâm hồn để lắng nghe nhịp thở của thiên nhiên quanh mình, bởi mỗi nhành cây chiếc lá đều chở nặng ký ức văn hóa.',
      modernRelevance: 'Thức tỉnh trách nhiệm sinh thái và lối sống nhân văn, chậm rãi giữa đô thị hiện đại.',
    },
    quick60s: {
      author: 'Đỗ Phấn',
      genre: 'Tản văn – Tùy bút',
      context: 'Sáng tác đương đại, trích trong tuyển tập viết về Hà Nội.',
      theme: 'Vẻ đẹp bốn mùa cây thay lá và tình yêu sâu nặng dành cho Hà Nội.',
      coreFigureOrCharacter: 'Cái "tôi" trữ tình của người nghệ sĩ – họa sĩ Hà Nội và hình tượng "Cõi lá".',
      mainIdea: 'Tôn vinh vẻ đẹp thiên nhiên gắn liền với chiều sâu văn hóa, lịch sử của phố phường Thủ đô.',
      keyArt: 'Ngôn ngữ giàu chất hội họa, liên tưởng tinh tế, kết hợp tự sự và trữ tình.',
      goldenKeywords: ['Cõi lá', 'Đỗ Phấn', 'Lộc non mùa xuân', 'Lá bàng đỏ', 'Thảm lá sấu vàng'],
      takeaway: 'Bức tranh màu nước bằng ngôn từ về những mùa lá làm nên linh hồn Hà Nội.',
    },
  },

  'to-tam-song-hay-khong-song': {
    slug: 'to-tam-song-hay-khong-song',
    title: 'Sống, hay không sống – đó là vấn đề (Trích Hăm-lét)',
    authorId: 'william-shakespeare',
    authorName: 'William Shakespeare',
    grade: 11,
    genre: 'Kịch',
    textbook: 'Ngữ văn 11 (Kết nối tri thức & Chân trời sáng tạo – GDPT 2018)',
    year: '1601',
    origin: 'Trích Hồi III, Cảnh 1 trong vở bi kịch kiệt tác "Hăm-lét" (Hamlet) của đại văn hào William Shakespeare.',
    topic: 'Độc thoại nội tâm mang tầm vóc triết học nhân loại của hoàng tử Hăm-lét trước sự lựa chọn giữa cam chịu hay đứng lên đấu tranh chống lại cái ác.',
    centralTheme:
      'Qua màn độc thoại bất hủ "Sống, hay không sống" và cuộc đối thoại đầy bi kịch với nàng Ô-phê-li-a, đoạn trích khắc họa sự giằng xé dữ dội của con người nhân văn Phục Hưng trước một thực tại xã hội đầy dối trá, tội ác ("một biển tai ương").',
    keywords: ['William Shakespeare', 'Hăm-lét', 'Bi kịch Phục Hưng', 'Sống hay không sống', 'To be or not to be', 'Ô-phê-li-a'],
    hookIntro:
      'Giữa cung điện Đan Mạch biến thành nhà tù của sự phản bội và tội ác, vị hoàng tử trẻ cất lên câu hỏi vang vọng suốt bốn thế kỷ: "Sống, hay không sống – đó là vấn đề" — đỉnh cao chói lọi nhất của nghệ thuật bi kịch thế giới.',
    coverImage: WORK_IMAGES['to-tam-song-hay-khong-song'],
    historicContext: {
      timeframe: 'Khoảng năm 1600 – 1601 (thời kỳ đỉnh cao nhưng bắt đầu xuất hiện khủng hoảng của Chủ nghĩa Nhân văn Phục Hưng Anh).',
      historicalBackground:
        'Những lý tưởng tươi đẹp về con người thời Phục Hưng va đập mạnh mẽ với thực tại xã hội phong kiến suy tàn và mầm mống tư sản tàn bạo.',
      personalCircumstance:
        'Mở đầu giai đoạn sáng tác các bi kịch lớn của Shakespeare (Hamlet, Othello, King Lear, Macbeth).',
      impactOnWork:
        'Đưa bi kịch từ xung đột định mệnh bên ngoài vào sâu trong xung đột nhận thức và lương tri bên trong tâm hồn con người.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Phần 1: Âm mưu nghe lén của nhà vua Claudius và tể tướng Polonius', content: 'Claudius và Polonius dùng nàng Ophelia làm mồi nhử để dò xét xem sự điên loạn của Hamlet có phải vì thất tình hay không.' },
        { part: 'Phần 2: Độc thoại nội tâm bất hủ "Sống, hay không sống – đó là vấn đề" của Hăm-lét', content: 'Hamlet suy tư triết học giữa hai con đường: nhẫn nhục chịu đựng số phận hay cầm vũ khí vùng lên chống lại một biển tai ương.' },
        { part: 'Phần 3: Cuộc đối thoại đau đớn giữa Hăm-lét và Ô-phê-li-a ("Hãy vào một nhà tu kín đi")', content: 'Nhận ra Ophelia bị biến thành công cụ nghe lén, Hamlet giả điên nói những lời cay đắng khuyên nàng vào nhà tu kín để khỏi sinh ra những kẻ tội lỗi.' },
      ],
      shortSummary:
        'Sau khi biết sự thật chú ruột Claudius đã đầu độc vua cha và cướp ngôi cùng hoàng hậu, hoàng tử Hăm-lét giả điên để tìm cách hành động. Vua Claudius và Polonius bố trí cho Ô-phê-li-a gặp Hăm-lét để nghe lén. Bước ra sân khấu, Hăm-lét chìm trong màn độc thoại triết học "Sống, hay không sống". Khi gặp Ô-phê-li-a và phát hiện có kẻ rình rập, chàng đau đớn từ bỏ tình yêu riêng tư, khuyên nàng vào nhà tu kín để giữ gìn sự trong sạch.',
      centralConflict: 'Xung đột bi kịch giữa lý tưởng nhân văn cao đẹp của Hăm-lét với hiện thực đen tối của triều đình Đan Mạch và sự do dự của lý trí suy tư.',
    },
    mainContentPoints: [
      'Ý nghĩa triết học của câu hỏi "Sống, hay không sống": không phải chuyện tự sát đơn thuần mà là lựa chọn thái độ sống — đầu hàng thực tại hay chiến đấu đến cùng.',
      'Bức tranh xã hội Đan Mạch (và thời đại) hiện lên trong lời độc thoại: sự bạo ngược của kẻ thống trị, sự trì trệ của luật pháp, sự lăng nhục người hiền tài.',
      'Bi kịch tình yêu với Ô-phê-li-a: Hăm-lét buộc phải đeo mặt nạ lạnh lùng, tàn nhẫn để bảo vệ sứ mệnh lớn lao và cảnh tỉnh người mình yêu.',
      'Đặc trưng thể loại bi kịch cổ điển: nhân vật cao quý, xung đột không thể điều hòa, ngôn ngữ giàu tính triết luận.',
    ],
    analysisLevels: {
      basic:
        'Đoạn trích thể hiện nỗi trăn trở sâu sắc của hoàng tử Hăm-lét khi phải lựa chọn giữa việc cam chịu số phận hay đứng lên chống lại cái ác, đồng thời cho thấy nỗi đau đớn của chàng khi phải từ bỏ tình yêu với Ô-phê-li-a.',
      detailed:
        '"Sống" (To be) theo nghĩa hèn nhát là cúi đầu chịu đựng những mũi tên hòn đạn của số phận phũ phàng; còn "Không sống" (Not to be) theo cách cầm vũ khí chống lại cả một biển tai ương dù có thể phải chết lại chính là cách sống cao quý nhất của bậc đại trượng phu.',
      advanced:
        'Trong chương trình GDPT 2018 (Bài Bi kịch), đoạn trích minh họa xuất sắc quy luật "hành động bên trong" của kịch hiện đại: kịch tính không chỉ nằm ở tiếng gươm khua mà nằm ngay trong sự va đập của các luồng tư tưởng trong độc thoại nội tâm. Lời khuyên "Hãy vào một nhà tu kín đi!" vừa là sự vỡ mộng trước sự yếu đuối của Ophelia, vừa là tiếng kêu cứu tuyệt vọng cho cái Đẹp giữa một thế giới đã mục ruỗng.',
    },
    characters: [
      {
        id: 'hamlet-char',
        name: 'Hoàng tử Hăm-lét (Hamlet)',
        role: 'Nhân vật bi kịch trung tâm',
        appearance: 'Trang phục đen trầm tư, gương mặt chất chứa suy tư triết học vượt thời đại.',
        situation: 'Vua cha bị sát hại, chú ruột cướp ngôi và cưới mẹ, cả triều đình Đan Mạch là một nhà tù dối trá.',
        speechAndActions: 'Độc thoại sâu sắc về sự sống – cái chết và phẩm giá con người; nhanh nhạy nhận ra cạm bẫy nghe lén; quyết liệt cắt đứt tình riêng để gánh vác sứ mệnh thời đại.',
        innerPsychology: 'Trí tuệ uyên bác, tâm hồn nhạy cảm cao thượng nhưng bị giằng xé giữa trách nhiệm quá lớn và thực tại quá đen tối.',
        symbolicMeaning: 'Biểu tượng vĩnh cửu của con người tư tưởng luôn trăn trở đi tìm chân lý và lẽ sống chân chính.',
      },
      {
        id: 'ophelia-char',
        name: 'Nàng Ô-phê-li-a (Ophelia)',
        role: 'Nhân vật nữ bi kịch',
        appearance: 'Trong trắng, dịu dàng, cầm cuốn kinh cầu nguyện.',
        situation: 'Yêu Hăm-lét nhưng vì quá ngoan ngoãn vâng lời cha (Polonius) nên vô tình trở thành con tốt trong âm mưu của nhà vua.',
        speechAndActions: 'Đem trả lại các kỷ vật tình yêu cho Hăm-lét; đau khổ cầu nguyện khi tưởng chàng đã mất trí hoàn toàn.',
        innerPsychology: 'Thơ ngây, yếu đuối, bất lực trước cơn lốc chính trị tàn nhẫn nơi cung đình.',
        symbolicMeaning: 'Hiện thân của cái Đẹp mong manh bị nghiền nát trong cuộc xung đột bi kịch.',
      },
    ],
    artisticFeatures: {
      prominentCraft: 'Nghệ thuật độc thoại nội tâm mang tầm vóc triết học nhân sinh kết hợp với ngôn ngữ đối thoại hai tầng nghĩa ("giả điên để nói thật").',
      language: 'Thơ kịch giàu hình ảnh ẩn dụ (mũi tên hòn đạn của số phận, biển tai ương, giấc ngủ của cái chết).',
      tone: 'Trầm hùng, suy tư, đau đớn và quyết liệt.',
      structureOrPointOfView: 'Cấu trúc kịch 3 lớp: Mưu mô hậu trường -> Độc thoại triết học -> Xung đột đối thoại trực diện.',
      imageryOrRhetoric: 'Biển tai ương (a sea of troubles), lưỡi dao găm, nhà tu kín (nunnery).',
      distinctiveDevices: [
        { name: 'Độc thoại nội tâm Triết học (Soliloquy)', description: 'Mổ xẻ tận đáy sâu ý thức và lương tâm nhân loại.' },
        { name: 'Ngôn từ Đa nghĩa dưới lớp vỏ Giả điên', description: 'Lời nói với Ophelia đồng thời là đòn giáng thẳng vào kẻ đang nấp sau tấm màn.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-song-hay-khong-song',
        detailName: 'Câu hỏi bất hủ "Sống, hay không sống – đó là vấn đề"',
        excerptOrContext: 'Sống, hay không sống – đó là vấn đề. Chịu đựng tất cả những viên đá, những mũi tên của số phận phũ phàng, hay là cầm vũ khí vùng lên mà chống lại với cả một biển tai ương, đằng nào cao quý hơn?',
        directMeaning: 'Sự cân nhắc giữa hai thái độ ứng xử trước nghịch cảnh tột cùng.',
        symbolicMeaning: 'Tuyên ngôn về phẩm giá con người tự ý thức: không chấp nhận sống quỳ gối trước cái ác.',
        thematicConnection: 'Trái tim tư tưởng của toàn bộ vở kịch Hăm-lét và kịch trường Phục Hưng.',
      },
    ],
    literaryValues: {
      humanitarianValue: 'Tôn vinh vẻ đẹp trí tuệ, lương tri và khát vọng cải tạo thế giới của con người.',
      artisticValue: 'Đỉnh cao bất diệt của thể loại bi kịch trong lịch sử văn học nhân loại.',
      message: 'Sự cao quý của con người nằm ở dũng khí dám nhìn thẳng vào sự thật và đấu tranh chống lại cái ác, sự giả dối.',
      modernRelevance: 'Giúp thế hệ trẻ rèn luyện tư duy phản biện, bản lĩnh lựa chọn lẽ sống có trách nhiệm.',
    },
    quick60s: {
      author: 'William Shakespeare (Anh)',
      genre: 'Bi kịch (Trích Hồi III, Cảnh 1)',
      context: 'Sáng tác khoảng năm 1601, thời kỳ Phục Hưng Anh.',
      theme: 'Sự lựa chọn thái độ sống chống lại cái ác và bi kịch tình yêu của Hăm-lét.',
      coreFigureOrCharacter: 'Hoàng tử Hăm-lét và nàng Ô-phê-li-a.',
      mainIdea: 'Khẳng định phẩm giá cao quý của con người dám cầm vũ khí chống lại một biển tai ương.',
      keyArt: 'Độc thoại nội tâm triết học, ngôn ngữ đa nghĩa, xung đột bi kịch sâu sắc.',
      goldenKeywords: ['Sống hay không sống', 'Biển tai ương', 'Giả điên', 'Ô-phê-li-a', 'Hãy vào một nhà tu kín đi'],
      takeaway: 'Câu hỏi triết học vĩ đại nhất sân khấu thế giới về phẩm giá và hành động của con người.',
    },
  },

  /* ======================================================================== */
  /* CHƯƠNG TRÌNH GDPT 2018 MỚI – KHỐI LỚP 12 (BỔ SUNG TOÀN DIỆN)             */
  /* ======================================================================== */

  'tuyen-ngon-doc-lap': {
    slug: 'tuyen-ngon-doc-lap',
    title: 'Tuyên ngôn Độc lập',
    authorId: 'ho-chi-minh',
    authorName: 'Hồ Chí Minh',
    grade: 12,
    genre: 'Văn chính luận',
    textbook: 'Ngữ văn 12 (Kết nối tri thức, Chân trời sáng tạo, Cánh diều – GDPT 2018)',
    year: '1945',
    origin: 'Soạn thảo tại số nhà 48 Hàng Ngang (Hà Nội) và đọc trước quốc dân đồng bào, thế giới tại Quảng trường Ba Đình ngày 2/9/1945.',
    topic: 'Khẳng định quyền độc lập, tự do thiêng liêng của dân tộc Việt Nam và khai sinh nước Việt Nam Dân chủ Cộng hòa.',
    centralTheme:
      'Bằng lập luận đanh thép, bằng chứng lịch sử xác đáng và giọng văn hùng biện đầy tâm huyết, "Tuyên ngôn Độc lập" bác bỏ hoàn toàn luận điệu "bảo hộ", "khai hóa" của thực dân Pháp và tuyên bố trước thế giới nền độc lập tự do của dân tộc Việt Nam.',
    keywords: ['Hồ Chí Minh', 'Tuyên ngôn Độc lập', '2/9/1945', 'Suy rộng ra', 'Quyền hưởng tự do và độc lập', 'Đem tất cả tinh thần và lực lượng'],
    hookIntro:
      'Giữa nắng thu Ba Đình lịch sử ngày 2/9/1945, lời tuyên ngôn bất hủ vang lên kết nối ba thế kỷ đấu tranh của nhân loại với khát vọng tự do ngàn năm của dân tộc Việt — áng thiên cổ hùng văn của thời đại Hồ Chí Minh.',
    coverImage: WORK_IMAGES['tuyen-ngon-doc-lap'],
    historicContext: {
      timeframe: 'Ngày 2 tháng 9 năm 1945, ngay sau thắng lợi vĩ đại của Cách mạng tháng Tám.',
      historicalBackground:
        'Chính quyền cách mạng non trẻ đứng trước âm mưu tái chiếm Đông Dương của thực dân Pháp núp bóng quân Đồng minh (Anh ở phía Nam) và quân Tưởng Giới Thạch ở phía Bắc.',
      personalCircumstance:
        'Chủ tịch Hồ Chí Minh viết bản Tuyên ngôn tại căn gác nhỏ số 48 phố Hàng Ngang và gọi đây là giây phút hạnh phúc nhất trong cuộc đời cách mạng của Người.',
      impactOnWork:
        'Vừa là văn kiện pháp lý quốc tế mở đầu kỷ nguyên độc lập tự do, vừa là kiệt tác văn chính luận mẫu mực.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Phần 1: Cơ sở pháp lý và chính nghĩa của bản Tuyên ngôn', content: 'Trích dẫn Tuyên ngôn Độc lập năm 1776 của Mỹ và Tuyên ngôn Nhân quyền và Dân quyền năm 1791 của Pháp, từ đó "Suy rộng ra" quyền bình đẳng, tự do của mọi dân tộc.' },
        { part: 'Phần 2: Cơ sở thực tiễn – Tố cáo tội ác thực dân Pháp và khẳng định thực tế giành độc lập của nhân dân Việt Nam', content: 'Vạch trần tội ác về chính trị, kinh tế và hành động bán nước ta hai lần cho Nhật của Pháp; khẳng định nhân dân ta lấy lại nước từ tay Nhật chứ không phải từ tay Pháp.' },
        { part: 'Phần 3: Lời tuyên bố độc lập đanh thép và ý chí bảo vệ nền độc lập', content: 'Tuyên bố thoát ly hẳn quan hệ thực dân với Pháp, xóa bỏ mọi hiệp ước và khẳng định quyết tâm đem tất cả tinh thần, lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập.' },
      ],
      shortSummary:
        'Mở đầu bằng việc trích dẫn hai bản tuyên ngôn nổi tiếng của Mỹ và Pháp để xác lập nguyên lý quyền dân tộc tự quyết, Chủ tịch Hồ Chí Minh tiếp tục phơi bày toàn bộ tội ác dã man suốt hơn 80 năm của thực dân Pháp và sự hèn nhát đầu hàng phát xít Nhật của chúng. Cuối cùng, Người trịnh trọng tuyên bố trước thế giới: nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do độc lập.',
      centralConflict: 'Cuộc đấu lý quyết liệt trên mặt trận ngoại giao – pháp lý giữa chính nghĩa độc lập dân tộc Việt Nam và âm mưu xâm lược của chủ nghĩa thực dân.',
    },
    mainContentPoints: [
      'Nghệ thuật "gậy ông đập lưng ông" tài tình ở phần mở đầu và phép suy luận sáng tạo "Suy rộng ra": nâng quyền con người thành quyền dân tộc.',
      'Hệ thống bằng chứng lịch sử đanh thép (về chính trị, kinh tế, quân sự) đập tan luận điệu "khai hóa" và "bảo hộ" của thực dân Pháp.',
      'Giọng văn chính luận linh hoạt: khi trang trọng, hùng hồn; khi căm giận, đanh thép; khi sục sôi ý chí quyết tâm.',
      'Tầm vóc lịch sử: tiếp nối hào khí "Nam quốc sơn hà" (Lý Thường Kiệt) và "Bình Ngô đại cáo" (Nguyễn Trãi).',
    ],
    analysisLevels: {
      basic:
        'Bản Tuyên ngôn Độc lập khẳng định quyền tự do, độc lập của dân tộc Việt Nam, tố cáo tội ác của thực dân Pháp và tuyên bố sự ra đời của nước Việt Nam Dân chủ Cộng hòa trước toàn thế giới.',
      detailed:
        'Sức thuyết phục tuyệt đối của "Tuyên ngôn Độc lập" nằm ở cấu trúc lập luận tam đoạn luận chặt chẽ: Đại tiền đề (Chân lý phổ quát về quyền con người và quyền dân tộc) -> Tiểu tiền đề (Thực dân Pháp chà đạp chân lý và đầu hàng Nhật, còn nhân dân Việt Nam anh dũng chống phát xít giành lại đất nước) -> Kết luận tất yếu (Việt Nam hoàn toàn có quyền và sự thật đã độc lập).',
      advanced:
        'Trong chương trình GDPT 2018 (Chuyên đề Tác gia Hồ Chí Minh và Văn bản nghị luận), "Tuyên ngôn Độc lập" là đỉnh cao của nghệ thuật hùng biện hiện đại: mỗi từ ngữ ("bắt đầu", "thoát ly hẳn", "xóa bỏ hết", "có quyền hưởng... và sự thật đã thành...") đều mang độ chính xác pháp lý tuyệt đối kết hợp với nhiệt huyết yêu nước cháy bỏng.',
    },
    artisticFeatures: {
      prominentCraft: 'Lập luận chặt chẽ, lý lẽ sắc bén gắn liền với dẫn chứng thực tế không thể chối cãi; ngôn ngữ chính luận cô đọng, giàu sức biểu cảm.',
      language: 'Chính xác, đanh thép, sử dụng hiệu quả điệp từ, điệp cấu trúc và câu văn trùng điệp.',
      tone: 'Hùng hồn, trang trọng, đanh thép và tràn đầy niềm tự hào dân tộc.',
      structureOrPointOfView: 'Kết cấu 3 phần mạch lạc theo trình tự: Nguyên lý pháp lý -> Thực tiễn lịch sử -> Tuyên bố chính trị.',
      imageryOrRhetoric: 'Tắm các cuộc khởi nghĩa của ta trong những bể máu, quỳ gối đầu hàng, xiềng xích thực dân.',
      distinctiveDevices: [
        { name: 'Thủ pháp "Gậy ông đập lưng ông"', description: 'Dùng chính lời của tổ tiên người Pháp và người Mỹ để khóa chặt luận điệu xâm lược của thực dân.' },
        { name: 'Phép Điệp liên hoàn & Tăng tiến', description: 'Điệp từ "Chúng..." trong bản cáo trạng và nhịp tăng tiến "tinh thần và lực lượng, tính mạng và của cải" ở phần kết.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-suy-rong-ra',
        detailName: 'Mệnh đề chuyển tiếp thiên tài "Suy rộng ra, câu ấy có ý nghĩa là..."',
        excerptOrContext: 'Suy rộng ra, câu ấy có ý nghĩa là: tất cả các dân tộc trên thế giới đều sinh ra bình đẳng, dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do.',
        directMeaning: 'Mở rộng phạm vi từ quyền cá nhân con người sang quyền tự quyết của các dân tộc.',
        symbolicMeaning: 'Đóng góp lớn lao của tư tưởng Hồ Chí Minh vào lịch sử giải phóng dân tộc thế giới thế kỷ XX.',
        thematicConnection: 'Đặt nền tảng pháp lý vững chắc nhất cho toàn bộ bản Tuyên ngôn.',
      },
    ],
    literaryValues: {
      ideologicalValue: 'Tuyên ngôn về quyền con người và quyền độc lập dân tộc, kết tinh truyền thống yêu nước hàng ngàn năm của Việt Nam.',
      artisticValue: 'Kiệt tác văn chính luận mẫu mực bậc nhất của nền văn học Việt Nam hiện đại.',
      message: 'Độc lập, tự do là quyền thiêng liêng bất khả xâm phạm của mọi dân tộc và phải được bảo vệ bằng cả tinh thần, lực lượng, tính mạng và của cải.',
      modernRelevance: 'Khơi dậy lòng tự hào dân tộc và ý thức trách nhiệm xây dựng, bảo vệ chủ quyền Tổ quốc hôm nay.',
    },
    quick60s: {
      author: 'Hồ Chí Minh',
      genre: 'Văn chính luận hiện đại (Tuyên ngôn quốc gia)',
      context: 'Đọc tại Quảng trường Ba Đình (Hà Nội) ngày 2/9/1945.',
      theme: 'Tuyên bố quyền độc lập, tự do của Việt Nam và khai sinh nước Việt Nam Dân chủ Cộng hòa.',
      coreFigureOrCharacter: 'Chủ tịch Hồ Chí Minh và toàn thể dân tộc Việt Nam.',
      mainIdea: 'Bác bỏ luận điệu thực dân Pháp, khẳng định chính nghĩa và ý chí sắt đá bảo vệ nền độc lập.',
      keyArt: 'Lập luận chặt chẽ, dẫn chứng xác thực, nghệ thuật "gậy ông đập lưng ông", ngôn từ đanh thép.',
      goldenKeywords: ['2/9/1945', 'Suy rộng ra', 'Tuyên ngôn Mỹ – Pháp', 'Bản cáo trạng thực dân', 'Quyền hưởng tự do và độc lập'],
      takeaway: 'Áng thiên cổ hùng văn mở ra kỷ nguyên Độc lập – Tự do của dân tộc Việt Nam.',
    },
  },

  'nhat-ky-dang-thuy-tram': {
    slug: 'nhat-ky-dang-thuy-tram',
    title: 'Nhật ký Đặng Thùy Trâm (Trích)',
    authorId: 'dang-thuy-tram',
    authorName: 'Đặng Thùy Trâm',
    grade: 12,
    genre: 'Tùy bút',
    textbook: 'Ngữ văn 12 (Kết nối tri thức & Chân trời sáng tạo – GDPT 2018)',
    year: '1968 – 1970',
    origin: 'Trích từ cuốn "Nhật ký Đặng Thùy Trâm" viết tại bệnh xá Đức Phổ, Quảng Ngãi (Bài Phóng sự, Nhật ký).',
    topic: 'Vẻ đẹp tâm hồn trong sáng, giàu lý tưởng và đức hy sinh cao cả của người nữ bác sĩ trẻ nơi chiến trường ác liệt.',
    centralTheme:
      'Qua những dòng ghi chép chân thực hằng ngày giữa mưa bom bão đạn ở chiến trường Đức Phổ, tác phẩm khắc họa vẻ đẹp kết hợp giữa tinh thần chiến sĩ kiên cường và trái tim nhân hậu, lãng mạn của thế hệ trẻ Việt Nam thời chống Mỹ.',
    keywords: ['Đặng Thùy Trâm', 'Nhật ký chiến trường', 'Bệnh xá Đức Phổ', 'Đừng đốt bản thân nó đã có lửa', 'Đời phải trải qua giông tố', 'Tuổi hai mươi'],
    hookIntro:
      '"Đừng đốt, bản thân nó đã có lửa rồi!" — cuốn nhật ký nhỏ thấm máu và nước mắt nơi tuyến lửa Đức Phổ đã vượt qua 35 năm lưu lạc để trở về, thắp sáng ngọn lửa bất diệt của tuổi hai mươi Việt Nam.',
    coverImage: WORK_IMAGES['nhat-ky-dang-thuy-tram'],
    historicContext: {
      timeframe: 'Giai đoạn 1968 – 1970 tại chiến trường Đức Phổ, tỉnh Quảng Ngãi.',
      historicalBackground:
        'Cuộc kháng chiến chống Mỹ cứu nước đang ở giai đoạn gay go, ác liệt nhất sau Tết Mậu Thân 1968.',
      personalCircumstance:
        'Bác sĩ Đặng Thùy Trâm phụ trách bệnh xá huyện Đức Phổ, vừa cứu chữa thương binh vừa trực tiếp cầm súng bảo vệ bệnh xá cho đến ngày hy sinh (22/6/1970).',
      impactOnWork:
        'Mang tính phi hư cấu (non-fiction) chân thực tuyệt đối của thể loại nhật ký ghi chép tại chỗ.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Những trang viết ngày 20/7/1968 & 31/12/1968: Nỗi đau thương binh và tình thương đồng đội như ruột thịt', content: 'Những ca mổ dưới hầm tối, nỗi xót xa khi không cứu được đôi mắt hay cánh tay của người chiến sĩ trẻ và tình cảm gắn bó thiêng liêng với các em thương binh.' },
        { part: 'Những trang viết năm 1969 – 1970: Khát vọng hòa bình, nỗi nhớ Hà Nội và bản lĩnh kiên cường trước cái chết', content: 'Giữa vòng vây càn quét khốc liệt của giặc, người nữ bác sĩ vẫn giữ vững niềm tin tất thắng, nhớ về mẹ và bầu trời Hà Nội với lời tự nhủ "không được cúi đầu trước giông tố".' },
      ],
      shortSummary:
        'Đoạn trích gồm những trang nhật ký tiêu biểu của bác sĩ Đặng Thùy Trâm tại bệnh xá Đức Phổ (Quảng Ngãi). Ở đó có những đêm thức trắng bên bàn mổ dưới ánh đèn pin, nỗi đau thắt ruột khi tiễn biệt những người em, người đồng đội ngã xuống, nỗi nhớ gia đình Hà Nội da diết và trên hết là lý tưởng sống cống hiến trọn vẹn tuổi xuân cho Tổ quốc.',
      emotionalArc: 'Đau đớn, xót thương đồng đội -> Nhớ nhung Hà Nội dịu dàng -> Bừng sáng ý chí kiên cường bất khuất.',
    },
    mainContentPoints: [
      'Đặc trưng thể loại Nhật ký (phi hư cấu): ghi chép theo trình tự ngày tháng thực tế, ngôi thứ nhất "tôi" vừa là người trải nghiệm vừa tự đối thoại.',
      'Hiện thực chiến tranh khốc liệt nơi bệnh xá tiền phương không một chút tô hồng.',
      'Vẻ đẹp tâm hồn Đặng Thùy Trâm: một bác sĩ giàu y đức, một người chị dịu dàng giàu lòng trắc ẩn và một đảng viên kiên trung.',
      'Chất lãng mạn Hà thành hòa quyện cùng chủ nghĩa anh hùng cách mạng.',
    ],
    analysisLevels: {
      basic:
        'Những trang nhật ký ghi lại cuộc sống chiến đấu gian khổ, công việc cứu chữa thương binh và tâm tư tình cảm trong sáng của bác sĩ Đặng Thùy Trâm tại chiến trường Quảng Ngãi.',
      detailed:
        'Sức lay động mãnh liệt của "Nhật ký Đặng Thùy Trâm" đến từ tính chân thật không khoảng cách: chị không viết để xuất bản mà viết để trò chuyện với chính lương tâm mình. Vì thế, bên cạnh lòng dũng cảm phi thường, độc giả còn bắt gặp những phút giây rất người — nỗi buồn tủi, khát khao được yêu thương và nỗi nhớ mẹ cháy lòng.',
      advanced:
        'Trong chương trình GDPT 2018 (Bài Phóng sự, Nhật ký), văn bản cho thấy sức mạnh thẩm mỹ của thể loại phi hư cấu: sự kết hợp giữa chi tiết xác thực của lịch sử và giọng điệu trữ tình tự bạch đã biến cuốn sổ tay cá nhân thành bản hùng ca nhân văn có sức cảm hóa cả những người từng ở bên kia chiến tuyến.',
    },
    characters: [
      {
        id: 'dang-thuy-tram-char',
        name: 'Người viết nhật ký – Bác sĩ Đặng Thùy Trâm',
        role: 'Chủ thể tự bạch trung tâm',
        appearance: 'Người nữ bác sĩ trẻ tuổi hai mươi mảnh mai giữa rừng già Đức Phổ.',
        situation: 'Trực tiếp điều hành bệnh xá tiền phương trong vòng vây càn quét liên miên của địch.',
        speechAndActions: 'Mổ cấp cứu thương binh suốt ngày đêm, băng rừng cõng thương binh di chuyển, viết nhật ký dưới ánh đèn dầu.',
        innerPsychology: 'Nhạy cảm, giàu tình yêu thương con người, trung thực với bản thân và kiên định lý tưởng cách mạng.',
        symbolicMeaning: 'Biểu tượng bất tử của thế hệ thanh niên trí thức Việt Nam "Xẻ dọc Trường Sơn đi cứu nước".',
      },
    ],
    artisticFeatures: {
      prominentCraft: 'Tính phi hư cấu chân thực tuyệt đối kết hợp với ngôn ngữ độc thoại nội tâm giàu chất thơ, giàu cảm xúc.',
      language: 'Trong sáng, giản dị mà tha thiết, đan xen những câu hỏi tự vấn và lời nhắn gửi người thân.',
      tone: 'Khi thủ thỉ tâm tình, khi nghẹn ngào xúc động, khi rắn rỏi hào hùng.',
      structureOrPointOfView: 'Ngôi thứ nhất ("tôi" / "Thùy"), cấu trúc theo dòng thời gian tuyến tính của các ngày ghi nhật ký.',
      imageryOrRhetoric: 'Ngọn lửa trong tim, giọt nước mắt thương binh, bầu trời Hà Nội, giông tố cuộc đời.',
      distinctiveDevices: [
        { name: 'Thủ pháp Tự bạch & Đối thoại với bản ngã', description: 'Tự gọi tên mình ("Thùy ơi...") để khích lệ ý chí vượt qua gian khổ.' },
        { name: 'Sự tương phản giữa Khốc liệt và Lãng mạn', description: 'Giữa tiếng bom nổ vẫn ngời sáng ước mơ hòa bình và tình người ấm áp.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-giông-to',
        detailName: 'Lời tự nhủ bất hủ: "Đời phải trải qua giông tố nhưng không được cúi đầu trước giông tố"',
        excerptOrContext: 'Đời phải trải qua giông tố nhưng không được cúi đầu trước giông tố (Trích dẫn lời Pavel Korchagin được chị khắc ghi trong nhật ký).',
        directMeaning: 'Phương châm sống giúp người nữ bác sĩ đứng vững trước mọi hiểm nguy cận kề cái chết.',
        symbolicMeaning: 'Tuyên ngôn tinh thần của cả một thế hệ thanh niên Việt Nam sống có lý tưởng cao đẹp.',
        thematicConnection: 'Thắp lên "ngọn lửa" nhân cách xuyên suốt cuốn nhật ký.',
      },
    ],
    literaryValues: {
      realisticValue: 'Tư liệu lịch sử vô giá phản ánh chân thực cuộc chiến đấu của quân và dân miền Nam nơi tuyến lửa.',
      humanitarianValue: 'Ca ngợi tình yêu thương con người không biên giới và khát vọng hòa bình tha thiết.',
      artisticValue: 'Kiệt tác tiêu biểu nhất của thể loại nhật ký chiến tranh Việt Nam hiện đại.',
      message: 'Hãy sống một cuộc đời có ích, giàu tình yêu thương và không bao giờ khuất phục trước nghịch cảnh.',
      modernRelevance: 'Truyền lửa lý tưởng sống đẹp, sống cống hiến cho thế hệ trẻ hôm nay.',
    },
    quick60s: {
      author: 'Bác sĩ – Liệt sĩ Đặng Thùy Trâm',
      genre: 'Nhật ký (Văn học phi hư cấu)',
      context: 'Viết từ năm 1968 đến 1970 tại chiến trường Đức Phổ, Quảng Ngãi.',
      theme: 'Cuộc sống chiến đấu tại bệnh xá tiền phương và vẻ đẹp tâm hồn người nữ bác sĩ trẻ.',
      coreFigureOrCharacter: 'Chủ thể tự bạch Đặng Thùy Trâm và các thương binh, đồng đội.',
      mainIdea: 'Tôn vinh lý tưởng cống hiến tuổi xuân vì Tổ quốc và trái tim nhân hậu cao cả.',
      keyArt: 'Tính phi hư cấu chân thực, ngôn ngữ tự bạch trữ tình, giọng điệu tha thiết.',
      goldenKeywords: ['Bệnh xá Đức Phổ', 'Đừng đốt bản thân nó đã có lửa', 'Không cúi đầu trước giông tố', 'Tuổi hai mươi', 'Phi hư cấu'],
      takeaway: 'Cuốn nhật ký mang ngọn lửa bất diệt của tình người và lý tưởng tuổi trẻ Việt Nam.',
    },
  },

  'muoi-cua-rung': {
    slug: 'muoi-cua-rung',
    title: 'Muối của rừng',
    authorId: 'nguyen-huy-thiep',
    authorName: 'Nguyễn Huy Thiệp',
    grade: 12,
    genre: 'Truyện ngắn',
    textbook: 'Ngữ văn 12 (Kết nối tri thức với cuộc sống – GDPT 2018)',
    year: '1986',
    origin: 'Sáng tác năm 1986, là một trong những truyện ngắn xuất sắc nhất của Nguyễn Huy Thiệp thời kỳ Đổi mới.',
    topic: 'Hành trình đi săn khỉ của ông Diểu giữa rừng xuân và sự thức tỉnh lương tri, nhân tính trước thiên nhiên.',
    centralTheme:
      'Qua cuộc đi săn biến thành hành trình tự lột xác về tinh thần của ông Diểu, tác phẩm đặt ra vấn đề triết học sinh thái và nhân bản sâu sắc: chỉ khi con người từ bỏ bạo lực, lòng tham và sự ngạo mạn để cúi mình cứu giúp một sinh linh yếu ớt, con người mới thực sự tìm lại phẩm giá và gặp được "hoa tử huyền" may mắn.',
    keywords: ['Nguyễn Huy Thiệp', 'Muối của rừng', 'Ông Diểu', 'Khỉ bố – Khỉ mẹ', 'Hoa tử huyền', 'Phê bình sinh thái'],
    hookIntro:
      'Đi vào rừng xuân với khẩu súng săn hai nòng tối tân và trở về trong cơn mưa xuân với tấm thân trần trụi sau khi băng bó vết thương cho con khỉ đực và thả nó về với bạn tình — một kiệt tác truyện ngắn triết luận sinh thái của Nguyễn Huy Thiệp.',
    coverImage: WORK_IMAGES['muoi-cua-rung'],
    historicContext: {
      timeframe: 'Năm 1986, mở đầu công cuộc Đổi mới toàn diện của đất nước và văn học Việt Nam.',
      historicalBackground:
        'Văn học chuyển mạnh sang khám phá chiều sâu bản thể con người, mối quan hệ giữa con người với tự nhiên và sự sám hối đạo đức.',
      personalCircumstance:
        'Đúc kết từ 10 năm Nguyễn Huy Thiệp sống và dạy học ở vùng rừng núi Tây Bắc.',
      impactOnWork:
        'Đem lại lối viết hiện đại: kết hợp hiện thực sắc lạnh với biểu tượng huyền thoại ("hoa tử huyền" – "muối của rừng").',
    },
    structureAndSummary: {
      layout: [
        { part: 'Phần 1: Ông Diểu vào rừng đi săn với khẩu súng mới và bắn trọng thương khỉ bố', content: 'Sau Tết, ông Diểu mang khẩu súng săn con trai gửi từ nước ngoài về vào rừng Hố Chuối và bắn trúng vai con khỉ đực đầu đàn.' },
        { part: 'Phần 2: Cuộc rượt đuổi biến cố: Khỉ con cướp súng lao xuống vực và sự hy sinh cứu chồng của khỉ cái', content: 'Khỉ con tha khẩu súng rơi xuống vực; ông Diểu bắt được khỉ đực nhưng bị khỉ cái kiên trì bám theo bảo vệ khiến ông xúc động động lòng trắc ẩn.' },
        { part: 'Phần 3: Ông Diểu xé quần băng vết thương, phóng sinh con khỉ và gặp hoa tử huyền trong mưa xuân', content: 'Ông Diểu cởi chiếc quần lót cuối cùng băng vết thương cho khỉ đực, thả nó về với khỉ cái rồi trần truồng trở về giữa rừng hoa tử huyền nở trắng.' },
      ],
      shortSummary:
        'Mùa xuân, ông Diểu (ngoài 60 tuổi) mang khẩu súng săn hai nòng vào rừng săn khỉ. Ông bắn trúng con khỉ bố, nhưng khỉ con lại cướp súng rơi xuống vực sâu, còn khỉ mẹ bất chấp nguy hiểm liều mình đi theo cứu chồng. Trước tình nghĩa vợ chồng cảm động của loài vật và sự phẫn nộ của thiên nhiên (núi lở, mối đùn), ông Diểu thức tỉnh lương tri: ông cởi chiếc quần cuối cùng băng bó cho con khỉ, thả nó đi và một mình trần trụi bước về giữa rừng hoa tử huyền 30 năm mới nở một lần.',
      centralConflict: 'Xung đột giữa bản năng chinh phục, sát sinh ngạo mạn của con người (khẩu súng săn) và vẻ đẹp tình nghĩa, hài hòa của tự nhiên (gia đình khỉ – rừng xuân).',
    },
    mainContentPoints: [
      'Hành trình đánh mất lần lượt các trang phục và công cụ văn minh của ông Diểu: mất súng -> mất giày, quần áo -> trần truồng trở về với bản thể nguyên sơ lương thiện.',
      'Hình ảnh gia đình nhà khỉ (khỉ bố, khỉ mẹ, khỉ con): tấm gương phản chiếu đạo lý tình nghĩa làm ông Diểu hổ thẹn và thức tỉnh.',
      'Ý nghĩa biểu tượng đa tầng của "Hoa tử huyền" và nhan đề "Muối của rừng": sự thanh lọc tâm hồn và phước lành của thiên nhiên dành cho lòng nhân ái.',
    ],
    analysisLevels: {
      basic:
        'Truyện kể về chuyến đi săn khỉ của ông Diểu. Chứng kiến tình thương yêu của đôi vợ chồng khỉ, ông Diểu hối hận, băng bó vết thương rồi thả con khỉ ra. Trên đường về, ông gặp hoa tử huyền báo hiệu điềm lành.',
      detailed:
        'Nguyễn Huy Thiệp xây dựng một nghịch lý nghệ thuật đầy ám ảnh: khi ông Diểu mặc đầy đủ quần áo ấm và cầm khẩu súng hiện đại, ông lại hành xử tàn nhẫn như kẻ sát sinh; nhưng khi ông lột bỏ chiếc quần cuối cùng để băng vết thương cho con khỉ và đi trần truồng trong mưa xuân, ông lại đạt tới vẻ đẹp nhân tính cao cả nhất.',
      advanced:
        'Dưới góc nhìn phê bình sinh thái (Ecocriticism) trong chương trình GDPT 2018, "Muối của rừng" phê phán thuyết "nhân loại trung tâm" (con người tự cho mình quyền thống trị, tàn sát muôn loài). "Muối" chính là kết tinh mặn mòi của nỗi đau, sự trả giá và lòng trắc ẩn; còn "hoa tử huyền" là phần thưởng tâm linh khi con người biết hòa giải với Mẹ Thiên nhiên.',
    },
    characters: [
      {
        id: 'ong-dieu-char',
        name: 'Ông Diểu',
        role: 'Nhân vật trung tâm – Hành trình thức tỉnh lương tri',
        appearance: 'Ngoài 60 tuổi, ban đầu ăn mặc ấm áp mang súng săn bóng nhoáng; cuối truyện trần truồng bước đi trong mưa xuân.',
        situation: 'Đi săn khỉ giải khuây ngày xuân nhưng rơi vào chuỗi biến cố kỳ lạ giữa rừng Hố Chuối.',
        speechAndActions: 'Bắn khỉ đực -> tức giận rượt đuổi -> kinh ngạc trước sự chung thủy của khỉ cái -> xé quần lót băng vết thương và phóng sinh cho khỉ.',
        innerPsychology: 'Chuyển biến phức tạp từ kiêu ngạo, tham lam, cay cú sang hổ thẹn, xót thương và thanh thản.',
        symbolicMeaning: 'Đại diện cho hành trình con người rũ bỏ cái ác và sự tha hóa để trở về với bản thiện nguyên sơ.',
      },
    ],
    artisticFeatures: {
      prominentCraft: 'Kết hợp bút pháp tả thực sắc nét với hệ thống biểu tượng triết học – huyền thoại đa nghĩa.',
      language: 'Ngắn gọn, cô đọng, giàu nhịp điệu nội tâm và triết lý ngầm ẩn.',
      tone: 'Lạnh lùng, khách quan ở phần đầu chuyển sang ấm áp, trữ tình và huyền diệu ở phần kết.',
      structureOrPointOfView: 'Ngôi kể thứ ba gắn liền với điểm nhìn và dòng ý thức của nhân vật ông Diểu.',
      imageryOrRhetoric: 'Khẩu súng hai nòng, vực sâu Hố Chuối, chiếc quần lót băng vết thương, rừng hoa tử huyền trắng muốt như muối.',
      distinctiveDevices: [
        { name: 'Thủ pháp "Lột bỏ" (Stripping motif)', description: 'Tước bỏ dần vỏ bọc vật chất để làm lộ ra hạt nhân nhân tính chân thật.' },
        { name: 'Biểu tượng Sinh thái – Huyền thoại', description: 'Hình ảnh Hoa tử huyền (Muối của rừng) nâng truyện ngắn lên tầm ngụ ngôn nhân loại.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-hoa-tu-huyen',
        detailName: 'Chi tiết "Hoa tử huyền nở trắng như muối" ở cuối tác phẩm',
        excerptOrContext: 'Loài hoa tử huyền cứ ba chục năm mới nở một lần. Người nào gặp hoa tử huyền sẽ gặp may mắn. Hoa này màu trắng, vị mặn, bé bằng đầu tăm, người ta vẫn gọi hoa này là muối của rừng.',
        directMeaning: 'Loài hoa quý hiếm trong truyền thuyết rừng già nở rộ đón bước chân ông Diểu trở về.',
        symbolicMeaning: 'Sự ban phước của tự nhiên dành cho con người biết thức tỉnh lòng trắc ẩn và hướng thiện.',
        thematicConnection: 'Giải mã trọn vẹn nhan đề "Muối của rừng" và thông điệp sinh thái của tác phẩm.',
      },
    ],
    literaryValues: {
      ideologicalValue: 'Đặt ra vấn đề bức thiết về đạo đức sinh thái và mối quan hệ bình đẳng, nhân ái giữa con người với tự nhiên.',
      artisticValue: 'Một trong những truyện ngắn hiện đại xuất sắc nhất của văn học Việt Nam thời kỳ Đổi mới.',
      message: 'Chỉ khi biết thương xót muôn loài và sống hài hòa với thiên nhiên, con người mới giữ được phần "người" cao quý nhất.',
      modernRelevance: 'Lời cảnh tỉnh sâu sắc trước khủng hoảng môi trường và sự suy thoái đạo đức sinh thái đương đại.',
    },
    quick60s: {
      author: 'Nguyễn Huy Thiệp',
      genre: 'Truyện ngắn hiện đại (Triết luận – Sinh thái)',
      context: 'Sáng tác năm 1986, mở đầu văn học thời kỳ Đổi mới.',
      theme: 'Cuộc đi săn khỉ của ông Diểu và sự thức tỉnh lương tri, lòng trắc ẩn trước tự nhiên.',
      coreFigureOrCharacter: 'Ông Diểu và gia đình khỉ (khỉ bố, khỉ mẹ, khỉ con).',
      mainIdea: 'Từ bỏ bạo lực để cứu giúp sinh linh yếu ớt chính là con đường tìm lại nhân tính và hạnh phúc.',
      keyArt: 'Cốt truyện giàu kịch tính tâm lý, thủ pháp lột bỏ, biểu tượng hoa tử huyền.',
      goldenKeywords: ['Ông Diểu', 'Khẩu súng săn', 'Tình nghĩa vợ chồng khỉ', 'Trần truồng băng vết thương', 'Hoa tử huyền – Muối của rừng'],
      takeaway: 'Lòng trắc ẩn và sự hòa giải với thiên nhiên chính là "muối của rừng" giữ cho tâm hồn con người không bị mục ruỗng.',
    },
  },

  'xuan-toc-do-cuu-quoc': {
    slug: 'xuan-toc-do-cuu-quoc',
    title: 'Xuân Tóc Đỏ cứu quốc (Trích Số đỏ)',
    authorId: 'vu-trong-phung',
    authorName: 'Vũ Trọng Phụng',
    grade: 12,
    genre: 'Truyện ngắn',
    textbook: 'Ngữ văn 12 (Kết nối tri thức với cuộc sống – GDPT 2018)',
    year: '1936',
    origin: 'Trích Chương XX (chương cuối cùng) trong tiểu thuyết trào phúng kiệt tác "Số đỏ" của Vũ Trọng Phụng.',
    topic: 'Màn kịch chính trị – thể thao lố bịch biến kẻ lưu manh Xuân Tóc Đỏ thành "vĩ nhân cứu quốc" của xã hội thượng lưu tư sản.',
    centralTheme:
      'Phơi bày và giễu nhại sâu cay bản chất bịp bợm, lố lăng, giả dối của xã hội tư sản thành thị "Âu hóa" và chính quyền thực dân phong kiến qua màn kịch Xuân Tóc Đỏ cố tình thua quần vợt để "cứu quốc".',
    keywords: ['Vũ Trọng Phụng', 'Số đỏ', 'Xuân Tóc Đỏ cứu quốc', 'Tiếng cười trào phúng', 'Quần vợt Xiêm – Việt', 'Bắc Đẩu bội tinh'],
    hookIntro:
      'Một thằng nhặt banh quần vợt vô học bỗng chốc bước lên bục diễn thuyết mắng đám đông là "Quần chúng nông nổi quá!" rồi được tặng huân chương Bắc Đẩu bội tinh vì... chịu thua một ván tennis — đỉnh cao chói lọi nhất của nghệ thuật tiểu thuyết trào phúng Việt Nam.',
    coverImage: WORK_IMAGES['xuan-toc-do-cuu-quoc'],
    historicContext: {
      timeframe: 'Năm 1936, đăng trên Hà Nội báo trong thời kỳ Mặt trận Dân chủ Đông Dương.',
      historicalBackground:
        'Phong trào "Âu hóa", "vui vẻ trẻ trung", thể thao cải lương do thực dân Pháp cổ xúy đang nở rộ nhằm đánh lạc hướng thanh niên khỏi đấu tranh cách mạng.',
      personalCircumstance:
        'Vũ Trọng Phụng dùng ngòi bút trào phúng sắc như dao mổ để lột trần tấn trò đời của giới thượng lưu Hà thành.',
      impactOnWork:
        'Tạo nên nhân vật điển hình bất hủ Xuân Tóc Đỏ và những danh ngôn trào phúng vượt thời đại.',
    },
    structureAndSummary: {
      layout: [
        { part: 'Phần 1: Bối cảnh sân quần Rollandes Varreau và trận đấu quần vợt ngoại giao Việt – Xiêm', content: 'Đức vua nước Xiêm sang thăm Hà Nội; Xuân Tóc Đỏ sau khi đánh bại quán quân的海 và quán quân Xiêm lại tiếp tục áp đảo trong trận chung kết.' },
        { part: 'Phần 2: Nguy cơ chiến tranh Xiêm – Việt và mệnh lệnh mật buộc Xuân phải thua', content: 'Vua Xiêm tức giận dọa nổ ra chiến tranh nếu cầu thủ Xiêm thua; quan Tổng đốc phải cầu khẩn Xuân Tóc Đỏ nhường điểm cuối để "cứu vãn hòa bình".' },
        { part: 'Phần 3: Bài diễn thuyết "cứu quốc" lố bịch của Xuân Tóc Đỏ và sự tung hô của đám đông', content: 'Xuân cố tình đánh bóng ra ngoài để thua, rồi trèo lên nóc ô tô hùng hồn diễn thuyết tự nhận mình hy sinh danh dự vì Tổ quốc và được tôn vinh là bậc vĩ nhân.' },
      ],
      shortSummary:
        'Trong trận chung kết quần vợt tiếp đón vua Xiêm tại Hà Nội, Xuân Tóc Đỏ đang thắng thế trước quán quân Xiêm khiến vua Xiêm nổi giận đe dọa cắt đứt ngoại giao và gây chiến tranh. Hoảng sợ, các quan chức Pháp – Việt mật lệnh cho Xuân phải giả thua. Xuân Tóc Đỏ lập tức đánh bóng ra ngoài chịu bại trận, rồi đứng trên mui xe hơi diễn thuyết mắng công chúng không hiểu "nỗi lòng hy sinh vì Tổ quốc" của hắn. Đám đông quay sang vỗ tay sùng bái Xuân như một anh hùng cứu quốc.',
      centralConflict: 'Mâu thuẫn trào phúng giữa cái vỏ bọc hào nhoáng, trang trọng ("ngoại giao quốc tế", "anh hùng cứu quốc") và cái ruột rỗng tuếch, đê tiện, bịp bợm.',
    },
    mainContentPoints: [
      'Tình huống trào phúng bậc thầy: vận mệnh hòa bình hay chiến tranh giữa hai quốc gia lại phụ thuộc vào... một quả bóng tennis của Xuân Tóc Đỏ.',
      'Chân dung Xuân Tóc Đỏ ở đỉnh cao danh vọng: sự kết hợp quái đản giữa bản chất lưu manh vỉa hè và ngôn từ chính trị học mót.',
      'Bài diễn thuyết của Xuân trên mui xe hơi: đỉnh điểm của sự ngược đời khi kẻ bịp bợm dạy đời đám đông trí thức, thượng lưu.',
      'Nghệ thuật phóng đại, cường điệu, mỉa mai và đối thoại hài hước của Vũ Trọng Phụng.',
    ],
    analysisLevels: {
      basic:
        'Đoạn trích kể lại việc Xuân Tóc Đỏ cố tình thua trong trận đấu quần vợt với quán quân nước Xiêm theo lệnh của quan trên để tránh chiến tranh, sau đó diễn thuyết biến mình thành người hùng cứu nước. Qua đó tác giả châm biếm xã hội thượng lưu giả dối.',
      detailed:
        'Tiếng cười trong "Xuân Tóc Đỏ cứu quốc" bật ra từ hàng loạt nghịch lý: vua một nước đi xem tennis mang theo... trái phá; quan chức ngoại giao cầu cứu một thằng ma cà bông; thất bại thể thao biến thành chiến thắng chính trị; và đám đông vừa la ó đòi đả đảo lập tức chuyển sang vỗ tay hoan hô chỉ sau vài câu ba hoa.',
      advanced:
        'Trong chương trình GDPT 2018 (Bài Tiểu thuyết hiện đại và Tiếng cười trào phúng), đoạn trích minh chứng cho bút pháp "cường điệu hóa đến mức phi lý để làm bật ra cái có lý của bản chất xã hội": ở một xã hội mà mọi giá trị đảo lộn ("chó đểu" cả), thì một kẻ vô học nhưng trơ trẽn như Xuân Tóc Đỏ tất yếu sẽ trở thành vĩ nhân.',
    },
    characters: [
      {
        id: 'xuan-toc-do-char',
        name: 'Xuân Tóc Đỏ',
        role: 'Nhân vật điển hình trào phúng trung tâm',
        appearance: 'Kẻ hạ lưu nhặt banh quần vợt khoác bộ đồ cầu thủ quốc gia và huân chương lấp lánh.',
        situation: 'Thi đấu trận chung kết quần vợt trước mặt vua Xiêm và Toàn quyền Đông Dương.',
        speechAndActions: 'Gạt điểm cuối ra ngoài để chịu thua; nhảy lên nóc ô tô vẫy tay diễn thuyết: "Hỡi công chúng! Mi chưa hiểu rõ những lẽ cực kỳ to tát nó khiến ta đành phải nhường...".',
        innerPsychology: 'Láu cá, cơ hội, trơ trẽn tuyệt đối nhưng nắm bắt cực nhạy tâm lý đám đông và giới thượng lưu.',
        symbolicMeaning: 'Biểu tượng bất hủ cho sự lên ngôi của cái giả dối, bịp bợm trong một xã hội suy đồi.',
      },
    ],
    artisticFeatures: {
      prominentCraft: 'Nghệ thuật tạo dựng tình huống trào phúng nghịch dị, phóng đại kết hợp với ngôn ngữ nhại (parody) sắc sảo.',
      language: 'Ngôn ngữ đa giọng điệu, nhại giọng văn ngoại giao, chính trị, diễn thuyết đầy hài hước.',
      tone: 'Châm biếm sâu cay, mỉa mai giễu nhại từ đầu đến cuối.',
      structureOrPointOfView: 'Ngôi kể thứ ba toàn tri với giọng điệu "khen đểu", giả trang nghiêm để hạ bệ đối tượng.',
      imageryOrRhetoric: 'Bàn cờ quốc tế trên sân quần vợt, bài diễn thuyết trên mui xe hơi, huân chương Bắc Đẩu bội tinh.',
      distinctiveDevices: [
        { name: 'Thủ pháp Phóng đại – Cường điệu', description: 'Đẩy một trận tennis giải trí thành nguy cơ đại chiến quốc tế.' },
        { name: 'Nghệ thuật Nhại ngôn ngữ (Parody)', description: 'Để kẻ vô học Xuân Tóc Đỏ nói giọng điệu vĩ nhân lịch sử ("Mi chưa hiểu rõ...").' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-dien-thuyet',
        detailName: 'Màn diễn thuyết "cứu quốc" của Xuân Tóc Đỏ trên mui xe hơi',
        excerptOrContext: 'Hỡi công chúng! Mi chưa hiểu rõ những lẽ cực kỳ to tát nó khiến ta đành phải nhường cho nhà vô địch Xiêm La!... Quần chúng nông nổi quá!',
        directMeaning: 'Xuân Tóc Đỏ lật ngược thế cờ từ kẻ thua cuộc bị la ó thành bậc đại nhân đại nghĩa.',
        symbolicMeaning: 'Sự mù quáng của đám đông và sự lừa bịp trơ tráo của nền chính trị thực dân – tư sản.',
        thematicConnection: 'Đỉnh cao châm biếm khép lại trọn vẹn tấn hài kịch "Số đỏ".',
      },
    ],
    literaryValues: {
      realisticValue: 'Bức tranh biếm họa chân xác nhất về xã hội tư sản thành thị Việt Nam những năm 1930 – 1945.',
      humanitarianValue: 'Thức tỉnh con người tránh xa thói hư danh, giả dối và sự cuồng tín đám đông.',
      artisticValue: 'Đỉnh cao số một của tiểu thuyết trào phúng Việt Nam thế kỷ XX.',
      message: 'Khi xã hội tôn thờ hình thức hào nhoáng và sự dối trá, những kẻ cơ hội bịp bợm sẽ dễ dàng thao túng đám đông.',
      modernRelevance: 'Vẫn giữ nguyên tính thời sự sắc bén trước các hiện tượng "thần tượng ảo" và truyền thông đánh bóng tên tuổi hôm nay.',
    },
    quick60s: {
      author: 'Vũ Trọng Phụng',
      genre: 'Tiểu thuyết hiện thực trào phúng (Trích Chương XX)',
      context: 'Xuất bản năm 1936, chương kết của tiểu thuyết "Số đỏ".',
      theme: 'Màn kịch Xuân Tóc Đỏ giả thua quần vợt để trở thành "anh hùng cứu quốc".',
      coreFigureOrCharacter: 'Xuân Tóc Đỏ và đám đông thượng lưu Pháp – Việt – Xiêm.',
      mainIdea: 'Vạch trần bản chất bịp bợm, lố lăng của xã hội tư sản "Âu hóa" và trò hề chính trị thực dân.',
      keyArt: 'Tình huống trào phúng nghịch lý, phóng đại, nhại ngôn ngữ diễn thuyết.',
      goldenKeywords: ['Xuân Tóc Đỏ', 'Số đỏ', 'Trận quần vợt Việt – Xiêm', 'Quần chúng nông nổi quá', 'Bắc Đẩu bội tinh'],
      takeaway: 'Tiếng cười châm biếm bất hủ lột trần tấn trò đời của một xã hội "chó đểu".',
    },
  },

  'cam-hoai-thu-hung': {
    slug: 'cam-hoai-thu-hung',
    title: 'Cảm hoài (Đặng Dung) & Thu hứng (Đỗ Phủ)',
    authorId: 'dang-dung-do-phu',
    authorName: 'Đặng Dung & Đỗ Phủ',
    grade: 12,
    genre: 'Thơ',
    textbook: 'Ngữ văn 12 (Kết nối tri thức với cuộc sống – GDPT 2018)',
    year: 'Thế kỷ VIII & Thế kỷ XV',
    origin: 'Chùm hai tuyệt tác thơ Đường luật cổ điển trong Bài 4 (Yếu tố cổ điển và lãng mạn trong thơ) – SGK Ngữ văn 12 mới.',
    topic: 'Nỗi lòng bi tráng của người anh hùng lỡ vận (Đặng Dung) và nỗi sầu quê hương, thời thế của bậc Thi Thánh (Đỗ Phủ).',
    centralTheme:
      'Qua quy범 chặt chẽ của thể thơ thất ngôn bát cú Đường luật, hai thi phẩm khắc họa vẻ đẹp tâm hồn cao cả của người quân tử thời trung đại: dù rơi vào cảnh ngộ bi kịch ("Quốc thù vị báo đầu tiên bạch" hay "Cô chu nhất hệ cố viên tâm"), trái tim vẫn rực cháy chí lớn giúp đời và tình yêu quê hương đất nước.',
    keywords: ['Đặng Dung', 'Cảm hoài', 'Đỗ Phủ', 'Thu hứng', 'Mài gươm dưới trăng', 'Khóm cúc tuôn thêm dòng lệ cũ'],
    hookIntro:
      'Một người tướng già bao phen mài gươm Long Tuyền dưới bóng trăng khi thù nước chưa trả; một nhà thơ lưu lạc nơi đất khách nhìn khóm cúc nở hoa mà tuôn rơi dòng lệ nhớ cố hương — hai đỉnh cao bất hủ của thơ Đường luật Đông Á.',
    coverImage: WORK_IMAGES['cam-hoai-thu-hung'],
    historicContext: {
      timeframe: '"Thu hứng" sáng tác năm 766 (đời Đường); "Cảm hoài" sáng tác đầu thế kỷ XV (thời Hậu Trần chống quân Minh).',
      historicalBackground:
        'Đỗ Phủ viết "Thu hứng" tại thành Bạch Đế khi đất nước Trung Hoa điêu tàn sau loạn An – Sử; Đặng Dung viết "Cảm hoài" khi cuộc khởi nghĩa Hậu Trần chống giặc Minh rơi vào thế hiểm nghèo.',
      personalCircumstance:
        'Cả hai tác giả đều mang hoài bão lớn lao nhưng gặp thời buổi loạn lạc, gửi trọn tâm huyết vào tám câu thơ Đường luật.',
      impactOnWork:
        'Tạo nên âm hưởng trầm hùng, bi tráng và chiều sâu "ý tại ngôn ngoại".',
    },
    structureAndSummary: {
      layout: [
        { part: 'Tuyệt tác "Cảm hoài" (Nỗi lòng) – Danh tướng Đặng Dung', content: 'Việc đời ngổn ngang mà tuổi già đã tới; xoay trời chuyển đất từng có lúc dễ dàng nhưng nay thời vận không thuận; chỉ còn biết bao phen mài gươm Long Tuyền dưới bóng trăng.' },
        { part: 'Tuyệt tác "Thu hứng" (Cảm xúc mùa thu – Bài 1) – Thi Thánh Đỗ Phủ', content: 'Bức tranh thu hiu hắt, dữ dội nơi núi Vu kẽm Vu và nỗi lòng người tha hương cột chặt vào con thuyền cô độc, nhìn khóm cúc hai lần nở hoa tuôn dòng lệ cũ.' },
      ],
      shortSummary:
        'Chùm hai bài thơ thất ngôn bát cú Đường luật kinh điển trong chương trình Ngữ văn 12 mới: "Cảm hoài" của Đặng Dung khắc họa bức tượng đài người anh hùng vệ quốc tuy thất thế, đầu đã bạc nhưng vẫn mài gươm dưới trăng không hề khuất phục; còn "Thu hứng" của Đỗ Phủ mở ra bức tranh thu tráng lệ mà蕭 điều nơi đất khách, gửi gắm nỗi nhớ quê hương và niềm ưu thời mẫn thế sâu thẳm.',
      emotionalArc: 'Trầm uất trước thời thế -> Hùng tráng, kiên gan dưới ánh trăng -> Thổn thức nỗi sầu cố hương.',
    },
    mainContentPoints: [
      'Vẻ đẹp bi tráng của hình tượng người anh hùng Đặng Dung trong hai câu kết bất hủ: "Quốc thù vị báo đầu tiên bạch / Kỷ độ Long Tuyền đới nguyệt ma".',
      'Bút pháp tả cảnh ngụ tình bậc thầy của Đỗ Phủ trong "Thu hứng": cảnh thu hùng vĩ (sóng vọt lưng trời, mây sa mặt đất) đối lập với thân phận nhỏ bé ("Cô chu nhất hệ cố viên tâm").',
      'Phong cách cổ điển của thơ Đường luật: tính quy phạm chặt chẽ về niêm, luật, đối và sự hòa quyện giữa cái Tôi cá nhân với vận mệnh đất nước.',
    ],
    analysisLevels: {
      basic:
        'Bài thơ "Cảm hoài" thể hiện nỗi lòng đau đáu vì thù nước chưa trả được của tướng quân Đặng Dung; còn "Thu hứng" diễn tả nỗi buồn xa quê và lo lắng cho đất nước của nhà thơ Đỗ Phủ vào mùa thu.',
      detailed:
        'Ở "Cảm hoài", bi kịch của Đặng Dung là bi kịch "hữu tâm vô thời" (có chí lớn phù nguy nhưng không gặp thời vận), song câu kết "mài gươm dưới trăng" đã biến bi kịch thành vẻ đẹp thẩm mỹ kỳ vĩ. Ở "Thu hứng", câu thơ "Tùng cúc lưỡng khai tha nhật lệ / Cô chu nhất hệ cố viên tâm" đạt tới độ hàm súc tuyệt đối: khóm cúc nở hoa hay chính là dòng nước mắt nhớ quê hai mùa thu liên tiếp tuôn trào.',
      advanced:
        'Trong chương trình GDPT 2018 (Bài Phong cách cổ điển và lãng mạn), việc đặt "Cảm hoài" và "Thu hứng" cạnh nhau giúp học sinh nhận diện trọn vẹn mỹ học Cổ điển phương Đông: sự tiết chế cảm xúc trong khuôn khổ luật thi đối xứng để tạo nên sức nén tâm tưởng ngàn cân ("ý tại ngôn ngoại").',
    },
    poetryAnalysis: [
      {
        id: 'ch-1',
        stanzaNumber: 1,
        title: 'Tuyệt tác 1: Cảm hoài (Nỗi lòng) – Đặng Dung',
        excerpt:
          'Thế sự du du nại lão hà,\nVô cùng thiên địa nhập hàm ca.\nThời lai đồ điếu thành công dị,\nVận khứ anh hùng ẩm hận đa.\nTrí chúa hữu hoài phù địa trục,\nTẩy binh vô lộ vãn thiên hà.\nQuốc thù vị báo đầu tiên bạch,\nKỷ độ Long Tuyền đới nguyệt ma.',
        contentSummary: 'Nỗi bi phẫn của người anh hùng trước thời vận nghiệt ngã và hình ảnh tráng lệ mài gươm báu dưới ánh trăng khi tóc đã bạc.',
        poeticImages: [
          { image: 'Phù địa trục (Nâng trục đất) & Vãn thiên hà (Kéo sông Ngân rửa giáp binh)', meaning: 'Hai hình ảnh kỳ vĩ mang tầm vóc vũ trụ thể hiện chí khí xoay chuyển càn khôn của bậc hào kiệt.' },
          { image: 'Kỷ độ Long Tuyền đới nguyệt ma (Bao phen mài gươm Long Tuyền dưới bóng trăng)', meaning: 'Tượng đài thẩm mỹ bi tráng bậc nhất thơ ca trung đại Việt Nam: người anh hùng tóc bạc không đầu hàng số phận.' },
        ],
        keyWords: [
          { word: 'Ẩm hận đa (Nuốt hận nhiều)', nuance: 'Nỗi đau uất nghẹn nén chặt vào trong lòng của bậc anh hùng lỡ vận.' },
        ],
        rhetoricalDevices: [
          { device: 'Đối lập (Thời lai >< Vận khứ)', effect: 'Làm nổi bật vai trò nghiệt ngã của hoàn cảnh lịch sử đối với tài năng cá nhân.' },
        ],
        roleInWork: 'Khẳng định khí phách quật cường và lòng yêu nước bất diệt của dân tộc Đại Việt.',
      },
      {
        id: 'th-1',
        stanzaNumber: 2,
        title: 'Tuyệt tác 2: Thu hứng (Cảm xúc mùa thu) – Đỗ Phủ',
        excerpt:
          'Ngọc lộ điêu thương phong thụ lâm,\nVu sơn, Vu giáp khí tiêu sầm.\nGiang gian ba lãng kiêm thiên dũng,\nTái thượng phong vân tiếp địa âm.\nTùng cúc lưỡng khai tha nhật lệ,\nCô chu nhất hệ cố viên tâm.\nHàn y xứ xứ thôi đao xích,\nBạch Đế thành cao cấp mộ chầm.',
        contentSummary: 'Khung cảnh mùa thu dữ dội,萧 điều nơi núi Vu và nỗi nhớ quê hương thắt lòng của người lữ thứ.',
        poeticImages: [
          { image: 'Tùng cúc lưỡng khai tha nhật lệ / Cô chu nhất hệ cố viên tâm', meaning: 'Khóm cúc hai lần nở hoa làm tuôn rơi nước mắt ngày trước; con thuyền lẻ loi buộc chặt mối tình nhà.' },
        ],
        keyWords: [
          { word: 'Hệ (buộc chặt)', nuance: 'Dây buộc thuyền cũng chính là sợi dây buộc chặt trái tim nhà thơ với quê hương.' },
        ],
        rhetoricalDevices: [
          { device: 'Tả cảnh ngụ tình & Đối chỉnh', effect: 'Từ cảnh thu vĩ mô (4 câu đầu) thu hẹp vào cảnh tình vi mô (4 câu cuối).' },
        ],
        roleInWork: 'Biểu tượng mẫu mực của phong cách cổ điển Đường thi.',
      },
    ],
    artisticFeatures: {
      prominentCraft: 'Thể thơ thất ngôn bát cú Đường luật đạt đến độ điêu luyện mẫu mực về đối仗, dùng điển cố và xây dựng hình tượng kỳ vĩ, hàm súc.',
      language: 'Hán học cổ điển cô đọng, giàu sức gợi, mỗi chữ đều mang sức nặng tư tưởng.',
      tone: 'Trầm hùng, bi tráng (Cảm hoài) và trầm uất, thiết tha (Thu hứng).',
      structureOrPointOfView: 'Kết cấu Đề – Thực – Luận – Kết chặt chẽ, dồn nén cảm xúc vào hai câu kết.',
      imageryOrRhetoric: 'Mài gươm Long Tuyền dưới trăng, kéo sông Ngân Hà, rừng phong sương trắng, khóm cúc – con thuyền cô độc.',
      distinctiveDevices: [
        { name: 'Nghệ thuật Đối xứng Đường luật', description: 'Hai cặp câu Thực (3 – 4) và Luận (5 – 6) đối nhau từng chữ, từng ý.' },
        { name: 'Bút pháp "Ý tại ngôn ngoại"', description: 'Lời thơ khép lại nhưng dư âm chí khí và nỗi sầu quê hương còn ngân vang mãi.' },
      ],
    },
    keyArtisticDetails: [
      {
        id: 'chi-tiet-mai-guom-duoi-trang',
        detailName: 'Hình tượng "Quốc thù vị báo đầu tiên bạch / Kỷ độ Long Tuyền đới nguyệt ma"',
        excerptOrContext: 'Thù nước chưa trả mà đầu đã bạc / Bao phen mài gươm Long Tuyền dưới bóng trăng.',
        directMeaning: 'Người tướng già đêm đêm vẫn mài thanh gươm báu dưới ánh trăng chờ cơ hội giết giặc.',
        symbolicMeaning: 'Sự hòa quyện tuyệt mỹ giữa chất thép anh hùng (gươm Long Tuyền) và chất thơ lãng mạn (ánh trăng).',
        thematicConnection: 'Kết tinh vẻ đẹp phong cách cổ điển và bi tráng của văn học trung đại.',
      },
    ],
    literaryValues: {
      ideologicalValue: 'Tôn vinh chí khí bất khuất vì nước và tình yêu quê hương tha thiết của bậc trượng phu.',
      artisticValue: 'Hai viên ngọc quý bậc nhất của thi ca Đường luật phương Đông.',
      message: 'Dù thời cuộc xoay vần hay rơi vào nghịch cảnh, con người chân chính vẫn giữ trọn chí lớn và tình quê.',
      modernRelevance: 'Bồi đắp bản lĩnh kiên định trước thử thách và tình cảm gắn bó với cội nguồn.',
    },
    quick60s: {
      author: 'Đặng Dung (Việt Nam) & Đỗ Phủ (Trung Quốc)',
      genre: 'Thơ thất ngôn bát cú Đường luật',
      context: 'Thế kỷ VIII (Đỗ Phủ) & Đầu thế kỷ XV (Đặng Dung).',
      theme: 'Nỗi lòng bi tráng của người anh hùng lỡ vận và nỗi nhớ quê hương nơi đất khách.',
      coreFigureOrCharacter: 'Người tướng già mài gươm dưới trăng và người lữ khách nhìn hoa cúc thu.',
      mainIdea: 'Khẳng định chí khí yêu nước bất khuất và tâm sự ưu thời mẫn thế sâu nặng.',
      keyArt: 'Phong cách cổ điển quy phạm, nghệ thuật đối xứng, điển cố kỳ vĩ, tả cảnh ngụ tình.',
      goldenKeywords: ['Cảm hoài', 'Thu hứng', 'Mài gươm dưới trăng', 'Đầu tiên bạch', 'Khóm cúc – Con thuyền cô độc'],
      takeaway: 'Hai tuyệt phẩm Đường luật kết tinh vẻ đẹp bi tráng và chiều sâu tâm hồn phương Đông.',
    },
  },
};





