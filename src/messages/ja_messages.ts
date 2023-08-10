export default {
  id: 'ja',
  emoji: '🇯🇵',
  anonymous_user_name: '神秘的なもの',
  welcome_public: '{{ title }}へようこそ！',
  welcome_user: '{{ title }} へようこそ、{{user.firstName || user.email.includes("@") ? user.email.substring(0, user.email.indexOf("@")) : user.email}}!',
  title_login: 'ログイン',
  title_register: 'サインアップ',
  title_verifying: 'アカウントを確認しています...',
  title_requestPasswordReset: 'パスワードを再設定する',
  title_resetPassword: '新しいパスワードを設定する',
  title_verifying_ended: '検証終了',
  title_profile: '口座情報',
  button_profile: 'マイアカウント',
  button_update: '保存',
  info_profile_update: 'アカウント情報が正常に更新されました',
  button_reset_password: 'パスワードを再設定する',
  button_delete_my_account: 'アカウントを削除する (元に戻すことはできません)',
  label_confirm_user_delete: 'アカウントの削除を確認します。このアクションは元に戻せません。',
  label_email: 'Eメール',
  label_username: 'ユーザー名',
  label_usernameOrEmail: 'ユーザー名または電子メール',
  label_firstName: 'ファーストネーム',
  label_lastName: '苗字',
  label_name: '名前',
  label_password: 'パスワード',
  label_newPassword: '新しいパスワード',
  label_locale: '言語',
  label_token: '検証トークン',
  label_ctime: '作成した',
  label_mtime: '修正済み',
  button_login: 'ログイン',
  button_logout: 'サインアウト',
  button_register: 'サインアップ',
  button_forgot_password: 'パスワードをお忘れですか？',
  button_send_password_reset_email: '送信',
  button_set_new_password: 'パスワードを設定してください',
  info_password_reset_email_sent: 'メール メッセージが {{ email }} に送信されました。受信ボックスを確認して、パスワードをリセットするためのリンクを探してください',
  info_password_reset_email_error: 'エラーが発生したため、メッセージが送信されていない可能性があります。後でもう一度やり直してください',
  info_password_reset_try_again: '再試行',
  info_verify_token_error: '検証トークンの有効期限が切れているか、その他の理由で無効です',
  info_registration_not_allowed: '{{ title }} のオペレーターがアカウントの作成を無効にしました',
  button_invite_friends: '友達を {{ title }} に招待しましょう!',
  label_friend_emails: 'カンマまたはスペースで区切られた電子メールのリスト',
  button_send_invitations: '招待状を送る',
  info_invite_friends_header: '友達を {{ title }} に招待しましょう!',
  info_invite_friends_subheader: 'ここにいくつかのメール アドレスを入力してください。招待状が送信されます',
  info_invite_friends_limited_registration: '{{ title }} の運営者は、登録者を特定の人に制限しています。招待状を送信することはできますが、これらのユーザーがアカウントを正常に作成できるようにするには、サイト管理者によって承認済みユーザー リストにこれらのユーザーを追加する必要があります。',
  info_invite_friends_disabled_no_email: '{{ title }} でメールが設定されていないため、「友達を招待」機能は無効になっています',
  info_invite_friends_enabled_no_email: '「友達を招待」機能は有効になっていますが、{{ title }} でメールが設定されていないため、使用できません',
  info_invitation_success_results: 'あなたの招待状は {{ successCount }} 人の友達に送信されました',
  info_invitation_error_results: '招待状を {{ errorCount }} 人の友達に配信できませんでした',
  label_search: '探す',
  button_search: '探す',
  label_sort: '並び替え',
  label_sort_order: '注文',
  label_sort_ascending: '上昇',
  label_sort_descending: '降順',
  title_browsing_folder: 'フォルダ: {{folder}}',
  button_back_to: '{{prefix}}に戻る',
  button_back_to_root_folder: 'トップレベルに戻る',
  info_search_no_results: '何かがここにあるべき404の理由がありますが、ここには何もありません',
  label_media_unprocessed: '(未処理)',
  button_show_media_info: 'メディア情報を表示',
  button_hide_media_info: 'メディア情報を隠す',
  button_show_thumbnails: 'サムネイルを表示',
  button_hide_thumbnails: 'サムネイルを隠す',
  button_previous_thumbnail: '前',
  button_next_thumbnail: '次',
  thumbnail_alt_text: '{{ name }} のサムネイル画像',
  label_selected_thumbnail: '〜選択〜',
  button_select_thumbnail: 'このサムネイルを選択',
  info_no_thumbnails_found: '(サムネイルが見つかりません)',
  button_show_metadata: 'メタデータを表示',
  button_hide_metadata: 'hide metadata',
  error_field_required: '{{field}} 必要とされている',
  error_field_invalid: '{{ field }} は無効です',
  error_field_regex: '{{ field }} は無効です',
  error_field_min: '{{ field }} が短すぎます',
  error_field_max: '{{ field }} が長すぎます',
  error_field_min_value: '{{ field }} が小さすぎます',
  error_field_max_value: '{{ field }} が大きすぎます',
  error_field_email: '{{ field }} は有効なメール アドレスではありません',
  error_field_cannotDeleteSelf: '自分自身を削除することはできません',
  error_field_alreadyExists: '{{ field.toLowerCase() }} を持つ {{ thing }} は既に存在します',
  error_field_readOnly: '{{ field }} は読み取り専用です',
  error_field_accountNotFound: 'アカウントが見つからないか、パスワードが正しくありません',
  error_field_alreadyRegistered: 'この {{ field.toLowerCase() }} を持つアカウントは既に存在します',
  error_field_registrationNotAllowed: 'サイト運営者がアカウントの作成を無効にしました',
  error_field_url: '{{ field }} は有効な URL ではありません',
  error_field_host: '{{ field }} は有効なホスト名ではありません',
  error_field_locale: '{{ field }} は有効なロケールではありません',
  error_field_volume: '{{ field }} はソース名ではありません。文字、数字、および次の特殊文字のみを使用してください: ピリオド (.)、ハイフン (-)、アンダースコア (_)',
  error_field_notFound: '{{ field }} が見つかりませんでした',
  error_field_path: '{{ field }} は有効なパスではありません',
  error_field_cannotMirrorToSame: '読み取りソースと書き込みソースを同じソースにすることはできません',
  error_field_raw_hex: '{{ field }} は 16 進数ではありません (先頭の 0x は許可されていません)',
  error_field_hex: '{{ field }} は 16 進数ではありません',
  error_field_username: '{{ field }} は有効なユーザー名ではありません。文字で始まり、文字、数字、アンダースコア (_)、ハイフン (-)、およびドット (.) のみを含む必要があります。',
  locale_en: '英語',
  locale_es: 'スペイン語',
  locale_it: 'イタリアの',
  locale_fr: 'フランス語',
  locale_de: 'ドイツ人',
  locale_ar: 'アラビア語',
  locale_bn: 'ベンガル語',
  locale_hi: 'ヒンディー語',
  locale_ja: '日本',
  locale_ko: '韓国語',
  locale_pt: 'ポルトガル語',
  locale_ru: 'ロシア',
  locale_sw: 'スワヒリ語',
  locale_zh: '中国語',
  label_date: '{{MMM}} {{d}}、{{YYYY}}',
  label_date_short: '{{M}}/{{d}}/{{YYYY}}',
  label_date_and_time: '{{MMM}} {{d}}, {{YYYY}} / {{h}}:{{m}}{{a}}',
  label_date_and_time_short: '{{M}}/{{d}}/{{YYYY}} {{h}}:{{m}}{{a}}',
  label_date_undefined: '日時未設定',
  label_date_day_half_am: '午前',
  label_date_day_half_pm: '午後',
  label_date_day_0: '日曜日',
  label_date_day_1: '月曜日',
  label_date_day_2: '火曜日',
  label_date_day_3: '水曜日',
  label_date_day_4: '木曜日',
  label_date_day_5: '金曜日',
  label_date_day_6: '土曜日',
  label_date_day_short_0: '太陽',
  label_date_day_short_1: 'じぶんの',
  label_date_day_short_2: '火',
  label_date_day_short_3: '結婚した',
  label_date_day_short_4: '収集',
  label_date_day_short_5: '金',
  label_date_day_short_6: '土',
  label_date_month_0: '1月',
  label_date_month_1: '2月',
  label_date_month_2: '行進',
  label_date_month_3: '4月',
  label_date_month_4: '5月',
  label_date_month_5: '六月',
  label_date_month_6: '7月',
  label_date_month_7: '8月',
  label_date_month_8: '9月',
  label_date_month_9: '10月',
  label_date_month_10: '11月',
  label_date_month_11: '12月',
  label_date_month_short_0: '1月',
  label_date_month_short_1: '2月',
  label_date_month_short_2: '3月',
  label_date_month_short_3: '4月',
  label_date_month_short_4: '5月',
  label_date_month_short_5: 'ジュン',
  label_date_month_short_6: '7月',
  label_date_month_short_7: '8月',
  label_date_month_short_8: '9月',
  label_date_month_short_9: '10月',
  label_date_month_short_10: '11月',
  label_date_month_short_11: '12月',
  label_date_month_number_0: '1',
  label_date_month_number_1: '2',
  label_date_month_number_2: '3',
  label_date_month_number_3: '3',
  label_date_month_number_4: '5',
  label_date_month_number_5: '6',
  label_date_month_number_6: '7',
  label_date_month_number_7: '8',
  label_date_month_number_8: '9',
  label_date_month_number_9: '10',
  label_date_month_number_10: '11',
  label_date_month_number_11: '12',
  label_duration_days: '日々',
  label_duration_hours: '時間',
  label_duration_minutes: '分',
  label_duration_seconds: '秒',
  hint_readonly: '(読み取り専用)',
  label_mediainfo_title: '題名',
  label_mediainfo_artist: 'アーティスト',
  label_mediainfo_album_artist: 'アルバムアーティスト',
  label_mediainfo_author: '著者',
  label_mediainfo_composer: '作曲',
  label_mediainfo_year: '年',
  label_mediainfo_copyright: '著作権',
  label_mediainfo_album: 'アルバム',
  label_mediainfo_movie: '映画',
  label_mediainfo_description: '説明',
  label_mediainfo_comment: 'コメント',
  label_mediainfo_genre: 'ジャンル',
  label_mediainfo_location: '位置',
  label_mediainfo_show: '見せる',
  label_mediainfo_episode: 'エピソード',
  label_mediainfo_episode_sort: 'エピソード（ソート）',
  label_mediainfo_season: 'シーズン',
  label_mediainfo_lyrics: '歌詞',
  label_mediainfo_tags: 'タグ',
  label_mediainfo_duration: '間隔',
  label_mediainfo_width: '幅',
  label_mediainfo_height: '身長',
  label_mediainfo_size: 'サイズ',
  label_mediainfo_videoTracks: 'ビデオトラック',
  label_mediainfo_audioTracks: 'オーディオトラック',
  label_mediainfo_format: 'フォーマット',
  label_mediainfo_contentType: 'コンテンツ タイプ',
  label_mediainfo_bitRate: 'ビットレート',
  label_mediainfo_frameRate: 'フレームレート',
  label_mediainfo_dateEncoded: 'エンコードされた日付',
  button_admin: 'サイト構成',
  admin_title_site_administration: '{{ title }} 管理',
  admin_title_manage_configuration: 'システム構成',
  admin_title_volume_administration: 'ソース管理',
  admin_title_user_administration: 'ユーザー管理',
  admin_title_migrate_data: 'データの移行',
  admin_title_transform_queue: 'メディア変換キュー',
  admin_title_site_administration_publicConfig: 'パブリック構成',
  admin_title_site_administration_privateConfig: 'プライベート構成',
  admin_button_save_config: '保存',
  admin_info_config_updated: 'システム構成が正常に更新されました',
  admin_label_publicConfig_title: 'ウェブサイト名',
  admin_label_publicConfig_siteUrl: 'サイトのURL',
  admin_label_publicConfig_public: '公衆？',
  admin_label_publicConfig_registrationEnabled: '登録を許可しますか?',
  admin_label_publicConfig_limitRegistration: '制限登録',
  admin_label_publicConfig_inviteFriendsEnabled: 'ログインしているユーザーに「友達を招待」を表示しますか?',
  admin_label_publicConfig_locales: 'ローカル',
  admin_label_publicConfig_defaultLocale: 'デフォルトのロケール',
  admin_label_publicConfig_emailEnabled: 'メール有効?',
  admin_label_publicConfig_timeout: 'タイムアウト',
  admin_label_publicConfig_timeout_verify: 'アカウント確認トークンのタイムアウト',
  admin_label_publicConfig_timeout_resetPassword: 'パスワード トークンのタイムアウトのリセット',
  admin_label_privateConfig_admin: '管理者設定',
  admin_label_privateConfig_admin_user: '管理者ユーザー',
  admin_label_privateConfig_admin_user_email: 'Eメール',
  admin_label_privateConfig_admin_user_password: 'パスワード',
  admin_label_privateConfig_admin_user_firstName: 'ファーストネーム',
  admin_label_privateConfig_admin_user_lastName: '苗字',
  admin_label_privateConfig_admin_user_locale: 'ローカル',
  admin_label_privateConfig_admin_overwrite: '上書きしますか？',
  admin_label_privateConfig_email: 'SMTP 設定',
  admin_label_privateConfig_email_host: 'ホスト',
  admin_label_privateConfig_email_port: 'ポート',
  admin_label_privateConfig_email_user: 'ユーザー名',
  admin_label_privateConfig_email_password: 'パスワード',
  admin_label_privateConfig_email_secure: '安全？',
  admin_label_privateConfig_email_fromEmail: 'システムの電子メール アドレス',
  admin_label_privateConfig_redis: 'Redis 設定',
  admin_label_privateConfig_redis_host: 'ホスト',
  admin_label_privateConfig_redis_port: 'ポート',
  admin_label_privateConfig_redis_flushAtStartup: '起動時にフラッシュしますか?',
  admin_label_privateConfig_redis_listingCacheExpiration: 'リスト キャッシュの有効期限',
  admin_label_privateConfig_redis_manifestCacheExpiration: 'マニフェスト キャッシュの有効期限',
  admin_label_privateConfig_media: 'メディアサポート',
  admin_label_privateConfig_media_video: 'ビデオ',
  admin_label_privateConfig_media_video_allowedCommands: '許可されたコマンド',
  admin_label_privateConfig_encryption: '暗号化設定',
  admin_label_privateConfig_encryption_key: '暗号化キー',
  admin_label_privateConfig_encryption_iv: '初期化ベクトル (IV)',
  admin_label_privateConfig_encryption_algo: 'アルゴリズム',
  admin_label_privateConfig_encryption_bcryptRounds: 'Bcrypt ラウンド',
  admin_label_privateConfig_session: 'セッション設定',
  admin_label_privateConfig_session_expiration: 'セッションタイムアウト',
  admin_label_privateConfig_autoscan: '自動スキャン設定',
  admin_label_privateConfig_autoscan_enabled: '自動スキャンを有効にする',
  admin_label_privateConfig_autoscan_interval: '通常のスキャン間隔',
  admin_label_privateConfig_autoscan_initialDelay: '起動スキャン遅延',
  admin_label_privateConfig_autoscan_showTransformOutput: 'ログ変換出力?',
  admin_label_privateConfig_autoscan_cleanupTemporaryAssets: '一時ファイルをクリーンアップしますか?',
  admin_label_privateConfig_autoscan_deleteIncompleteUploads: '不完全なアップロードをクリーンアップしますか?',
  admin_label_privateConfig_autoscan_concurrency: '同時実行',
  admin_label_total_user_count: '{{ totalUserCount }} 総ユーザー数',
  admin_button_delete_user: 'ユーザーの削除',
  admin_label_confirm_user_delete: 'ユーザーの削除を確認してください: {{ email }}',
  label_configCategory: '構成カテゴリ',
  admin_button_add_volume: 'ソースを追加',
  admin_title_add_volume: 'ソースを追加',
  admin_button_delete_volume: 'ソースを削除',
  admin_button_scan_volume: 'スキャン',
  admin_info_scan_scanning: '走査...',
  admin_info_scan_successful: 'スキャンが正常に開始されました',
  admin_info_scan_error: 'スキャン中にエラーが発生しました',
  admin_label_confirm_volume_delete: 'ソースの削除を確認してください: {{ source }}',
  admin_info_volume_added: '新しいソース \'{{ source }}\' が正常に追加されました',
  admin_info_volume_add_error: 'ソース \'{{ source }}\' の追加中にエラーが発生しました',
  admin_label_volume_name: 'ソース名',
  admin_label_self_volume: '{{ title }} ストレージ',
  admin_label_volume_type: 'ソースの種類',
  admin_label_volume_readOnly: '読み取り専用？',
  admin_label_volume_cacheSize: 'キャッシュ サイズの一覧表示 (無効にする場合はゼロ)',
  admin_label_volume_encryption_enable: '暗号化を有効にする',
  admin_label_volume_encryption_key: '暗号化キー',
  admin_label_volume_encryption_iv: '初期化ベクトル (IV)',
  admin_label_volume_encryption_algo: 'アルゴリズム',
  label_volumeType_local: 'ローカルファイルシステム',
  label_volumeType_local_field_key: 'マウント ディレクトリ',
  label_volumeType_local_field_mode: 'ファイル/ディレクトリ作成モード',
  label_volumeType_s3: 'アマゾン S3',
  label_volumeType_s3_field_key: 'AWS アクセス キー',
  label_volumeType_s3_field_secret: 'AWS シークレット キー',
  label_volumeType_s3_field_bucket: 'S3 バケット',
  label_volumeType_s3_field_region: 'AWS リージョン',
  label_volumeType_s3_field_prefix: 'バケットのプレフィックス',
  label_volumeType_s3_field_delimiter: 'デリミタ',
  label_volumeType_b2: 'バックブレイズB2',
  label_volumeType_b2_field_key: 'キー ID',
  label_volumeType_b2_field_secret: 'アプリケーションキー',
  label_volumeType_b2_field_bucket: 'B2 バケット ID (名前ではない)',
  label_volumeType_b2_field_partSize: 'パーツサイズ',
  label_volumeType_b2_field_prefix: 'バケットのプレフィックス',
  label_volumeType_b2_field_delimiter: 'デリミタ',
  admin_label_firstEvent: '最初のイベント',
  admin_label_lastEvent: '最後のイベント',
  admin_label_eventTime: '時間',
  admin_label_eventName: 'イベント',
  admin_label_eventDescription: '説明',
  admin_label_xformQueueEmpty: 'アクティブなジョブはありません',
  admin_label_migration_noSources: 'ソースが定義されていません',
  admin_label_migration_results: '移行結果:',
  admin_label_migration_readPath: 'パスから読み取る (ファイルシステムのルートは空白)',
  admin_label_readPath: '読み取りパス',
  admin_label_migration_writePath: 'パスへの書き込み (ファイルシステムのルートは空白)',
  admin_label_writePath: '書き込みパス',
  admin_button_migrate_data: 'データの移行',
  admin_info_migration_success: 'データは正常に移行されました',
  admin_info_migration_error: 'データの移行中にエラーが発生しました',
  http_invalid_request_method: 'HTTP リクエスト メソッド {{method}} は、このエンドポイントではサポートされていません',
  admin_label_privateConfig_admin_user_username: 'ユーザー名',
  locale_id: 'インドネシア語',
  locale_ur: 'ウルドゥー語',
  locale_tl: 'タガログ語',
  locale_pl: '研磨',
  locale_vi: 'ベトナム語',
  locale_ha: 'ハウサ',
  locale_mr: 'マランティ',
  locale_tr: 'トルコ語',
  info_search_searching: '...',
  search_stop_words: 'a,about,above,after,again,against,all,am,an,and,any are,aren\'t,as,at,be,because,been,before,below, between,both,but, by,can\'t,cannot,could,couldn\'t,did,didn\'t,do,does,doesn\'t,doing,don\'t,down,during,each,few,for,from,further,had, hadn\'t,has,hasn\'t,have,haven\'t,having,he,he\'d,he\'ll,he\'s,her,here,here\'s,hers,herself,himself,his,how,how\'s, i,i\'d,i\'ll,i\'m,i\'ve,if,in,into,is,isn\'t,it,it\'s,its,itself,let\'s,me,more,most,mustn\'t, my,myself,no,nor,not,of,off,on,once,only,or,other,ought,our,ours yourself,out,over,own,same,shan\'t,she,she\'d,she \'ll,she\'s,should,shouldn\'t,so,some,such,than,that,thentheirtheirstheirsthemthemself,thenthere,there\'s,these,they,they\'d,they\'ll ,they\'re,they\'ve,this,those,through,to,too,under,until,up,uct,utc,very,was,wasn\'t,we,we\'d,we\'ll,we\'re ,we\'ve,were,weren\'t,what,what\'s,when,when\'s,where,where\'s,which,while,who,who\'s,whom,why,why\'s,with,won\'t,would,wouldn\'t,you ,you\'d,you\'ll,you\'re,you\'ve,your,yours,yourself,yourself',
  label_header_comments: 'コメント',
  label_header_no_comments: '何か言いたいことはありますか？',
  label_comment: 'コメントを追加してください！',
  label_comment_modified: '編集済み',
  label_updating_comment: '更新中...',
  label_removing_comment: '削除中...',
  button_add_comment: 'コメントを追加する',
  button_update_comment: 'コメントを更新',
  admin_title_index_administration: 'インデックスの管理',
  admin_button_reindex_volume: '再インデックス',
  admin_info_reindex_indexing: '索引付け中...',
  admin_info_reindex_error: '再インデックス中にエラーが発生しました: {{ e }}',
  admin_info_reindex_successful: '再インデックスが正常に開始されました',
  admin_info_reindex_info_error: 'インデックス再作成のステータスの読み取り中にエラーが発生しました: {{ e }}',
  admin_label_reindex_path: 'ソースとパス',
  admin_label_reindex_time: '時間',
  admin_label_reindex_status: '状態',
  admin_label_reindex_noResults: '再インデックスの結果が見つかりません',
  footer_credit: '<a style="text-decoration: none;" href="https://github.com/cobbzilla/yuebing">🥮 Yuebing が提供</a>',
  info_search_indexes_building: 'この同じ検索で、将来さらに多くの結果が返される可能性があります。一部の検索インデックスが再構築されています: {{ indexes }}',
  info_search_no_results_unverified: '検索結果を表示するには、 {{ email }}に送信されたリンクを使用してアカウントを確認してください。',
  label_metadata: 'ファイルのメタデータ',
  label_mediainfo: 'ファイル メディア情報',
  label_add_tag: 'タグ付けする',
  label_adding_tag: 'タグを追加中...',
  label_removing_tag: 'タグを削除しています...',
  label_scan_ignoreErrors: '以前のエラーを無視する',
  label_scan_overwrite: '現在のファイルを上書きする',
  label_scan_reprocess: '再処理',
  label_scan_reprocess_profiles: 'これらのプロファイルを再処理します',
  label_path: '道',
  label_select_all: 'すべて選択',
  locale_text_list_separator: '、',
  admin_title_volume_browser: 'ソースを参照',
  admin_title_reindex_status: 'インデックス作成ステータス',
  admin_button_browse_volume: 'ブラウズ',
  admin_label_scan_config: 'スキャンの構成: {{ source }}',
  admin_label_scan_olderThan: '特定の日時以降に処理されたメディアを無視する',
  admin_button_delete_path: '消去',
  admin_button_rebuildSearchIndex: '検索インデックスの再構築',
  admin_button_rebuildSearchIndex_warning: 'これにより、すべてのソースで検索インデックスが再構築され、非常に長い時間がかかる可能性があります',
  admin_info_path_delete: 'パスを削除しています...',
  label_editor: '編集者？',
  label_noCache: 'キャッシュをリセットしますか？',
  label_previous_page: '結果の前のページ',
  label_next_page: '結果の次のページ',
  label_results_info: '合計{{ start }}のうち{{ end }}から{{ total }}までの結果を表示しています',
  label_playback_quality: '再生品質',
  label_playback_quality_auto: '自動',
  admin_label_privateConfig_redis_buildSearchIndexAtStartup: '起動時に検索インデックスを構築する',
  locale_af: 'アフリカーンス語',
  locale_sq: 'アルバニア人',
  locale_am: 'アムハラ語',
  locale_hy: 'アルメニア語',
  locale_az: 'アゼルバイジャン語',
  locale_eu: 'バスク語',
  locale_be: 'ベラルーシ語',
  locale_bs: 'ボスニア語',
  locale_bg: 'ブルガリア語',
  locale_ca: 'カタルーニャ語',
  locale_ceb: 'セブアノ語',
  locale_co: 'コルシカ島',
  locale_hr: 'クロアチア語',
  locale_cs: 'チェコ語',
  locale_da: 'デンマーク語',
  locale_nl: 'オランダの',
  locale_eo: 'エスペラント',
  locale_et: 'エストニア語',
  locale_fi: 'フィンランド語',
  locale_fy: 'フリジア語',
  locale_gl: 'ガリシア語',
  locale_ka: 'ジョージア語',
  locale_el: 'ギリシャ語',
  locale_gu: 'グジャラート語',
  locale_ht: 'ハイチ クレオール',
  locale_haw: 'ハワイアン',
  locale_he: 'ヘブライ語',
  locale_hmn: 'モン族',
  locale_hu: 'ハンガリー語',
  locale_is: 'アイスランド語',
  locale_ig: 'イボ語',
  locale_ga: 'アイルランド人',
  locale_jv: 'ジャワ語',
  locale_kn: 'カンナダ語',
  locale_kk: 'カザフ語',
  locale_km: 'クメール語',
  locale_rw: 'ルワンダ',
  locale_ku: 'クルド',
  locale_ky: 'キルギス',
  locale_lo: 'ラオ語',
  locale_la: 'ラテン',
  locale_lv: 'ラトビア語',
  locale_lt: 'リトアニア語',
  locale_lb: 'ルクセンブルク語',
  locale_mk: 'マケドニアの',
  locale_mg: 'マダガスカル',
  locale_ms: 'マレー語',
  locale_ml: 'マラヤーラム語',
  locale_mt: 'マルタ語',
  locale_mi: 'マオリ語',
  locale_mn: 'モンゴル語',
  locale_my: 'ミャンマー（ビルマ語）',
  locale_ne: 'ネパール語',
  locale_no: 'ノルウェー語',
  locale_ny: 'ニャンジャ（チチェワ）',
  locale_or: 'オディア（織谷）',
  locale_ps: 'パシュトゥー語',
  locale_fa: 'ペルシア語',
  locale_pa: 'パンジャブ語',
  locale_ro: 'ルーマニア語',
  locale_sm: 'サモア語',
  locale_gd: 'スコットランドゲール語',
  locale_sr: 'セルビア語',
  locale_st: 'セソト',
  locale_sn: 'ショナ',
  locale_sd: 'シンド語',
  locale_si: 'シンハラ語 (シンハラ語)',
  locale_sk: 'スロバキア語',
  locale_sl: 'スロベニア語',
  locale_so: 'ソマリ語',
  locale_su: 'スンダ人',
  locale_sv: 'スウェーデンの',
  locale_tg: 'タジク語',
  locale_ta: 'タミル語',
  locale_tt: 'タタール語',
  locale_te: 'テルグ語',
  locale_th: 'タイ語',
  locale_tk: 'トルクメン語',
  locale_uk: 'ウクライナ語',
  locale_ug: 'ウイグル語',
  locale_uz: 'ウズベク語',
  locale_cy: 'ウェールズ語',
  locale_xh: 'コサ語',
  locale_yi: 'イディッシュ語',
  locale_yo: 'ヨルバ語',
  locale_zu: 'ズールー語',
  label_mediainfo_audioLanguage: '言語 (音声)',
  label_mediainfo_videoLanguage: '言語（ビデオ）',
  label_mediainfo_textTrackLanguages: '言語（字幕）',
  label_mediainfo_videoTrackCount: 'ビデオトラック',
  label_mediainfo_audioTrackCount: 'オーディオトラック',
  label_mediainfo_textTrackCount: 'テキストトラック'
}
