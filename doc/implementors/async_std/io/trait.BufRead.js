(function() {var implementors = {};
implementors["async_std"] = [{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"async_std/io/trait.BufRead.html\" title=\"trait async_std::io::BufRead\">BufRead</a>, U:&nbsp;<a class=\"trait\" href=\"async_std/io/trait.BufRead.html\" title=\"trait async_std::io::BufRead\">BufRead</a>&gt; <a class=\"trait\" href=\"async_std/io/trait.BufRead.html\" title=\"trait async_std::io::BufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"async_std/io/struct.Chain.html\" title=\"struct async_std::io::Chain\">Chain</a>&lt;T, U&gt;",synthetic:false,types:["async_std::io::read::chain::Chain"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"async_std/io/trait.BufRead.html\" title=\"trait async_std::io::BufRead\">BufRead</a>&gt; <a class=\"trait\" href=\"async_std/io/trait.BufRead.html\" title=\"trait async_std::io::BufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"async_std/io/struct.Take.html\" title=\"struct async_std::io::Take\">Take</a>&lt;T&gt;",synthetic:false,types:["async_std::io::read::take::Take"]},{text:"impl&lt;R:&nbsp;<a class=\"trait\" href=\"async_std/io/trait.Read.html\" title=\"trait async_std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"async_std/io/trait.BufRead.html\" title=\"trait async_std::io::BufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"async_std/io/struct.BufReader.html\" title=\"struct async_std::io::BufReader\">BufReader</a>&lt;R&gt;",synthetic:false,types:["async_std::io::buf_reader::BufReader"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"async_std/io/trait.BufRead.html\" title=\"trait async_std::io::BufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"async_std/io/struct.Cursor.html\" title=\"struct async_std::io::Cursor\">Cursor</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>",synthetic:false,types:["async_std::io::cursor::Cursor"]},{text:"impl <a class=\"trait\" href=\"async_std/io/trait.BufRead.html\" title=\"trait async_std::io::BufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"async_std/io/struct.Empty.html\" title=\"struct async_std::io::Empty\">Empty</a>",synthetic:false,types:["async_std::io::empty::Empty"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()