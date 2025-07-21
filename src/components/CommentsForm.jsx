'use client';
import { useState, useEffect } from 'react';

export default function CommentsForm({ productId }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [comments, setComments] = useState([]);

  // ✅ Load comments from backend on mount
  useEffect(() => {
    const loadComments = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/comments?productId=${productId}`);
        const data = await res.json();

        // ✅ Check if it's an array before setting
        if (Array.isArray(data)) {
          setComments(data);
        } else {
          console.warn('Comments response was not an array:', data);
          setComments([]); // fallback
        }
      } catch (err) {
        console.error('Failed to fetch comments:', err);
        setComments([]);
      }
    };
    loadComments();
  }, [productId]);


  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setShowErrorModal(true);
      return;
    }

    const today = new Date();
    const date = today.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

    const commentData = {
      productId,
      name,
      email,
      subject,
      message,
      date,
    };

    try {
      const res = await fetch('http://localhost:5000/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(commentData),
      });

      if (res.ok) {
        const newComment = await res.json();
        setComments((prev) => [...prev, newComment]);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Failed to submit comment.');
      }
    } catch (err) {
      console.error('Submit error:', err);
    }
  };

  return (
    <div className="mt-12 text-black">
      <h3 className="text-xl font-semibold mb-4">Post Your Comment</h3>

      {showErrorModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <h4 className="text-lg font-semibold mb-2 text-red-600">❌ Error</h4>
            <p className="text-gray-700 mb-4">Please fill the required fields.</p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowErrorModal(false)}
                className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Show Comments */}
      {/* <div className="mt-8 border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">
          {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
        </h2>
        <ul className="space-y-4">
          {comments.map((c) => (
            <li key={c._id} className="border-b pb-4">
              <h6 className="font-bold">{c.name}</h6>
              <span className="text-sm text-gray-500">{c.date}</span>
              <p className="mt-2">{c.message}</p>
            </li>
          ))}
        </ul>
      </div> */}
      {Array.isArray(comments) && comments.length > 0 ? (
        <ul className="space-y-4">
          {comments.map((c) => (
            <li key={c._id} className="border-b pb-4">
              <h6 className="font-bold">{c.name}</h6>
              <span className="text-sm text-gray-500">{c.date}</span>
              <p className="mt-2">{c.message}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No comments yet.</p>
      )}


      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="w-full border p-2 rounded"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          className="w-full border p-2 rounded"
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          name="message"
          rows={4}
          placeholder="Message"
          className="w-full border p-2 rounded"
          value={formData.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
}
