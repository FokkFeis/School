using System;
using System.Windows.Forms;
using System.Threading;
using System.Drawing;

namespace TickingClock
{
    class WorldTime : Form
    {
        PictureBox picture;
		PictureBox digiPicture;
        Thread clockThread;

        bool ended = false;

        protected override void Dispose(bool disposing)
        {
            ended = true;
            Console.WriteLine("Wait while we shut down...");
            clockThread.Join();
            base.Dispose(disposing);
            Application.Exit();
        }

        WorldTime()
        {
            Text = "Clock";
           
            // Set up a picture box 
            picture = new PictureBox();
            picture.Size = new Size(150, 150);
            // add the picture to the form
            Controls.Add(picture);

			digiPicture = new PictureBox ();
			digiPicture.Size = new Size (150, 150);

			Controls.Add (digiPicture);
            
            // add the event 
            picture.Paint += new PaintEventHandler(new Clock().ClockPaint);
            // create and start a thread to control the clock
            clockThread = new Thread(new ThreadStart(TickClock));
            clockThread.Start();
        }


        void TickClock()
        {
            while (!ended)
            {
                picture.Invalidate();
                Thread.Sleep(1000);
            }
        }
	
        public class Clock
        {
            int seconds = 0;
            SolidBrush bluebrush, whitebrush;
            Pen blackpen;
            int start = 100;

            public Clock()
            {
                blackpen = new Pen(Color.Black);
                bluebrush = new SolidBrush(Color.Blue);
                whitebrush = new SolidBrush(Color.LightGray);
            }

            // The handler redraws the whole clock
            public void ClockPaint(object source, PaintEventArgs e)
            {
                Graphics g = e.Graphics;
                g.DrawEllipse(blackpen, start / 2, start / 2, 100, 100);
                g.FillEllipse(whitebrush, start / 2, start / 2, 100, 100);
                g.FillEllipse(bluebrush, start, start, 5, 5);
                Hands(g);
                seconds++;
            }

            void Hands(Graphics g)
            {
                double hourAngle = 2 * Math.PI * (seconds - 3 * 60 * 60) / (12 * 60 * 60);
                double minuteAngle = 2 * Math.PI * (seconds - 15 * 60) / (60 * 60);
                double secondAngle = 2 * Math.PI * (seconds - 15) / 60;
                g.DrawLine(blackpen, start, start,
                    start + (int)(30 * Math.Cos(hourAngle)),
                    start + (int)(30 * Math.Sin(hourAngle)) + 5);
                g.DrawLine(blackpen, start, start,
                    start + (int)(40 * Math.Cos(minuteAngle)),
                    start + (int)(40 * Math.Sin(minuteAngle)));
                g.DrawLine(blackpen, start, start,
                    start + (int)(45 * Math.Cos(secondAngle)),
                    start + (int)(45 * Math.Sin(secondAngle)));
            }
        }

        static void Main()
        {
            Application.Run(new WorldTime());
        }
    }
}
