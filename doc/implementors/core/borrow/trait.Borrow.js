(function() {var implementors = {};
implementors["async_std"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"async_std/path/struct.Path.html\" title=\"struct async_std::path::Path\">Path</a>&gt; for <a class=\"struct\" href=\"async_std/path/struct.PathBuf.html\" title=\"struct async_std::path::PathBuf\">PathBuf</a>",synthetic:false,types:["async_std::path::pathbuf::PathBuf"]},];
implementors["crossbeam_epoch"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;T&gt; for <a class=\"struct\" href=\"crossbeam_epoch/struct.Owned.html\" title=\"struct crossbeam_epoch::Owned\">Owned</a>&lt;T&gt;",synthetic:false,types:["crossbeam_epoch::atomic::Owned"]},];
implementors["log"] = [{text:"impl&lt;'k&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;str&gt; for <a class=\"struct\" href=\"log/kv/struct.Key.html\" title=\"struct log::kv::Key\">Key</a>&lt;'k&gt;",synthetic:false,types:["log::kv::key::Key"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()