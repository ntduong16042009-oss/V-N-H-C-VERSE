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
};


