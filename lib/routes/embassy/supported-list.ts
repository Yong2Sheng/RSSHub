export default {
    ca: {
        country: 'ca',
        countryCN: '加拿大',
        link: 'http://ca.china-embassy.org/chn/zytz/',
        list: 'div[class=nav_title_list] > ul a',
        title: '#News_Body_Title',
        description: '#News_Body_Txt_A',
        pubDate: '#News_Body_Time',
        consulates: {
            montreal: {
                cityCN: '蒙特利尔',
                link: 'http://montreal.chineseconsulate.org/chn/zytz/',
                list: '#docMore > tbody > tr > td:nth-child(3) > div[class=Text_Center] > ul a',
                title: '#News_Body_Title',
                description: '#News_Body_Txt_A',
                pubDate: '#News_Body_Time',
            },
        },
    },
    de: {
        country: 'de',
        countryCN: '德国',
        link: 'http://de.chineseembassy.org/chn/lsfw/jqtz/',
        list: '#docMore a',
        title: '#article > table > tbody > tr:nth-child(2) b',
        description: '#article > table > tbody > tr:nth-child(10) > td > div',
        pubDate: '#article > table > tbody > tr:nth-child(6) > td',
        consulates: {
            munich: {
                cityCN: '慕尼黑',
                link: 'http://munich.chineseconsulate.org/chn/jqtz/',
                list: '#docMore > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody a',
                title: '#article > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td',
                description: '#article > tbody > tr:nth-child(2) > td > div',
                pubDate: '#article > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(4) > td',
            },
        },
    },
    fr: {
        country: 'fr',
        countryCN: '法国',
        link: 'http://fr.chineseembassy.org/chn/zgzfg/zgsg/lsb/',
        list: '#docMore > tbody > tr > td > table > tbody a',
        title: '#article > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td',
        description: '#article > tbody > tr:nth-child(3) > td',
        pubDate: '#article > tbody > tr:nth-child(2) > td',
        consulates: {
            marseille: {
                cityCN: '马赛',
                link: 'http://marseille.china-consulate.org/chn/lsfwgg/',
                list: '.newslist a',
                title: '#News_Body_Title',
                description: '#News_Body_Txt_A',
                pubDate: '#News_Body_Time',
            },
            strasbourg: {
                cityCN: '斯特拉斯堡',
                link: 'http://strasbourg.china-consulate.org/chn/lsfw/',
                list: '#docMore > tbody a',
                title: '#article > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td',
                description: '#article > tbody > tr:nth-child(3) > td',
                pubDate: '#article > tbody > tr:nth-child(2) > td',
            },
            lyon: {
                cityCN: '里昂',
                link: 'http://lyon.china-consulate.org/chn/tztg/',
                list: '#manytitle > tbody > tr > td > table > tbody > tr:nth-child(1) > td > table > tbody a',
                title: '#article > table:nth-child(1) > tbody > tr:nth-child(1) > td > font',
                description: '#article > table:nth-child(2) > tbody > tr:nth-child(2) > td > div > div',
                pubDate: '#article > table:nth-child(1) > tbody > tr:nth-child(4) > td > font',
            },
        },
    },
    jp: {
        country: 'jp',
        countryCN: '日本',
        link: 'http://jp.china-embassy.org/chn/lsfws/LSB/',
        list: '#docMore > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > table:nth-child(3) a',
        title: '#article > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td',
        description: '#article > tbody > tr:nth-child(2) > td',
        pubDate: '#article > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(4) > td',
        consulates: {
            nagasaki: {
                cityCN: '长崎',
                link: 'http://nagasaki.china-consulate.org/chn/tzgg/',
                list: '.newsList a',
                title: '#News_Body_Title',
                description: '#News_Body_Txt_A',
                pubDate: '#News_Body_Time',
            },
            osaka: {
                cityCN: '大阪',
                link: 'http://osaka.china-consulate.org/chn/tzgg/',
                list: '#liebiao > tbody > tr > td:nth-child(1) > table:nth-child(3) > tbody a',
                title: '#article > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td',
                description: '#article > tbody > tr:nth-child(3) > td',
                pubDate: '#article > tbody > tr:nth-child(2) > td',
            },
            fukuoka: {
                cityCN: '福冈',
                link: 'http://fukuoka.china-consulate.org/chn/tztg/',
                list: '#docMore > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > table:nth-child(2) > tbody a',
                title: '#article > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td',
                description: '#article > tbody > tr:nth-child(3) > td',
                pubDate: '#article > tbody > tr:nth-child(2) > td',
            },
            nagoya: {
                cityCN: '名古屋',
                link: 'http://nagoya.chineseconsulate.org/chn/gzgg/',
                list: '#docMore > div.mbox.fl > div > div.cbox_ul > ul a',
                title: '#News_Body_Title',
                description: '#News_Body_Txt_A',
                pubDate: '#News_Body_Time',
            },
            sapporo: {
                cityCN: '札幌',
                link: 'http://sapporo.china-consulate.org/chn/tzbg/',
                list: '#docMore > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > table:nth-child(3) > tbody > tr:nth-child(1) a',
                title: '#article > tbody > tr > td > table:nth-child(1) > tbody > tr:nth-child(1) > td',
                description: '#article > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(1) > td',
                pubDate: '#article > tbody > tr > td > table:nth-child(1) > tbody > tr:nth-child(4) > td',
            },
            niigata: {
                cityCN: '新潟',
                link: 'http://niigata.china-consulate.org/chn/lsbh/tztg/',
                list: '#docMore a',
                title: '#article > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(4) > td',
                description: '#article > tbody > tr:nth-child(2) > td',
                pubDate: '#article > tbody > tr > td > table:nth-child(1) > tbody > tr:nth-child(4) > td',
            },
        },
    },
    kr: {
        country: 'kr',
        countryCN: '韩国',
        link: 'http://kr.china-embassy.org/chn/lsqz/ls_tz/',
        list: '#TRS a',
        title: '#article > table > tbody > tr:nth-child(1) > td > font > b',
        description: '#article > table > tbody > tr:nth-child(3) > td > div > div:nth-child(2)',
        pubDate: '#article > table > tbody > tr:nth-child(1) > td > font > b',
        consulates: {
            busan: {
                cityCN: '釜山',
                link: 'http://busan.china-consulate.org/chn/lsfw/tzgg101/',
                list: 'body > table:nth-child(6) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(3) > td > table > tbody a',
                title: '#article > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td',
                description: '#article > tbody > tr:nth-child(3) > td',
                pubDate: '#article > tbody > tr:nth-child(2) > td',
            },
            jeju: {
                cityCN: '济州',
                link: 'http://jeju.chineseconsulate.org/chn/ggl/',
                list: '#docMore > tbody > tr > td:nth-child(3) > div > ul:nth-child(5) a',
                title: '#News_Body_Title',
                description: '#News_Body_Txt_A',
                pubDate: '#News_Body_Time',
            },
            gwangju: {
                cityCN: '光州',
                link: 'http://gwangju.china-consulate.org/chn/lbxx/ggtz/',
                list: '#docNum a',
                title: '#article > table > tbody > tr:nth-child(2) > td',
                description: '#article > table > tbody > tr:nth-child(10) > td > div',
                pubDate: '#article > table > tbody > tr:nth-child(6) > td > font',
            },
        },
    },
    my: {
        country: 'my',
        countryCN: '马来西亚',
        link: 'http://my.china-embassy.org/chn/zytz/',
        list: 'div[class=nbox_ul] > ul a',
        title: '#News_Body_Title',
        description: '#News_Body_Txt_A',
        pubDate: '#News_Body_Time',
    },
    sg: {
        country: 'sg',
        countryCN: '新加坡',
        link: 'http://sg.china-embassy.gov.cn/lsfw_0/zytz/',
        list: 'div.news-list a[target=_blank]',
        title: '#News_Body_Title',
        description: 'div.trs_editor_view',
        pubDate: 'div.view-date',
    },
    uk: {
        country: 'uk',
        countryCN: '英国',
        link: 'http://www.chinese-embassy.org.uk/chn/lsfw/lsxz/',
        list: '#docMore > tbody a',
        title: '#article > tbody > tr:nth-child(2) > td',
        description: '#article .content',
        pubDate: '#article > tbody > tr:nth-child(5) > td',
        consulates: {
            belfast: {
                cityCN: '贝尔法斯特',
                link: 'http://belfast.chineseconsulate.org/chn/tztg/',
                list: 'div.newslist a',
                title: '#News_Body_Title',
                description: '#News_Body_Txt_A > div',
                pubDate: '#News_Body_Time',
            },
            edinburgh: {
                cityCN: '爱丁堡',
                link: 'http://edinburgh.china-consulate.org/chn/zytz/',
                list: '#TRS_OUTLINE > tbody > tr:nth-child(3) a',
                title: '#article > tbody > tr:nth-child(1) > td',
                description: '#article > tbody > tr:nth-child(3) > td',
                pubDate: '#article > tbody > tr:nth-child(2) > td',
            },
            manchester: {
                cityCN: '曼彻斯特',
                link: 'http://manchester.chineseconsulate.org/chn/tzgg/',
                list: 'div#TRS a',
                title: '#article > table > tbody > tr:nth-child(1) > td > font > b',
                description: '#article > table > tbody > tr:nth-child(6) > td > div > div',
                pubDate: '#article > table > tbody > tr:nth-child(4) > td > font',
            },
        },
    },
    us: {
        country: 'us',
        countryCN: '美国',
        link: 'http://us.china-embassy.gov.cn/zytz/',
        list: '.list-content ul li a',
        title: 'div.title',
        description: 'div.trs_editor_view',
        pubDate: 'div.date',
        consulates: {
            chicago: {
                cityCN: '芝加哥',
                link: 'http://www.chinaconsulatechicago.org/chn/zytz/',
                list: 'div#TRS a',
                title: '#article > table > tbody > tr:nth-child(1) > td',
                description: '#article > table > tbody > tr:nth-child(6) > td > div',
                pubDate: '#article > table > tbody > tr:nth-child(3) > td > font',
            },
            newyork: {
                cityCN: '纽约',
                link: 'http://newyork.china-consulate.org/chn/fwzc/zxtz/',
                list: 'div.cbox_ul a',
                title: '#News_Body_Title',
                description: '#News_Body_Txt_A',
                pubDate: '#News_Body_Time',
            },
            sanfrancisco: {
                cityCN: '旧金山',
                link: 'http://www.chinaconsulatesf.org/chn/zytz/',
                list: 'div#docMore a',
                title: '#News_Body_Title',
                description: '#article > .News_Body_Txt_A',
                pubDate: '#News_Body_Time',
            },
        },
    },
};
