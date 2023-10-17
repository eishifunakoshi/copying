interface NewsItemProps {
  date: string;
  content: string;
}

function NewsItem({ date, content }: NewsItemProps) {
  return (
    <div className="px-3 pb-2 space-y-1">
      <hr className="border-solid border-slate-500"></hr>
      <div className="md:flex md:justify-between md:py-2 md:text-sm lg:text-lg">
        <div>{date}</div>
        <div>{content}</div>
      </div>
    </div>
  );
}

function Test2() {
  return (
    <div className="md:px-10">
      <div className="text-center py-6">
        <div className="text-green-500">NEWS</div>
        <div className="">最新ニュース</div>
      </div>

      <NewsItem
        date="2021.05.19"
        content="この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています."
      />
      <NewsItem
        date="2021.05.19"
        content="この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています."
      />
      <NewsItem
        date="2021.05.19"
        content="この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています."
      />
      <NewsItem
        date="2021.05.19"
        content="この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています."
      />
    </div>
  );
}

export default Test2;
